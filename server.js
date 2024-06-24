const express = require('express')
const {joyas} = require('./data/joyas.js')
const app = express()
const PORT = 3000;

function FiltrarCategorias(filtro){  
  
  let resultado;

  resultado = joyas.filter(item => item.category == filtro)  

  return resultado;

};

function ListarJoyas(){

  const URL = `http://localhost:3000/joyas`;
  let resultado;

   resultado = {
    cantidad: joyas.length,
    paginas: 3,
    items: joyas.map(joya => ({
      ...joya,
      links: {
        id: `${URL}/${joya.id}`,
        categoria: `${URL}?categoria=${joya.category}`,        
      },
    }))
   }
  
  return resultado;

};

function filtrarCampos (joyas, campos)  {

  return joyas.map(joya => {
  
    let joyaFiltrada = {};
  
    campos.forEach(campo => {
  
      if (joya.hasOwnProperty(campo.trim())) {
        
          joyaFiltrada[campo.trim()] = joya[campo.trim()];
  
      }
  
    });
  
    return joyaFiltrada;
  
  });

};

function obtenerPagina(arreglo, pagina) {

  const tamanoPagina = 2;  

  const indiceInicial = (pagina - 1) * tamanoPagina;
  const indiceFinal = indiceInicial + tamanoPagina;
  
  
  return arreglo.slice(indiceInicial, indiceFinal);
}


// joyas
app.get('/joyas',(req,res)=>{ 

  const { categoria } = req.query;
  const { campos } = req.query;  
  const { orden } = req.query;
  const { paginas } = req.query;

  console.log(paginas)
  
  let resultado = [];
 

  if (categoria === undefined) {

    if (campos) {
 
        resultado = filtrarCampos( joyas, campos.split(",") );        


    }else{

      resultado = ListarJoyas();

    }    

  }else{

    resultado = FiltrarCategorias(categoria);

  }  



  orden == "asc"
  ? resultado.sort((a, b) => a.value - b.value)
  : orden == "desc"
  ? resultado.sort((a, b) => b.value - a.value)
  : false;

   paginas != undefined  
   ? res.json(obtenerPagina(resultado,paginas))
   : res.json(resultado)

  

});

//joya :id y filtro de campos
app.get('/joyas/:id',(req,res)=>{

  const { id } = req.params  

  const resultado = joyas.filter(item => item.id == id)

  if (resultado.length <= 0 ){
    
      res.json({
          error :`404`,
          estado:`Joya no encontrada`,          
      })

  }else{

     res.json( resultado )
  }
  
});






















































// inicio
app.get('/', (req, res) => {  
  res.send('Holiwis :)');
});

// listen
app.listen(PORT, () => {
  console.clear();
  console.log(`Holiwis en port :${PORT}`)
});
