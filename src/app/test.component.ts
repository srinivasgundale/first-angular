import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    @if (isUserNameSet) {
    Username: {{ username }}
    } @else {
    Username : 'Guest'<br>
    }
    @for (os of operatingSystems; track os.id) {
      {{ os.id +" -"+os.name }}<br>
    }
  `,
  standalone: true,
})


export class UserComponent {
  username = 'youngTech';
  isUserNameSet = true;
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
}

@Component({
  selector: 'app-roots',
  template: `<app-user />`,
  standalone: true,
  imports: [UserComponent],
})
export class AppsComponent {}
