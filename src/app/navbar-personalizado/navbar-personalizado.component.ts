import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-personalizado',
  templateUrl: './navbar-personalizado.component.html',
  styleUrls: ['./navbar-personalizado.component.css']
})
export class NavbarPersonalizadoComponent {

  constructor(private router: Router) { }

  verForm(){
    this.router.navigate(['/form']);  
  }
  verInfo(){
    this.router.navigate(['/info']);  
  }
  verHome(){
    this.router.navigate(['/home']);  
  }
}
