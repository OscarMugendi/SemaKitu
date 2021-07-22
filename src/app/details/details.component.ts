import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() name!: Quote;

  @Output() isComplete = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

 
  @Output() myLike = new EventEmitter<boolean>();

  upVote(yes:boolean){
    this.myLike.emit(yes);
  }


  @Output() yourLike = new EventEmitter<boolean>();

  downVote(no:boolean){
    this.yourLike.emit(no);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
