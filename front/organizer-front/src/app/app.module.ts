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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

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
