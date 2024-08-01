import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    @if (isUserNameSet) {
    Username: {{ username }}
    } @else {
    Username : 'Guest'
    }
  `,
  standalone: true,
})
export class UserComponent {
  username = 'youngTech';
  isUserNameSet = true;
}

@Component({
  selector: 'app-roots',
  template: `<app-user />`,
  standalone: true,
  imports: [UserComponent],
})
export class AppsComponent {}
