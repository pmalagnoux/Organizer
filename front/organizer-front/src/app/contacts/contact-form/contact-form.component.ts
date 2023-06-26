import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit{
  contactId !: number
  contactForm!: FormGroup;
  isInit = false;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private contactService: ContactService, private router: Router){}

  ngOnInit(): void {
    this.contactId = +this.route.snapshot.params['id'];
    this.contactService.getContactById(this.contactId).subscribe( data => {
      this.isInit = true;
      this.contactForm = this.formBuilder.group({
        firstName: [data.firstName, Validators.required],
        lastName: [data.lastName],
        mail:[data.mail, Validators.email]
      })
    });
  }

  onSubmitContactForm(){
    if(this.contactForm.valid){
      let contact = new Contact();
      contact.firstName = this.contactForm.value.firstName;
      contact.lastName = this.contactForm.value.lastName;
      contact.mail = this.contactForm.value.mail;
      this.contactService.updateContact(contact,  this.contactId).subscribe((data)=> {
        this.router.navigateByUrl(`/contacts`);
      });
    }
  }
}
