# Practica 3: Formularios parte 2

### 1. ¿Qué es un array en Javascript?

- Un arreglo, en Javascript, es similar a una lista en el sentido en que se trata de una organización de datos. Estos arreglos pueden contener todo tipo de datos y poseen métodos dedicados para su recorrido y modificación.
- Una de las grandes diferencias entre los arreglos de Javascript y los de muchos lenguajes de programación, es que estos son dinámicos de base. Su longitud es variable.
### 2. sessionStorage y localStorage
- En los navegadores modernos, se incluye una API de almacenamiento web que permite realizar almacenamiento de forma local, sin la necesidad de realizar una conexión a una base de datos. Este almacenamiento se trata como si fuera un objeto,
- La diferencia entre *sessionStorage* y *localStorage* es el tiempo que permanecen almacenados los datos. *SessionStorage* almacena información durante el tiempo que se mantenga abierta la sesión, entendiéndose como mantener abierta la ventana y se mantiene al recargar o reabrir la página, sin embargo cuando se cambia de ventana se cambia de sesión y por tanto, los datos son distintos. *LocalStorage* almacena los datos de forma indefinida en el almacenamiento local del navegador y se mantendrá así hasta que se limpien estos datos.
- En Javascript existen los objetos *sessionStorage* y *localStorage* que se refieren a estos almacenamientos, y hay métodos asociados a ellos que permiten guardar, recuperar o eliminar datos:
  - `setItem` es un método que recibe como parámetros una clave o nombre de variable y un valor, almacenando el objeto en el almacenamiento indicado.
  - `getItem` es un método que permite recuperar un dato, recibe como parámetro la clave del objeto.

  - `clear` es un método que elimina todo lo que se encuentra almacenado localmente en el almacenamiento deseado.

### 3. ¿Qué es JSON?
- JSON es un subconjunto de la notación de Javascript, se trata de cadenas de texto que pueden ser convertidas en datos y ser transmitidos en una red. En Javascript se tiene un objeto dedicado que contiene los métodos necesarios para convertir objetos de Javascript en cadenas JSON.

### 4. ¿Qué hacen las funciones `JSON.parse()` y `JSON.stringify()`?
- `JSON.parse()`: Es un método que acepta como parámetro una cadena de caracteres que cumpla con las características de JSON y devuelve un objeto Javascript con esas características.
- `JSON.stringify()`: Es un método que recibe como parámetro un objeto Javascript y la forma en cadena JSON correspondiente

### 5. ¿Cómo funciona `window.location.href`?
- Se trata de una propiedad de toda página HTML que devuelve la dirección de dicha página. Se trata de una constante, por lo que puede se usada en cualquier momento.

### 6. Explique el funcionamiento de `scriptResultados.js`:
- Lo primero que hace es crear un evento que ocurre cuando la página carga. Después se crea una variable que contenga la tabla de resultados de la página, se almacena usando el método `document.querySelector()`, el cual toma un elemento que coincida con el parámetro de entrada, el cual se maneja de forma similar a los selectores CSS. Después, se crea una variable donde se cargan los datos del objeto *envios*, al convertirlos de cadena JSON a objeto Javascript y devolver un arreglo con los datos de los envíos de la página `index.html`.
- Después se recorre el arreglo de envíos, donde se crea una etiqueta de tipo `<tr>`, y usando `file.innerHTML` se introduce entre la etiqueta el código que crea una tabla con los datos del arreglo. Para recuperar los datos del arreglo se usa `${envio.####}` para tomar una propiedad del objeto en la ubicación del actual recorrido.
- Cuando esto se completa, ya por fin, se le introduce a la tabla de resultados el código generado.
- Para implementar un botón de borrado se crea un objeto JS que hace referencia a un formulario donde se almacena un botón. Después se crea un evento que ejecute el método `localStorage.removeItem("envios");` el cual elimina el objeto almacenado en el *localStorage*. Inmediatamente después se ejecuta `location.reload()` para recargar la página y que los efectos en memoria sean visibles.