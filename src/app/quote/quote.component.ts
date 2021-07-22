import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'I think therefore I am.','Oscar',"Rene Descartes"),
    new Quote(2, 'What doesnt kill me makes me stronger.','Oscar',"Friedrich Nietzsche"),
    new Quote(3, 'If God did not exist. It would be necessary to invent Him.','Oscar',"Voltaire"),
    new Quote(4, 'Science is what is known. Philosophy is what is unknown.','Oscar',"Bertrand Russell"),
    new Quote(5, 'The only thing we have to fear is fear itself.','Oscar',"Franklin D. Roosevelt"),
    new Quote(6, 'Where there is love, there is life.','Oscar',"Mahatma Gandhi"),
    new Quote(7, 'Fortune favors the brave.','Oscar',"Virgil"),
    new Quote(8, 'Less is more.','Oscar',"Ludwig Mies van der Rohe"),
    new Quote(9, 'Covfefe.','Oscar',"Donald Trump"),
  ];

  toggleDetails(index: number){
    this.quotes[index].showName = !this.quotes[index].showName;
  }

  DeleteGoal(isComplete:boolean, index:number){
    if (isComplete) {
      let toDelete = confirm(`Confirm${this.quotes[index].publisher}?`)

      if(toDelete){
      this.quotes.splice(index,1);
      }
    }
  }

   newScript!:string;
   newAuthor!:string;
   
   addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.newScript = quote.words;
    this.newAuthor = quote.author;
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
