import {Component, Input, Output, EventEmitter} from '@angular/core';

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
    <div [contentEditable]="isEditable"></div><br>
    <button (click)="clickButton()"  >Click Here {{ occupation }}</button>

  `,
  standalone: true,

})


export class UserComponent {
  username = 'youngTech';
  isUserNameSet = true;
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  isEditable = true;
  clickButton() {
    this.addItemEvent.emit('🐢');
   //alert("Clicked "+ this.occupation);
   //this.addItem();
  }
  @Input() occupation = '';
  @Output() addItemEvent = new EventEmitter<string>();
  addItem() {
    this.addItemEvent.emit('🐢');
    console.log(this.addItemEvent);
  }
}

@Component({
  selector: 'app-roots',
  template: `<app-user occupation="Angular Developer"   />`,
  standalone: true,
  imports: [UserComponent],
})
export class AppsComponent {}
