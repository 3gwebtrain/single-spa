import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'child1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {

  title = 'child1';

  ngOnInit() {
      window.addEventListener('toggleClock', () => {
      console.log(' i am hearing from parent');
    })

  }

}
