import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { NewContactFormComponent } from './contacts/new-contact-form/new-contact-form.component';
import { ContactPageComponent } from './contacts/contact-page/contact-page.component';
import { PerimetersListComponent } from './perimeters/perimeters-list/perimeters-list.component';
import { ContactFormComponent } from './contacts/contact-form/contact-form.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'contacts', component: ContactsListComponent},
  {path: 'addcontact', component: NewContactFormComponent},
  {path: 'contact/:id', component: ContactPageComponent},
  {path: 'perimeters', component: PerimetersListComponent},
  {path: 'updatecontact/:id', component: ContactFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
