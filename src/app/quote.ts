export class Quote {
  
    showName: boolean;
    constructor(
      public id: number,
      public quote: string,
      public author: string,
      public publisher: string){
      this.showName=false;
    }
  }