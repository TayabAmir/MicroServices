import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

export class Password {
    static async tohash(password : string) {
        const salt = randomBytes(8).toString('hex');
        const buf = (await scryptAsync(password, salt, 64)) as Buffer
        return `${buf.toString('hex')}.${salt}`
    }
    
    static async compare(storedPass : string, pass : string) {
        const [hashedPass, salt] = storedPass.split('.');
        const buf = (await scryptAsync(pass, salt, 64)) as Buffer
        return buf.toString('hex') === hashedPass
    }
}