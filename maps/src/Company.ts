import { faker } from "@faker-js/faker";
import { Mappable } from "../CustomMap";

export class Company implements Mappable {
    public companyName: string;
    public catchPhrase: string;
    public location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.companyName = faker.company.name()
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }
}