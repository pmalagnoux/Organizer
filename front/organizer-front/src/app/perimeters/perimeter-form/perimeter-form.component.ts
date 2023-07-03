import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Perimeter } from 'src/app/model/perimeter';
import { PerimeterService } from 'src/app/service/perimeter.service';

@Component({
  selector: 'app-perimeter-form',
  templateUrl: './perimeter-form.component.html',
  styleUrls: ['./perimeter-form.component.scss']
})
export class PerimeterFormComponent implements OnInit{



  perimeterId !: number
  perimeterForm!: FormGroup;
  isInit = false;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private perimeterService: PerimeterService, private router: Router){}

  ngOnInit(): void {
    this.perimeterId = +this.route.snapshot.params['id'];
    this.perimeterService.getPerimeterById(this.perimeterId).subscribe( data => {
      this.isInit = true;
      this.perimeterForm = this.formBuilder.group({
        perimeter: [data.content, Validators.required],
      })
    });
  }

  onSubmitPerimeterForm(){
    if(this.perimeterForm.valid){
      let perimeter = new Perimeter();
      perimeter.content = this.perimeterForm.value.perimeter;
     
      this.perimeterService.updatePerimeter(perimeter,  this.perimeterId).subscribe((data)=> {
        this.router.navigateByUrl(`/perimeters`);
      });
    }
  }
}
