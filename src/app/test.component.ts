import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    Username: {{ username }}
  `,
  standalone: true,
})
export class UserComponent {
  username = 'youngTech';
}

@Component({
  selector: 'app-roots',
  template: `<app-user />`,
  standalone: true,
  imports: [UserComponent],
})
export class AppsComponent {}
