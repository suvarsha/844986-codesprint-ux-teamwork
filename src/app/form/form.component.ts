import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Fitness } from '../fitness';
import { FitService } from '../fit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  appointment: Fitness=new Fitness();
  constructor(private router:Router,private fitservice:FitService) { }
  submitted=false;
  ngOnInit() {

  }
  appointmentsaveform=new FormGroup({

    firstname:new FormControl('',[Validators.required , Validators.minLength(5),Validators.pattern("^[a-zA-Z]{5,10}$") ]) ,
  
    lastname:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]{5,10}$") ]),
  
    age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(60) ]) ,
  
    email:new FormControl('',[Validators.required,Validators.email]),
  
    phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern("[0-9]{10}")]),
  
    streetaddress:new FormControl('',[Validators.required]),
  
    city:new FormControl('',[Validators.required]),
  
    state:new FormControl('',[Validators.required]),
  
    country:new FormControl('',[Validators.required]),
  
  
  
  });
  
  saveAppointment(saveAppointment){
 
   this.appointment=new Fitness();
  
   this.appointment.firstname=this.Firstname.value;
  
   this.appointment.lastname=this.Lastname.value;
  
   this.appointment.age=this.Age.value;
  
   this.appointment.email=this.Email.value;
  
   this.appointment.phone=this.Phone.value;
  
   this.appointment.streetaddress=this.streetaddress.value;
  
   this.appointment.city=this.City.value;
  
   this.appointment.state=this.State.value;
  
   this.appointment.country=this.Country.value;
   this.submitted = true;

  this.save();

  }
  save(){
    this.fitservice.saveAppointment(this.appointment).subscribe(data=>console.log(data),error=>console.log(error));
  this .appointment=new Fitness;
  alert("updated successfully")
  this.router.navigate(['firstpage']);

  }
  
    
  
  get Firstname(){
  
   return this.appointmentsaveform.get('firstname');
  
  }
  
  get Lastname(){
  
   return this.appointmentsaveform.get('lastname');
  
  }
  
  get Age(){
  
   return this.appointmentsaveform.get('age');
  
  }
  
  get Email(){
  
   return this.appointmentsaveform.get('email');
  
  }
  
  get Phone(){
  
   return this.appointmentsaveform.get('phone');
  
  }
  
  get streetaddress(){
  
   return this.appointmentsaveform.get('streetaddress');
  
  }
  
  get City(){
  
   return this.appointmentsaveform.get('city');
  
  }
  
  get State(){
  
   return this.appointmentsaveform.get('state');
  
  }
  
  get Country(){
  
   return this.appointmentsaveform.get('country');
  
  }
  
  saveAppointmentForm(){
  
   this.submitted=false;
  
   this.appointmentsaveform.reset();
  
  }
  
  
  
  }
