import { User } from "./src/User"

export interface Mappable {
    location : {
        lat: number;
        lng: number;
    };
}

export class CustomMap {
    private googleMap: google.maps.Map

    constructor(divId : string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    async addMarker(place : Mappable) : Promise<void> {
        const { Marker } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary
        new Marker({
            map: this.googleMap,
            position: {
                lat: place.location.lat,
                lng: place.location.lng
            },
        })  
    }
}