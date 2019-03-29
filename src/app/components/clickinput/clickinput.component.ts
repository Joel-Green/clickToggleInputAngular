import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clickinput',
  templateUrl: './clickinput.component.html',
  styleUrls: ['./clickinput.component.css']
})
export class ClickinputComponent implements OnInit {

  originalVal:string;
  newVal:string;
  textVisibileChk:boolean;
  constructor() { }

  ngOnInit() {
    this.originalVal="this is some value";
    this.textVisibileChk=true;
    this.newVal=this.originalVal;
  }
  //functions
  toggleText()
  {
    this.textVisibileChk=!this.textVisibileChk;
    //toggles true and false
  }
  updateValue()
  {
    this.originalVal=this.newVal;
    this.toggleText();
  }
  noChangeValue()
  {
    this.toggleText();
    this.newVal=this.originalVal;
    
  }
}
