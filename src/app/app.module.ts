import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { VoteComponent } from './vote/vote.component';
import { HighlightDirective } from './highlight.directive';
import { TimePassedPipe } from './pipes/time-passed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    QuoteFormComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    VoteComponent,
    HighlightDirective,
    TimePassedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
