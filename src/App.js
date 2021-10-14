import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
// el useState recorre un array y lo devuelve, linea 1 es la variable y setlinea1 es como una const para ejecutar
  const[linea1, setLinea1]= useState('');
  const[linea2, setLinea2]= useState('');
  const[imagen, setImagen]= useState('');

  const onChanceLinea1 = function(evento){
    setLinea1(evento.target.value)
  }

  const onChanceLinea2 = function(evento){
    setLinea2(evento.target.value)
  }

  const onChanceImg = function(evento){
    setImagen(evento.target.value)
  }

  // se exporta npm install --save html2canvas para que nos deje exportar como img el meme
  const onClickExportar = function(evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
    
  }
    
  

  return (
    <div className="App">
        {/* el select es el selector que luega va a desplegar las options */}
        <select onChange={onChanceImg}>
          <option value="fire">Casa en llamas</option>
          <option value="futurama">Futurama</option>
          <option value="history">History Channel</option>
          <option value="matrix">Matrix</option>
          <option value="philosoraptor">Philosoraptor</option>
          <option value="smart">Smart Guy</option>
        </select> <br/>
        {/* add la cajas de texto */}
        {/* el onchance es para cambiar lo que ingresa por ese parametro */}

        <input onChange={onChanceLinea1} type="text" placeholder="linea 1"/><br/>
        <input  onChange={onChanceLinea2} type="text" placeholder="linea 2"/><br/>

        <button onClick={onClickExportar}>Exportar Meme</button>
        {/* seccion del meme spam es texto  */}
        <div className="meme" id="meme">
          <span>{linea1}</span> <br/>
          <span>{linea2}</span>
          <img src={"/img/"+ imagen +".jpg"} />
        </div>
    </div>
  );
}

export default App;
