import { JobField } from "./jobField";

export interface Job{
    id:number,
    name:string, 
    jobField :JobField,  
    Hours:number, 
    area:string,
    requests:string,
    workingFromHome:boolean
}