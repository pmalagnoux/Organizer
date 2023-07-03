import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Perimeter } from 'src/app/model/perimeter';
import { PerimeterService } from 'src/app/service/perimeter.service';

@Component({
  selector: 'app-new-perimeter-form',
  templateUrl: './new-perimeter-form.component.html',
  styleUrls: ['./new-perimeter-form.component.scss']
})
export class NewPerimeterFormComponent  implements OnInit{



   perimeterForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private perimeterService: PerimeterService, private router: Router){}

  ngOnInit(): void {
      
    this.perimeterForm = this.formBuilder.group({
      perimeter: [null, Validators.required],
   
    })
  }

  onSubmitPerimeterForm(){
    if(this.perimeterForm.valid){
      let perimeter = new Perimeter();
      perimeter.content = this.perimeterForm.value.perimeter;
     
      this.perimeterService.addPerimeter(perimeter).subscribe((data)=> {
        this.router.navigateByUrl(`/perimeters`);
      });
    }
  }

}
