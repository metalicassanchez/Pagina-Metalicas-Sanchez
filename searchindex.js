// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("Index.html", "Página", "¿Porqué elegir nuestra empresa?  Metálicas Sánchez, puertas, ventanas y todo lo relacionado a la metalurgia es una empresa dedicada a la fabricación de productos metálicos, la cual viene trabajando desde 2002, tiempo en el cual hemos basado la gestión empresarial en lograr una estrecha relación comercial con nuestro público objetivo y proveedores, empleando altos estándares de calidad que nos han permitido adquirir la suficiente experiencia para satisfacer las necesidades de nuestros clientes y las de un mercado cada vez más competitivo en cuanto a precios, servicio, calidad y cumplimiento en las entregas  Servicios  Calle 14 # 7e-52 Chaparral Tolima Tlf  3203120251 / 3138483504 Email  metalicasanchez@gmail.com  Horarios Lunes a Viernes   8 00-12 00 a.m  2 00-06 00 p.m  Sábados  8 00-12 00 a.m    ", "");
   this[database_length++] = new SearchPage("PRODUCTOS.html", "Página", "Productos  Calle 14 # 7e-52 Chaparral Tolima Tlf  3203120251 / 3138483504 Email  metalicasanchez@gmail.com  Horarios Lunes a Viernes   8 00-12 00 a.m  2 00-06 00 p.m  Sábados  8 00-12 00 a.m   Puertas  Puerta Tablero M 1  Portones  Puertas  Portones  Estructuras  Ventanas  Puerta Tablero M 2  Puerta Tablero M 4  Puerta Tablero M 3  Puerta Tablero M 5  Puerta Tablero M 6  Puerta Tablero M 8  Puerta Tablero M 7  Portón Estilo 01  Portón Estilo 02  Portón Estilo 03  Portón Estilo 04  Portón Estilo 05  Portón Estilo 06  Portón Estilo 07  Portón Estilo 08   ", "");
   this[database_length++] = new SearchPage("ESTRUCTURA.html", "Página", "Calle 14 # 7e-52 Chaparral Tolima Tlf  3203120251 / 3138483504 Email  metalicasanchez@gmail.com  Horarios Lunes a Viernes   8 00-12 00 a.m  2 00-06 00 p.m  Sábados  8 00-12 00 a.m   Estructuras  Escalera Estilo 01  Escalera Estilo 02  Escalera Estilo 03  Escalera Estilo 12  Escalera Estilo 04  Escalera Estilo 08  Escalera Estilo 07  Escalera Estilo 09  Escalera Estilo 05  Escalera Estilo 10  Escalera Estilo 11  Escalera Estilo 06  Productos  Portones  Estructuras  Ventanas  Puertas   ", "");
   this[database_length++] = new SearchPage("VENTANAS.html", "Página", "Calle 14 # 7e-52 Chaparral Tolima Tlf  3203120251 / 3138483504 Email  metalicasanchez@gmail.com  Horarios Lunes a Viernes   8 00-12 00 a.m  2 00-06 00 p.m  Sábados  8 00-12 00 a.m   Ventanas  Ventana Modelo 001  Ventana Modelo 002  Ventana Modelo 003  Ventana Modelo 004  Ventana Modelo 005  Ventana Modelo 006  Ventana Modelo 008  Ventana Modelo 007  Ventana Modelo 010  Ventana Modelo 001  Ventana Modelo 011  Ventana Modelo 012  Productos  Portones  Estructuras  Ventanas  Puertas   ", "");
   this[database_length++] = new SearchPage("ALQUILER.html", "Página", "¿Herramientas de todo tipo?  Alquilamos herramientas relacionadas a la metalurgia y a la construcción de gran calidad, de las marcas como Stanley, Elite, Lincoln y otras El servicio de alquiler que ofrecemos le proporciona diversas ventajas   Disponer siempre de máquinas en perfecto estado y rendimiento No necesita hacer inversiones en maquinaria Evitar gastos de mantenimiento Disponibilidad inmediata El tiempo de alquiler lo determina el cliente Precios bajos y cómodos.  Alquilamos  Calle 14 # 7e-52 Chaparral Tolima Tlf  3203120251 / 3138483504 Email  metalicasanchez@gmail.com  Horarios Lunes a Viernes   8 00-12 00 a.m  2 00-06 00 p.m  Sábados  8 00-12 00 a.m   Alquiler  Apreciado usuario si por algún motivo la herramienta de la cual se realizó el préstamo se daña durante su uso usted deberá hacerse cargo de pagar por los daños La manipulación de la herramienta corre por su cuenta si su integridad se ve afectada la empresa no se hará cargo alguno de esto Si excede el límite del tiempo de alquiler se entrara a cobrar por el tiempo extra de uso, este o no empleando la herramienta alquilada  Políticas de alquiler   ", "");
   this[database_length++] = new SearchPage("COTIZACION.html", "Página", "Calle 14 # 7e-52 Chaparral Tolima Tlf  3203120251 / 3138483504 Email  metalicasanchez@gmail.com  Horarios Lunes a Viernes   8 00-12 00 a.m  2 00-06 00 p.m  Sábados  8 00-12 00 a.m   Quieres conocer un poco de nuestros precios y formas de pago, cotiza con nosotros y entérate de todo lo que deseas, recuerda que estamos para servirte  Cotiza con nosotros   Solicitud De Cotización   ", "");
   this[database_length++] = new SearchPage("CONTACTOS.html", "Página", "Calle 14 # 7e-52 Chaparral Tolima Tlf  3203120251 / 3138483504 Email  metalicasanchez@gmail.com  Horarios Lunes a Viernes   8 00-12 00 a.m  2 00-06 00 p.m  Sábados  8 00-12 00 a.m   WhatsApp 3203120251  Llámanos 3138483504 3203120251   Ubícanos Calle 14 # 7e-52 B/Primavera Chaparral Tolima  Contacta Con Nosotros   ", "");
   this[database_length++] = new SearchPage("INTEGRA.html", "Página", "Proyecto Integra 2020B  Calle 14 # 7e-52 Chaparral Tolima Tlf  3203120251 / 3138483504 Email  metalicasanchez@gmail.com  Horarios Lunes a Viernes   8 00-12 00 a.m  2 00-06 00 p.m  Sábados  8 00-12 00 a.m   Bocetos logo  Poster Integra  Ilustraciones  Estrategia De Comunicación Visual  Bocetos Página Web  Diseño De Empaqué  Links De Proyecto Escrito  https //www.calameo.com/books/006296474db0f75a187ba  https //drive.google.com/drive/folders/1NQ3PGZHF4I560R78Xg5bCog8hv3MtzH2?usp=sharing  Video Pitch   ", "");
   return this;
}
