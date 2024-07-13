import { Component } from '@angular/core';
import { TareaLocalstorageService } from '../services/tarea-localstorage.service';

@Component({
  selector: 'app-lista-tarea',
  templateUrl: './lista-tarea.component.html',
  styleUrls: ['./lista-tarea.component.css']
})
export class ListaTareaComponent {

  listaTareas:string[] = []; //creamos un array para mostrar todas las tareas


  //5. Creamos la variable que se usara para recibir el valor que envia el componente agregar-tarea por medio del input
  tareaRecibida: string = '';

  constructor(private _tareaService:TareaLocalstorageService){
    this.listaTareas = this._tareaService.getTareas(); //Asignamos la lista de tareas que se encuentran en el momento a la variable
  }

  //6. Creamos el metodo que recibira el evento desde el componente agregar-lista y le asignamos el valor a la variable
  agregarTarea($event:string){
    this.tareaRecibida = $event
    if(this.tareaRecibida != ''){
      this._tareaService.agregarTarea(this.tareaRecibida); // agregamos la tarea
      this.tareaRecibida = ''; //limpiamos el input
      this.listaTareas = this._tareaService.getTareas(); // traemos la lista para que nos muestre la nueva tarea
      }
  }

  eliminarTarea(index: number){
    this._tareaService.eliminarTarea(index);
    this.listaTareas = this._tareaService.getTareas(); // traemos la lista para que nos muestre sin la tarea eliminada
  }




}
