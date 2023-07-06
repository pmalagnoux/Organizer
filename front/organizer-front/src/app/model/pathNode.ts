
export class PathNode {
  
    content!: string;
    children!: PathNode[];
    isLeaf!: boolean;
  

    constructor(content: string, isLeaf = false) {
        this.content = content;
        this.children = [];
        this.isLeaf = isLeaf;
    }


}
