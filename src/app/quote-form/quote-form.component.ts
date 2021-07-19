import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  public placeholder = "Name"

  public newQuote = new Quote(0,"","","");
  @Output() addNewQuote = new EventEmitter<Quote>();

  submitQuote(){
    let tempQuote = Object.assign{}, this.newQuote)
    this.addNewQuote,emit(tempQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
