import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  loggedIn = false;

  items = ["val1", "val2", "val3", "val4", "val5"];
  
  "text1" : string = "Hello!";

  message: string;
  "message2": string = new Date().toDateString();
  "message3": string = new Date().toTimeString();
  "message4": string;

  constructor() { 
    this.message = "World";
    setInterval(()=>{
      this.message4 = new Date().toTimeString();
    }, 1000)
  }

  ngOnInit(): void {

  }

}
