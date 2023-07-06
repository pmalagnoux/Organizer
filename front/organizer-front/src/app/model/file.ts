import { Type } from "./type";
import { Contact } from "./contact";
import { Tag } from "./tag";

export class File {
    id!: number;
    name!: string;
    extension!: string;
    location!: string;
    contact!: Contact | null;
    type!: Type | null;
    tags !: Tag[];

}
