import { Component, OnInit } from '@angular/core';
import { Producto } from '../../Classes/Producto';
/*import { ListaCompraClaseService } from '../../Services/listaCompraClases-service/listaCompraClase-service';*/
import { ListaCompraApiService } from '../../Services/listaCompraApi-service/listaCompraApi.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  productos: Array<Producto> = [];

  /*constructor(private servicio: ListaCompraClaseService){}
  ngOnInit() {
    this.servicio.getProductos().then(data => {
      this.productos = data;
    });
  }*/

  constructor(private servicio: ListaCompraApiService){}
  ngOnInit() {
    this.servicio.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  guardar(model: Producto) {
/*    let v = Math.max.apply(Math, this.productos.map(function(o){return o.id; }));
    model.id = ++v;
    this.productos.push(model);
    */
    this.servicio.addProducto(model).subscribe(data =>{
      this.productos.push(data);
    });
  }

}
