import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @HostListener('window:popstate', ['$event'])
  onPopState() {
    this.router.navigate(['/index']);
  }
  constructor(private router:Router){
  }
  title = 'LoginPageInAngular';
}
