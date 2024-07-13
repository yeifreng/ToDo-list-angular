import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent {

  //1. Creamos la variable que recibira el valor que escribamos en el input
  tarea:string = '';

  //2. la variable output se encargara de realizar la comunicacion con al componente lista-tarea para hacerle llegar el mensaje
  @Output() tareaEnviar = new EventEmitter<string>();

  //3. Creamos un metodo que se encargara de emitir la tarea que se escirbe en le input
  enviarTarea(){
    this.tareaEnviar.emit(this.tarea)
  }


}
