export class Producto {
   id: number;
   nombre: string;
   costo: number;
   cantidad: number;
   activo:boolean
   constructor(values: Object = {}) {
        Object.assign(this, values);
   }
}
