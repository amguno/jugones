import reactSvg from './react.svg'
import './App.css'
import Player from './components/Player'
import Modal from './components/Modal'

import React, { PureComponent } from 'react'
const domain = 'http://localhost:3001'

class App extends PureComponent {
  constructor(){
    super();
    this.state = {
      players: [],
      modal: "modal modal--hide"
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    fetch(`${domain}/players`)
      .then(response => {
        return response.json();
      })
      .then(players => {
        this.setState({ players })
      });
  }

  showModal(){
    this.setState({modal: "modal modal--show"});
  }
  hideModal(){
    this.setState({modal: "modal modal--hide"});    
  }    
  render() {
    const { players } = this.state

    return <div className="App">
      <Modal status={this.state.modal} hideModal={this.hideModal}/>
      <header className="header">
        <button onClick={this.showModal}>Pichichis</button>
      </header>
      <div className="App-teams App-flex">
        {/* 
          TODO ejercicio 2
          Debes obtener los players en lugar de los equipos y pintar su nombre. 
          Borra todo el código que no sea necesario. Solo debe existir un título: Los jugadores
          y una lista con sus nombres. 
          ** Los comentarios de los ejercicios no los borres.
        */
        }
    
          {/* 
            TODO ejercicio 3
            Vamos a pasar a darle diseño. Crea el diseño propuesto en el readme con los requerimientos que se necesite.
            Guiate por las imágenes.
          */}
          <article className="players">
            {players.map(player => <Player key={player.id} data={player}/>)}
          </article>
      </div>
    </div>
  }
}

export default App
