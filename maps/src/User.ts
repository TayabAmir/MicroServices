import { faker } from "@faker-js/faker";
import { Mappable } from "../CustomMap";


export class User implements Mappable {
    public name : string;
    public location : {
        lat : number;
        lng : number;
    }

    constructor(){
        this.name = faker.name.firstName()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }
};