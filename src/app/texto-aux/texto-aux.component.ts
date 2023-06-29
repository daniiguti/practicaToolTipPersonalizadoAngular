import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-texto-aux',
  templateUrl: './texto-aux.component.html',
  styleUrls: ['./texto-aux.component.css']
})
export class TextoAuxComponent {

  @Input() hidden: boolean = true;
  @Input() texto1: string = "";
  @Input() texto2: string = "";
  @Input() texto3: string = "";

  constructor(){

  }


}
