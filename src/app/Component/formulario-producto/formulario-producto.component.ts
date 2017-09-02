import {Component, Output, EventEmitter} from '@angular/core';
import {Producto} from '../../Classes/Producto';

@Component({
    moduleId: module.id,
    selector: 'formulario-producto',
    templateUrl: 'formulario-producto.html'
})

export class FormularioProductoComponent{
    model: Producto = new Producto(0, '', 0, 0);
    @Output() onsubmit= new EventEmitter<any>();

    public submit(){
        this.onsubmit.emit(this.model);
        console.log(this.model);
        this.model = new Producto(0, '', 0, 0);
    }
}