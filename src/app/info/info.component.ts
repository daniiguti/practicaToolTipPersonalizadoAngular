import { Component, ViewChild } from '@angular/core';
import { TextoAuxComponent } from '../texto-aux/texto-aux.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  hidden: boolean = false;

  constructor(){

  }

  mostrarHijo(){
    if(this.hidden === true){
      this.hidden = false;

    }else{
      this.hidden = true;
    }
  }
}


/*
 export class InfoComponent {
  @ViewChild(TextoAuxComponent) textoAuxComponent!: TextoAuxComponent;

  hidden: boolean = false;

  constructor(){

  }

  mostrarHijo(){
    
    const input1 = (document.querySelector('input[type="text"]:nth-of-type(1)') as HTMLInputElement).value;
    const input2 = (document.querySelector('input[type="text"]:nth-of-type(2)') as HTMLInputElement).value;
    const input3 = (document.querySelector('input[type="text"]:nth-of-type(3)') as HTMLInputElement).value;

    this.textoAuxComponent.texto1 = input1;
    this.textoAuxComponent.texto2 = input2;
    this.textoAuxComponent.texto3 = input3;
    
    this.hidden = true;
  }
}
 */
 