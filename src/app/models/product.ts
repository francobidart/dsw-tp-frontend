import {TipoProducto} from "./tipo-producto";

export class Product {
  id?: number;
  TipoProducto?: TipoProducto;
  precio: number;
  nombre: string;
  categoria?: number;
  descripcion?: string | null;
  stock?: number;
  imagen?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export const Products: Product[] = [
     {
      "id": 2,
      "categoria": 1,
      "precio": 15029,
      "imagen": "https://www.venex.com.ar/products_images/1689616133_4.png",
      "nombre": "DISCO SOLIDO SSD LEXAR 1TB SL200 EXTERNO",
      "descripcion": null,
      "stock": 1,
      "createdAt": "2023-08-18T22:10:51.000Z",
      "updatedAt": "2023-08-18T22:10:51.000Z",
      "TipoProducto": {
        "id": 1,
        "nombre": "Test",
        "createdAt": "2023-08-18T21:55:50.000Z",
        "updatedAt": "2023-08-18T21:55:55.000Z"
      }
    },
  {id: 222, nombre: 'PLACA DE VIDEO NVIDIA GEFORCE GTX 1650 OC 4G PHOENIX GDDR6', precio: 20593, descripcion: '<p>\n' +
        '        El Smart TV Hitachi CDH-LE504KSMART22 de 50 pulgadas tiene una resolución 4K Ultra HD (3840 x 2160 píxeles) que\n' +
        '        es cuatro veces superior a la de una TV Full HD. El nuevo Android TV te ofrece mucho más entretenimiento.\n' +
        '        Pantalla sin bordes para una experiencia más inmersiva y control por voz manos libres, integrado. Olvidate del\n' +
        '        control remoto y hablale a la tele para controlar todos los contenidos disponibles en el entorno digital.\n' +
        '        <br><br>\n' +
        '        Colores más nítidos y mayor contraste para que disfrutes de las imágenes en la más alta calidad gracias al\n' +
        '        Microdimming y HDR10. Además, obtendrás la mejor experiencia de audio con el sistema Dolby Digital que te hará\n' +
        '        sentir como en el cine, desde la comodidad de tu hogar.\n' +
        '      </p>', imagen: 'https://www.venex.com.ar/products_images/1686052397_4.jpg'},
  {id: 333, nombre: 'SLavarropas Carga Frontal Inverter Samsung 7 Kg 1400 RPM WW70J4463GS Plateado', precio: 294829, descripcion: '<p>\n' +
        '        El Smart TV Hitachi CDH-LE504KSMART22 de 50 pulgadas tiene una resolución 4K Ultra HD (3840 x 2160 píxeles) que\n' +
        '        es cuatro veces superior a la de una TV Full HD. El nuevo Android TV te ofrece mucho más entretenimiento.\n' +
        '        Pantalla sin bordes para una experiencia más inmersiva y control por voz manos libres, integrado. Olvidate del\n' +
        '        control remoto y hablale a la tele para controlar todos los contenidos disponibles en el entorno digital.\n' +
        '        <br><br>\n' +
        '        Colores más nítidos y mayor contraste para que disfrutes de las imágenes en la más alta calidad gracias al\n' +
        '        Microdimming y HDR10. Además, obtendrás la mejor experiencia de audio con el sistema Dolby Digital que te hará\n' +
        '        sentir como en el cine, desde la comodidad de tu hogar.\n' +
        '      </p>', imagen: 'https://images.fravega.com/f300/d6eee2e2bbc616e18a0f5f4df77c0d3b.jpg.webp'},
  {id: 444, nombre: 'MICROPROCESADOR INTEL CELERON G5905 TRAY OEM BULK 3.50GHZ 4MB 1200', precio: 38212, descripcion: '<p>\n' +
        '        El Smart TV Hitachi CDH-LE504KSMART22 de 50 pulgadas tiene una resolución 4K Ultra HD (3840 x 2160 píxeles) que\n' +
        '        es cuatro veces superior a la de una TV Full HD. El nuevo Android TV te ofrece mucho más entretenimiento.\n' +
        '        Pantalla sin bordes para una experiencia más inmersiva y control por voz manos libres, integrado. Olvidate del\n' +
        '        control remoto y hablale a la tele para controlar todos los contenidos disponibles en el entorno digital.\n' +
        '        <br><br>\n' +
        '        Colores más nítidos y mayor contraste para que disfrutes de las imágenes en la más alta calidad gracias al\n' +
        '        Microdimming y HDR10. Además, obtendrás la mejor experiencia de audio con el sistema Dolby Digital que te hará\n' +
        '        sentir como en el cine, desde la comodidad de tu hogar.\n' +
        '      </p>', imagen: 'https://www.venex.com.ar/products_images/1641988097_5905.png'}
]
