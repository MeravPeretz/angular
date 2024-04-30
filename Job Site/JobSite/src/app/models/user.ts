import { JobField } from "./jobField";

export interface User{
    id:number,
    name:string,   
    password:string, 
    jobSearchField :JobField,  
}