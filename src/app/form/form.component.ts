import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newQuote = new Quote(0, "", "","");
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(form:NgForm) {
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote(0, "", "","");
  }

  constructor() { }


  ngOnInit(): void {


  }

}