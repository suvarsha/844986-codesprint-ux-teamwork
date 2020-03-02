import { Component, OnInit } from '@angular/core';
import { FitService } from '../fit.service';
import { Fitness } from '../fitness';

@Component({
  selector: 'app-fitlist',
  templateUrl: './fitlist.component.html',
  styleUrls: ['./fitlist.component.css']
})
export class FitlistComponent implements OnInit {
  user:Fitness[];
  constructor(private fit:FitService) { }

  ngOnInit() {
    this.fit.getUsers().subscribe(
      (Response)=>{
        alert(Response.length)
        this.user=Response;
      },
    
    )
    
    
      }
    
  }

