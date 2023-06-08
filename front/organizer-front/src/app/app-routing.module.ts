import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { NewContactFormComponent } from './contacts/new-contact-form/new-contact-form.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'contacts', component: ContactsListComponent},
  {path: 'addcontact', component: NewContactFormComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
