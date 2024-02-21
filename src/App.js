
import {useState} from 'react';
import './app.css';


export default function App(){

  const [peso,setPeso] = useState('');
  const [altura,setAltura] = useState('');
  
  const[mensagem, setMensagem] = useState('');


  function calcIMC(){
    const alt= altura / 100;
    const imc = peso / (alt * alt);

     if(imc < 18.6){
      setMensagem("Você está abaixo do peso! seu IMC: " + imc.toFixed(2))

     }else if(imc >= 18.6 && imc < 24.9){
      setMensagem("Peso Ideal! Seu IMC: " + imc.toFixed(2))
     }else if (imc > 24.9){
      setMensagem("O Programador Ficou Com Preguiça de fazer o resto :) Seu IMC: " + imc.toFixed(2))
     }
  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Quer Calcular Seu IMC ?</span>

      <div className="area-input">

      <input  type="text" placeholder="Peso em (kg) Ex 90" value={peso} onChange={(e)=>setPeso(e.target.value)}/>
      <input  type="text" placeholder="Altura em (cm) Ex 180" value={altura} onChange={(e)=>setAltura(e.target.value)} />

      <button onClick={calcIMC}>Calcular</button>
      </div>

      <h2>{mensagem}</h2>

    </div>

    

  )
}