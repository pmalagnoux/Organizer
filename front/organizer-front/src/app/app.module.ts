import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { ContactService } from './service/contact.service';
import { FileService } from './service/file.service';
import { PerimeterService } from './service/perimeter.service';
import { TagService } from './service/tag.service';
import { TypeService } from './service/type.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactPageComponent } from './contacts/contact-page/contact-page.component';
import { NewContactFormComponent } from './contacts/new-contact-form/new-contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactModule } from './contacts/contact.module';
import { PerimetersModule } from './perimeters/perimeters.module';
import { FilesModule } from './files/files.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagsModule } from './tags/tags.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ContactModule,
    PerimetersModule, 
    FilesModule, 
    TagsModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatChipsModule, 
    MatIconModule


  ],
  providers: [
    ContactService,
    FileService,
    PerimeterService,
    TagService,
    TypeService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
