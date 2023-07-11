import { NestedTreeControl } from '@angular/cdk/tree';
import { AfterContentInit, AfterViewInit, Component, DoCheck, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
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
	root!: PathNode;
	isReady = false;
	fileRedirect!: File | undefined;
	hasChild = (_: number, node: PathNode) => !!node.children && node.children.length > 0;

	constructor(private fileService : FileService,  private router: Router){}

	async ngOnInit() {
		this.folders = [];
		this.treeControl = new NestedTreeControl<PathNode>(node => node.children);
		this.dataSource = new MatTreeNestedDataSource<PathNode>();
		await this.setup();
		this.createPathTree();
		this.reduceTree(this.folders[0]);
		this.root = this.folders[0];
		console.log(this.root)
		this.dataSource.data = [this.root];
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
			this.addClickListener(items[i], this.toFile.bind(this));
			items[i].prepend(icon.cloneNode(true));
			
		}
	}

	addClickListener(element: Element, callback: (content: string) => void): void {
		
		if (element) {
			element.addEventListener('click', () => {
			const content = element.textContent || ''; // Récupérer le contenu de la div
			callback(content); // Appeler la fonction de rappel avec le contenu en tant que paramètre
			});
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
			var file = this.files.find(file => file.location == pathArrray.join("\\"));
			
				var leaf = new PathNode(pathArrray[index], file, true);
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
						currentNode = new PathNode(pathArrray[index], undefined);
						this.folders.push(currentNode);
						this.createBranch(pathArrray, index + 1, currentNode);
					}
				}
				else{
					currentNode = new PathNode(pathArrray[index], undefined);
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
	
	toFile(content: string){
		this.findFileByName(this.root, content);
		if(this.fileRedirect != undefined){
			this.router.navigateByUrl(`/file/${this.fileRedirect.id}`);
		}
	  }

	findFileByName(currentNode: PathNode, name : string) {
		if( currentNode.isLeaf && currentNode.content.trim() == name.trim()){
			this.fileRedirect =  currentNode.file;
		}

		else {
			for (let i = 0; i < currentNode.children.length; i++) {
				const element = currentNode.children[i];
				this.findFileByName( element, name);
			}
		}
    }
}
