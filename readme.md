Por que usar node?
Es rapido, corre en el motor v8 de google
Esta construido para funcionar de manera asincrona
Es una excelente opcion para aplicaciones en tiempo real
Funciona muy bien con base de datos no relacionales
El mismo lenguaje en todo el stack
Comunidad Activa.

Quienes lo usan?
Uber, Netflix, Medium, Wikipedia, Product Hunt, Flipboard, Trello.

Consola dentro del navegador, puedes usar codepicnic.com para generar una consola en el navegador.

Con node vamos a generar un servidor que reaccione a una peticion para que realice una accion
cd change directory
mkdir create directory
pwd see which directory are you are

para correr nuestro script hay que correr el comando node dentro de la consola y el nombre del archivo

node hello.js
en este caso el servidor se esta refrescando por que necesita una respuesta, para que esto no pase hay que decirle que
la respuesta tenga el metodo end para terminar la respuesta.

Para enviarle algo al navegador podemos enviar un string dentro del metodo end. 
