import { Component } from '@angular/core';
import { Greeting } from '../greeting';
import { GREETINGS } from '../mock-greetings';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {
  greetings = GREETINGS;
  selectedGreeting?: Greeting;

  onSelect(greeting: Greeting): void {
    this.selectedGreeting = greeting;
  }
}
