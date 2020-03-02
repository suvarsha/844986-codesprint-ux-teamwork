import { Component, OnInit } from '@angular/core';
import { Fitness } from './fitness';
import { FitService } from './fit.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){}
  
  ngOnInit(): void {
  }
  title = 'project2';

}
