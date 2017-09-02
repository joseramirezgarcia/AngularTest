import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../../rxjs/index';
import { Producto } from '../../Classes/Producto';

@Injectable()
export class ListaCompraApiService{
    private apiUrl = 'http://apiproductos.azurewebsites.net/api/';

    constructor(private http: Http){}

    getProductos(): Observable<Producto[]> {
        return this.http.get(this.getUrl('compra')).map(this.getDatos).catch(this.error);
    }

    addProducto(model: Producto): Observable<Producto> {
        return this.http.post(this.getUrl('compra'), model).map(this.getDatos).catch(this.error);
    }

    private error(error: any){
        let msg = (error.message) ? error.message : 'Error desconocido';
        console.log(msg);
        return Observable.throw(msg);
    }

    private getDatos(data: Response){
        let datos = data.json();
        return datos || [];
    }

    private getUrl(modelo: String){
        return this.apiUrl + modelo;
    }

}