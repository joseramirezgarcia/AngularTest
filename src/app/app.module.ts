import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './Component/main/app.component';
import { FormularioProductoComponent } from './component/formulario-producto/formulario-producto.component';
import { ListadoProductosComponent } from './component/listado-productos/listado-productos.component';
import { ListaCompraClaseService } from './Services/listaCompraClases-service/listaCompraClase-service';
import { ListaCompraApiService } from './Services/listaCompraApi-service/listaCompraApi.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, FormularioProductoComponent, ListadoProductosComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ListaCompraClaseService, ListaCompraApiService ]
})
export class AppModule { }
