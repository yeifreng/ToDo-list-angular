import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareaLocalstorageService {


  //Creamos una variable que sera la key de nuestro localstorage

  private localStorageKey = 'tareas';

  //Realizamos un get para que nos traiga las tareas del localstorage que tenga la key localStorageKey
  getTareas():string[] {

    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];

  }

  //Creamos una función que nos permita agregar la tarea

  agregarTarea(tarea: string){
    const tareas = this.getTareas(); // guardamos la tarea en la variable
    tareas.push(tarea); // hacemos un push para que se añana al array
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas)); // mostramos las tareas que esten el el localstorage con el key localStorageKey
  }

  eliminarTarea(index: number){
    const tareas = this.getTareas(); //guardamos la tarea en la variable
    tareas.splice(index,1);  // eliminamos la tarea de acuerdo al indice
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas)); // mostramos las tareas que esten el el localstorage con el key localStorageKey
  }
}
