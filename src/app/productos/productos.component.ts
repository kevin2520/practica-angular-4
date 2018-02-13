import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service'
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers:[ProductosService]
})
export class ProductosComponent implements OnInit {
  public producto:any;
  productos:any;
  constructor(private _productosService:ProductosService) {
    this.producto={};
    this.productos=[]
  }

  ngOnInit() {
    this.getPrueba()
  }

  submit(){
    this._productosService.addProducto(this.producto).subscribe(
                result => {

                    this.getPrueba();

                },
                error => {
                    console.log(<any>error);
                }
            );
  }

  getPrueba(){
      this._productosService.getProductos()
      .subscribe(result => {
                  console.log(result)
                  this.productos = result;

                  },
                  error => {
                      console.log(<any>error);
                  }
              );
  }

  removeProducto(producto){

    this._productosService.removeProducto(producto).subscribe(
                result => {

                  this.getPrueba();

                },
                error => {
                    console.log(<any>error);
                }
            );

  }

  editarProducto(producto){

    this._productosService.updateProducto(producto).subscribe(
                result => {

                  this.getPrueba();

                },
                error => {
                    console.log(<any>error);
                }
            );

  }

}
