import { Injectable } from '@angular/core';
import { Producto } from '../../Classes/Producto';

const PRODUCTOS: Array<Producto> = [
    new Producto(1, 'Papas', 3 , 3, 'Para freir'),
    new Producto(2, 'Huevos', 6 , 3, 'Para freir'),
    new Producto(3, 'Pan', 1 , 1, 'Para comer'),
    new Producto(4, 'Helado', 1 , 6, 'De postre'),
];

const RETRASO = 500;

@Injectable()
export class ListaCompraClaseService{
    getProductos(){
        return new Promise<Producto[]>(data => {
            setTimeout(() => {
                data(PRODUCTOS);
            }, RETRASO);
        });
    }
}
