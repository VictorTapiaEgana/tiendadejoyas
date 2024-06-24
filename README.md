# APIRest Tienda de Joyas

Aplicacion de backend, que permite acceder,filtrar,ordenar y paginar datos desde los params o querys recibidos en los endpoint

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

# endpoint
### Devuelve todos los registros
```
GET http://localhost:3000/joyas

```
### Devuelve el registro asociado a un id
```
GET http://localhost:3000/joyas/:id
```
### Filtra los registro por categoria
```
GET http://localhost:3000/joyas?categoria=collar
```
### Ordenas los registros devueltos de manera ascendente (asc) o descendente (desc).
```
GET http://localhost:3000/joyas?campos=id,value,metal,name&orden=desc
```
### Pagina los resultados dependiendo del valor de pagina.
```
GET http://localhost:3000/joyas?campos=id,value,metal,name&orden=desc&paginas=2
```
### Permite definir los campos que seran devueltos en la consulta
```
GET http://localhost:3000/joyas?campos=name,model

   OPCIONES:  id, name, category, metal, cadena, medida, value, stock

```

## Formato de los datos.
```
  {
    id: 1,
    name: 'Collar Heart',
    model: 'Heart',
    category: 'collar',
    metal: 'oro',
    cadena: 40,
    medida: 6,
    value: 20000,
    stock: 2,
  }
```





## Dependencias.

```
  "dependencies": {  
    "express": "^4.19.2"
  }
```

## Estructura de Carpetas.

```
└── 📁Joyas    
    └── 📁data
        └── joyas.js
    └── package-lock.json
    └── package.json    
    └── server.js
```

## Instalación.

```
    git clone https://github.com/VictorTapiaEgana/tiendadejoyas.git
    npm install
    npm start

```