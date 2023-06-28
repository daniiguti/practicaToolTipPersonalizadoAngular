import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-datos',
  templateUrl: './form-datos.component.html',
  styleUrls: ['./form-datos.component.css']
})
export class FormDatosComponent {
  datos: any[] = [];

  //Constructor
  constructor(private http: HttpClient) {

  }
  //Método de la interfaz OnInit, para cuando se cree el componente, se llame a este metodo, cargamos los usuarios de nuestra api
  ngOnInit(): void {
    this.cargarDatosUsuarios();

  }

  cargarDatosUsuarios(){
    // Hacemos una peticion a la api propia
    this.http.get<any[]>('http://localhost:9011/usuarios/')
    .subscribe(
      (usuarios: any[]) => {
        this.datos = usuarios;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
