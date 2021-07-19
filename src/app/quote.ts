export class Quote {
  
    showName: boolean;
    constructor(public id: number,public words: string,public author: string,public publisher: string){
      this.showName=false;
    }
  }