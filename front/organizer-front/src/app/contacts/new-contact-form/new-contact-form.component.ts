import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-new-contact-form',
  templateUrl: './new-contact-form.component.html',
  styleUrls: ['./new-contact-form.component.scss']
})
export class NewContactFormComponent implements OnInit{

  contactForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private contactService: ContactService, private router: Router){}

  ngOnInit(): void {
      
    this.contactForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null],
      mail:[null, Validators.email]
    })
  }

  onSubmitContactForm(){
    if(this.contactForm.valid){
      let contact = new Contact();
      contact.firstName = this.contactForm.value.firstName;
      contact.lastName = this.contactForm.value.lastName;
      contact.mail = this.contactForm.value.mail;

      this.contactService.addContact(contact).subscribe((data)=> {
        this.router.navigateByUrl(`/contacts`);
      });
      
      
    }
  }

}
