import { NestedTreeControl } from '@angular/cdk/tree';
import { AfterContentInit, AfterViewInit, Component, DoCheck, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Observable, lastValueFrom } from 'rxjs';
import { File } from 'src/app/model/file';
import { PathNode } from 'src/app/model/pathNode';
import { FileService } from 'src/app/service/file.service';
@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class FilesListComponent implements OnInit, AfterViewInit{


	files!: File[];
	files$!: Observable<File[]>;
	pathList!: string[][];
	folders!: PathNode[];
	treeControl!: NestedTreeControl<PathNode>;
	dataSource!: MatTreeNestedDataSource<PathNode>;

	isReady = false;

	hasChild = (_: number, node: PathNode) => !!node.children && node.children.length > 0;
	constructor(private fileService : FileService){}

	async ngOnInit() {
		this.folders = [];
		this.treeControl = new NestedTreeControl<PathNode>(node => node.children);
		this.dataSource = new MatTreeNestedDataSource<PathNode>();
		await this.setup();
		this.createPathTree();
		this.reduceTree(this.folders[0]);
		this.dataSource.data = [this.folders[0]];
		this.isReady = true;
	}

	async setup(){
		this.files = [];
		this.files$ = this.fileService.getAllFiles();
		this.files = await lastValueFrom(this.files$);
	}

	async ngAfterViewInit() {
		await this.viewIsReady()
		let items = document.getElementsByClassName("mat-tree-node cdk-tree-node");
		
		const icon = document.createElement("i")
		icon.classList.add("fa-regular") 
		icon.classList.add("fa-file")
		for(var i=0; i< items.length; i++){
			items[i].prepend(icon.cloneNode(true));
		
		}
	}

	async viewIsReady() {
		while( this.isReady == false){
			await new Promise((resolve) => setTimeout(resolve, 1));
		}
	}

	public createPathTree(){
		this.pathList = [];
		this.files.forEach( file => {
			const path = file.location.split("\\");
			this.createBranch(path, 0, null);
		});
	}	

	createBranch(pathArrray : string[], index : number, previousNode : PathNode | null){

		if(index == pathArrray.length - 1){
			var leaf = new PathNode(pathArrray[index], true);
			previousNode?.children.push(leaf);
			return
		}
		else{
			var currentNode = this.folders.find(node => node.content == pathArrray[index])
			if (currentNode == undefined){
				// 
				if ( previousNode != null ){
					var previousChild = previousNode.children.find(node => node.content == pathArrray[index])
					if (previousChild != undefined){
						this.createBranch(pathArrray, index + 1, previousChild);
					}else {
						currentNode = new PathNode(pathArrray[index]);
						this.folders.push(currentNode);
						this.createBranch(pathArrray, index + 1, currentNode);
					}
				}
				else{
					currentNode = new PathNode(pathArrray[index]);
					this.folders.push(currentNode);
					this.createBranch(pathArrray, index + 1, currentNode);
				}
			}
			else {
				if (previousNode!= null){
					if (previousNode.children.find(node => node.content == pathArrray[index]) == undefined){
						previousNode?.children.push(currentNode);
					}
				}
				this.createBranch(pathArrray, index + 1, currentNode);
			}
		}
	}

	reduceTree(node : PathNode){
		if (node.isLeaf){
			return
		}
		if(node.children.length == 1 && node.children[0].isLeaf == false){
			var indexFolder = this.folders.findIndex(folder => folder.content == node.content);
			node.content += "\\" + node.children[0].content
			node.children = node.children[0].children
			this.folders[indexFolder] = node;
			this.folders = this.folders.filter( folder => folder != node.children[0]);
			this.reduceTree(node);
		}

		else {
			node.children.forEach(child => {
				this.reduceTree(child);
			})
		}
	}


}
