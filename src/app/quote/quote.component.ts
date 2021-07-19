import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'I think therefore I am.','Rene Descartes',"Oscar"),
    new Quote(2, 'What doesnt kill me makes me stronger.','Friedrich Nietzsche',"Oscar"),
    new Quote(3, 'If God did not exist. It would be necessary to invent Him.','Voltaire',"Oscar"),
    new Quote(4, 'Science is what is known. Philosophy is what is unknown.','Bertrand Russell',"Oscar"),
    new Quote(5, 'The only thing we have to fear is fear itself.','Franklin D. Roosevelt',"Oscar"),
    new Quote(6, 'Where there is love, there is life.','Mahatma Gandhi',"Oscar"),
    new Quote(7, 'Fortune favors the brave.','Virgil',"Oscar"),
    new Quote(8, 'Less is more.','Ludwig Mies van der Rohe',"Oscar"),
    new Quote(9, 'Covfefe.','Donald Trump',"Oscar"),
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

   addLike(myLike:boolean,index:number){
     if(myLike){
     this.quotes[index].likes++;
     }
   }

   addNotLike(yourLike:boolean,index:number){
     if(yourLike)
     this.quotes[index].dislikes++;
   }

   newScript!:string;
   newAuthor!:string;
   newLikes!:number;
   newDislikes!:number;
   
   addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.newScript = quote.words;
    this.newAuthor = quote.author;
    this.newLikes = 0;
    this.newDislikes = 0;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
