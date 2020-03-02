import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FitlistComponent } from './fitlist/fitlist.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ContactComponent } from './contact/contact.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

@NgModule({
  declarations: [
    AppComponent,
    FitlistComponent,
    FormComponent,
   
    ContactComponent,
    ViewAppointmentComponent,
    FirstpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:FirstpageComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'fitlist',
        component:FitlistComponent
      }
    ]),
   
    RouterModule.forRoot([
      {
        path:'form',
        component:FormComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'firstpage',
        component:FirstpageComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'contact',
        component:ContactComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
