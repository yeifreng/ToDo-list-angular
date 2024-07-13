import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tarea',
  templateUrl: './lista-tarea.component.html',
  styleUrls: ['./lista-tarea.component.css']
})
export class ListaTareaComponent {

  //5. Creamos la variable que se usara para recibir el valor que envia el componente agregar-tarea por medio del input
  tareaRecibida: string = '';

  //6. Creamos el metodo que recibira el evento desde el componente agregar-lista y le asignamos el valor a la variable
  agregarTarea($event:string){
    this.tareaRecibida = $event
  }




}
