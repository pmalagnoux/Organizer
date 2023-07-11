import { forEachChild } from "typescript";
import { File } from "./file";
export class PathNode {
  
    content!: string;
    children!: PathNode[];
    isLeaf!: boolean;
    file!: File | undefined;
  

    constructor(content: string, file : File | undefined,  isLeaf = false) {
        this.content = content;
        this.children = [];
        this.isLeaf = isLeaf;
        this.file = file;
    
    }



}
