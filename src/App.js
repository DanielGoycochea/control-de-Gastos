import React, { Component } from 'react';
import '../src/css/App.css';
import Header from './Component/Header'
import Formulario from './Component/Formulario'
import Listado from './Component/Listado'
import {validarPresupuesto} from './Helpers'
import ControlPresupuesto from './Component/ControlPresupuesto'



class App extends Component {


    state = {
      presupuesto: '',
      restante: '',
      gastos:{}
    }

    componentDidMount(){
      this.obtenerPresuesto()

    }

    obtenerPresuesto=()=>{
      let presupuesto = prompt("cual es tu presupuesto")

      let resultado = validarPresupuesto(presupuesto)

      if(resultado){
        this.setState({
          presupuesto:presupuesto,
          restante: presupuesto
        })

      }else{
        this.obtenerPresuesto()
      }

    }

    

  agregarGasto = gasto=>{
    //tomar una copia del state actual
    const gastos = {...this.state.gastos}
    //agregar al gasto el objetop del state 
    gastos[`gasto${Date.now()}`] = gasto;
    
    //restar Presupuesto
    this.restarPresupuesto(gasto.cantidadGasto)
    //cambiar state
    this.setState({
      gastos
    })

    // console.log(gastos)
  }

  restarPresupuesto = cantidad =>{
    //leer el gasto
    let restar = Number(cantidad)
    // copia del state
    let restante = this.state.restante

    //restamos
    restante -= restar

    this.setState({
      restante
    })


  }

 


  render() {
    return (
      <div className="App container">
      <Header 
      titulo='Gasto Semanal'
      />
      <div className='contenido-principal contenido '>
        <div className='row'>
          <div className='one-half column'>
            <Formulario
            agregarGasto = {this.agregarGasto}
            />
          </div>
          <div className='one-half column'>
            <Listado 
            gastos= {this.state.gastos}/>

            <ControlPresupuesto 
              presupuesto={this.state.presupuesto}
              restante={this.state.restante}
             
            />
          </div>

        </div>
      </div> 

     
    </div>
    );
  }
}

export default App;

