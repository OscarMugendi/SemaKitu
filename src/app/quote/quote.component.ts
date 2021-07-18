import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'I think therefore I am.', 0, 0,'Rene Descartes',"Oscar"),
    new Quote(2, 'What doesnt kill me makes me stronger.', 0, 0,'Friedrich Nietzsche',"Oscar"),
    new Quote(3, 'If God did not exist. It would be necessary to invent Him.', 0, 0,'Voltaire',"Oscar"),
    new Quote(4, 'Science is what is known. Philosophy is what is unknown.', 0, 0,'Bertrand Russell',"Oscar"),
    new Quote(5, 'The only thing we have to fear is fear itself.', 0, 0,'Franklin D. Roosevelt',"Oscar"),
    new Quote(6, 'Where there is love, there is life.', 0, 0,'Mahatma Gandhi',"Oscar"),
    new Quote(7, 'Fortune favors the brave.', 0, 0,'Virgil',"Oscar"),
    new Quote(8, 'Less is more.', 0, 0,'Ludwig Mies van der Rohe',"Oscar"),
    new Quote(9, 'Covfefe.', 0, 0,'Donald Trump',"Oscar"),
  ];

  findHighestUpvote(arr) {
    arr.forEach((item)=>{
      item.maxUpvote = false;
    })
    let newArr = arr.map((item) => {
      return item.upvote;
    });
    let highestVoteIndex = newArr.indexOf(Math.max(...newArr));
    return arr.forEach((item, index) => {
      if (index === highestVoteIndex) {
        item.maxUpvote = true;
      }
    })
  }
  newQuote(quote){ this.quotes.push(quote); setTimeout(()=>{ window.scrollTo(0,document.body.scrollHeight); }, 250)}

  constructor() { }

  ngOnInit(): void {
  }

}
