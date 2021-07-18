import { Directive, Input, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighestVote]'import { Directive } from '@angular/core';

  @Directive({
    selector: '[appHighlight]'{
  })
  export class HighlightDirective {
  
    constructor() { }
  
  }
  
})
export class HighestVoteDirective implements OnInit{

  @Input("upvote") upvote: boolean;
  @Input("quote") quote; 

  @HostListener("window:click") mouse(){
    if (this.quote.maxUpvote === true){
      this.element.nativeElement.style.backgroundColor = "#FFE600aa";
      console.log("yes")
    }
    else {
      this.quote.maxUpvote = false;
      this.element.nativeElement.style.backgroundColor = "#00000000";
    }
  }
  
  constructor(private element: ElementRef) {}

  ngOnInit(){}
}