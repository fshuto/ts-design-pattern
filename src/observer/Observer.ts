import { Subject, eType } from "./Subject";

export interface Observer {
    type : eType;
    Update(subject : Subject) : void;
}