import { Perimeter } from "./perimeter";
import { File } from "./file";
export class Contact {
     id!: number;
     firstName!: string;
     lastName!: string;
     mail!: string;
     perimeters !: Perimeter[];
     files !: File[]
}
