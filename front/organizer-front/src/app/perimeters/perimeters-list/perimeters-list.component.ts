import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Perimeter } from 'src/app/model/perimeter';
import { PerimeterService } from 'src/app/service/perimeter.service';

@Component({
  selector: 'app-perimeters-list',
  templateUrl: './perimeters-list.component.html',
  styleUrls: ['./perimeters-list.component.scss']
})
export class PerimetersListComponent implements OnInit {

  perimeterList$!: Observable<Perimeter[]>;

  constructor(private perimeterService: PerimeterService, private router: Router){}

  ngOnInit(): void {
    this.perimeterList$ = this.perimeterService.getAllPerimeters().pipe(tap(
      result => result.sort((x, y) => x.content.localeCompare(y.content, 'fr', {ignorePunctuation: true}))
    ));
    
  }
  toAddPerimeter(){
    this.router.navigateByUrl(`/addperimeter`);
  }

  toPerimeter(idPerimeter: number){
    this.router.navigateByUrl(`/perimeter/${idPerimeter}`);
  }

  deletePerimeter(idContact : number){
    this.perimeterService.deletePerimeterById(idContact).subscribe((data) => {
      window.location.reload();
    });
  }

}
