import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
      .content {
        display: flex;
      }
      .extra > a { }
    `]
})
export class AppComponent {
  title = 'inline-styles';
}
