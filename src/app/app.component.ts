// src/app/app.component.ts
import { Component } from '@angular/core';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { LastValueFromConfig } from 'rxjs/internal/lastValueFrom';
import { LayoutComponent } from './ui/layout/layout.component';
import {RouterOutlet, RouterLink} from '@angular/router';
@Component({

  selector: 'app-root',
  standalone : true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports : [HeaderComponent, FooterComponent, LayoutComponent, RouterOutlet, RouterLink]

})
export class AppComponent {
  title = 'My Angular App';
}
