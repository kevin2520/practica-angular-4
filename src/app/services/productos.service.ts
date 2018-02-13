import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Producto } from '../models/producto';


@Injectable()
export class ProductosService {
  public url: string;

  constructor(private http: HttpClient) {

    this.url = "http://localhost:3000/"

  }

  getProductos(): Observable<any> {
    return this.http.get(this.url + 'productos');
  }

  addProducto(producto: Producto): Observable<any> {

    return this.http.post(this.url + 'productos', producto);
  }

  removeProducto(producto: Producto): Observable<any> {

    return this.http.delete(this.url + 'productos/' + producto.id);
  }

  updateProducto(producto: Producto) {
      producto.nombre=producto.nombre+"editado";
      return this.http.put(this.url+ 'productos/' + producto.id, producto);
   }
}
