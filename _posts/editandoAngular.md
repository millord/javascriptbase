---
title: "Editando tu primara App de Angular"
excerpt: " En este post seguiremos lo que inicamos en le post anterior sobre Angular, donde editaremos el nuestra app ya generada."
coverImage: "/assets/blog/angular/editing.png"
date: "2020-06-21T06:35:07.322Z"
author:
  name: Juan Millord
  picture: "/assets/blog/authors/millord.jpg"
ogImage:
  url: "/assets/blog/big/big.webp"
---

## Editando tu primara App de Angular

Al crear un proyecto de angular este genera varios archivos y directorios.
Nos vamos a enfomar en el src/app, donde se encuentra esta estructura:

![src/app](/assets/blog/angular/appFolder.png)

**app.component.css** => donde reside los estilos css

**app.component.html** => la estructura del documento HTML

**app.component.ts** => Este es el archivo donde se encuentra la lógica

**app.component.spec** => Este archivo es para testear

**app.module.ts** => Punto de entrada de la aplicación

### Comencemos a editar

1- Dirigete al src/app.component.html, borra todo y añade:

```
<input type="text" [(ngModule)]="name">
<p>{{name}}</p>

```

2- Ve dentro del src/app.component.ts y dentro del AppComponent, en ves de tener title cambialo a name:

![src/app](/assets/blog/angular/app.component.ts.png)

3- Entonces ya habiendo hecho esto, ve a app.module.ts, el cual es nuestro
archivo entrada e importa:

```
import {FormsModule} from '@angular/forms'
```

Y dentro de este mismo archivo (app.module.ts), añade el al array de los imports:

![src/app](/assets/blog/angular/forms.png)

**Esto perminite que el contenido que introduscamos en el input sea dinámico**

4- Ve a la terminal si no la tienes corriendo y escribe:

```
ng serve
```

## Conclusiones

Como puedes ver editar tu aplicacion con Angular es muy sencillo. Solo hay que seguir la estructura dentro de la carpeta src/app y lo demas lo
con la repeticion y práctica te harán un Angular _ninja_. Te exorto que si
sientes que este sintasis es algo rara que visites mi blog sobre **[TypeScript](https://onlytypes.vercel.app/),**, donde esto se explica a fondo.
