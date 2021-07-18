
export class Quote {
    public maxUpvote:boolean = false;;

    constructor(public id: number, public quote: string, public upvote: number, public downvote: number, public author: string, public submitter: string, public time?: Date){
        this.upvote = 0;
        this.downvote = 0;
        this.time = new Date();
    }
}