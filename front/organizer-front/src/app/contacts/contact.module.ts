import { NgModule } from "@angular/core";
import { ContactsListComponent } from "./contacts-list/contacts-list.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { NewContactFormComponent } from "./new-contact-form/new-contact-form.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ContactsListComponent,
        ContactPageComponent,
        NewContactFormComponent,

    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ContactsListComponent,
        ContactPageComponent,
        NewContactFormComponent,
    ]
})

export class ContactModule {}