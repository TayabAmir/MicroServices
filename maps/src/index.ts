/// <reference types="@types/google.maps" />
import { CustomMap } from "../CustomMap";
import { Company } from "./Company";
import { User } from "./User";

const m = new CustomMap('map');
const u = new User();
const c = new Company();
m.addMarker(u)
m.addMarker(c)