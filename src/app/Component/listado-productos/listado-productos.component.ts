import {Component, Input} from '@angular/core';
import {Producto} from '../../Classes/Producto';

@Component({
    moduleId: module.id,
    selector: 'listado-productos',
    templateUrl: 'listado-productos.html'
})

export class ListadoProductosComponent{
    @Input() productos: Array<Producto>;

    displayProducto(producto: Producto){
        console.log(producto);
    }
}