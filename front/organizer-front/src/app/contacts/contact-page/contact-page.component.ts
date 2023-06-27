import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/model/contact';
import { Perimeter } from 'src/app/model/perimeter';
import { ContactService } from 'src/app/service/contact.service';
import { PerimeterService } from 'src/app/service/perimeter.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit{

  contactId !: number
  contact$!: Observable<Contact>;
  perimeters$!: Observable<Perimeter[]>;
  perimeter!: Perimeter;
  constructor(private route: ActivatedRoute, private contactService : ContactService, private perimeterService: PerimeterService){}
  ngOnInit(): void {
      this.contactId = +this.route.snapshot.params['id'];
      this.contact$ = this.contactService.getContactById(this.contactId);
      this.perimeters$ = this.perimeterService.getAllPerimeters();
      
     
  }

  submitPerimeterForm(){
    if(this.perimeter != undefined){
      this.contactService.addPerimeter(this.perimeter.id, this.contactId).subscribe((data) =>{
        window.location.reload();
      });
    }
  }   

  deletePerimeter(idPerimeter: number){
    this.contactService.deletePerimeter(idPerimeter, this.contactId).subscribe((data) =>{
      window.location.reload();
    });
  }

}
