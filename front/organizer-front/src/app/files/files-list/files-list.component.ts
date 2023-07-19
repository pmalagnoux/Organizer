import { NestedTreeControl } from '@angular/cdk/tree';
import { AfterContentInit, AfterViewInit, Component, DoCheck, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { Observable, lastValueFrom } from 'rxjs';
import { File } from 'src/app/model/file';
import { PathNode } from 'src/app/model/pathNode';
import { Tag } from 'src/app/model/tag';
import { FileService } from 'src/app/service/file.service';
import { TagService } from 'src/app/service/tag.service';
@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class FilesListComponent implements OnInit, AfterViewInit{


	files!: File[];
	files$!: Observable<File[]>;
	tags!: Tag[];
	tags$!: Observable<Tag[]>;
	tagColor !: {"tag": number, "filter": string}[];
	pathList!: string[][];
	folders!: PathNode[];
	treeControl!: NestedTreeControl<PathNode>;
	dataSource!: MatTreeNestedDataSource<PathNode>;
	root!: PathNode;
	isReady = false;
	fileRedirect!: File | undefined;
	hasChild = (_: number, node: PathNode) => !!node.children && node.children.length > 0;

	constructor(private fileService : FileService, private tagService: TagService, private router: Router){}

	async ngOnInit() {
		this.folders = [];
		this.treeControl = new NestedTreeControl<PathNode>(node => node.children);
		this.dataSource = new MatTreeNestedDataSource<PathNode>();
		await this.setup();
		this.setupColors();
		this.createPathTree();
		this.reduceTree(this.folders[0]);
		this.root = this.folders[0];
		this.dataSource.data = [this.root];
		this.isReady = true;
	}

	async setup(){
		this.files = [];
		this.tags = [];
		this.files$ = this.fileService.getAllFiles();
		this.tags$ = this.tagService.getAllTags();
		this.files = await lastValueFrom(this.files$);
		this.tags = await lastValueFrom(this.tags$);
	}

	async ngAfterViewInit() {
		await this.viewIsReady()
		let items = document.getElementsByClassName("mat-tree-node cdk-tree-node");
		//Icon file
		const icon = document.createElement("i")
		icon.classList.add("fa-regular") 
		icon.classList.add("fa-file")
		
		for(var i=0; i< items.length; i++){
			this.addClickListener(items[i], this.toFile.bind(this));
			items[i].prepend(icon.cloneNode(true));

			let file = this.files.find(a => (a.name.trim() + a.extension.trim()) == items[i].textContent?.trim());
	
			if(file != undefined){
				const allTagElements = document.createElement("div");
				allTagElements.classList.add("tag-list");
				file.tags.forEach((tag, index) => {
					const tagElement = document.createElement("div");
					tagElement.classList.add("tag-element");
					tagElement.innerHTML = tag.content;
					let tagColor = this.tagColor.find(a => a.tag == tag.id)
					tagElement.style.setProperty('filter', tagColor!.filter)
					allTagElements.appendChild(tagElement);
				})

				items[i].appendChild(allTagElements);
			}
		}
	}


	addClickListener(element: Element, callback: (content: string) => void): void {
		
		if (element) {
			element.addEventListener('click', () => {
			
			const content = element.childNodes.item(1).textContent || ''; // Récupérer le contenu de la div
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

	stringToHash(input: string): number {
		let hash = 0;
		const inputLength = input.length;
	  
		if (inputLength === 0) return hash;
	  
		for (let i = 0; i < inputLength; i++) {
		  const char = input.charCodeAt(i);
		  hash = (hash << 5) - hash + char;
		}
	  
		// Ajoute un coefficient plus important basé sur la taille de l'entrée pour améliorer la répartition
		const sizeCoefficient =1; // Vous pouvez ajuster le coefficient selon votre préférence
		hash = hash * (inputLength * sizeCoefficient);
	  
		// Technique de mixage pour améliorer la répartition des valeurs du hachage
		hash = (hash ^ (hash >>> 16)) * 0x45d9f3b;
		hash = (hash ^ (hash >>> 16)) * 0x45d9f3b;
		hash = (hash ^ (hash >>> 16)) & 0x1fff; // Masque les 13 bits supérieurs pour obtenir une valeur entre 0 et 8191
	  
		// Ramène le résultat à la plage [0, 360]
		return (hash / 8191) * 360;
	  }


	  setupColors() {
		this.tagColor = [] 
		this.tags.forEach( (tag,index) => {
			this.tagColor.push({"tag" : tag.id, "filter": "grayscale(100%) sepia(100%) saturate(505%) hue-rotate(" +   index/this.tags.length * 360 + "deg)" })
		})
	  }

	  mouseOver(){
		let i = document.getElementById("scan-file-icon");
		i?.classList.add("fa-spin");
	  }

	  mouseOut(){
		let i = document.getElementById("scan-file-icon");
		i?.classList.remove("fa-spin");
	  }

	  scanFile(){
		this.fileService.scanFiles().subscribe(() => {
			window.location.reload();
		})
	  }
}
