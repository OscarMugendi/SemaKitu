import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'I think therefore I am.', 'Rene Descartes',"Oscar"),
    new Quote(2, 'What doesnt kill me makes me stronger.', 'Friedrich Nietzsche',"Oscar"),
    new Quote(3, 'If God did not exist. It would be necessary to invent Him.', 'Voltaire',"Oscar"),
    new Quote(4, 'Science is what is known. Philosophy is what is unknown.', 'Bertrand Russell',"Oscar"),
    new Quote(5, 'The only thing we have to fear is fear itself.', 'Franklin D. Roosevelt',"Oscar"),
    new Quote(6, 'Where there is love, there is life.', 'Mahatma Gandhi',"Oscar"),
    new Quote(7, 'Fortune favors the brave.', 'Virgil',"Oscar"),
    new Quote(8, 'Less is more.', 'Ludwig Mies van der Rohe',"Oscar"),
    new Quote(9, 'Covfefe.', 'Donald Trump',"Oscar"),
  ];
}
  constructor() { }

  ngOnInit(): void {
  }

}
