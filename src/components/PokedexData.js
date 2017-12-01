import React, { Component } from 'react';
import request from 'superagent'
import '../App.css'
import { App } from '../App'

class PokedexData extends Component {
 state = { result: {} }

 componentWillReceiveProps(nextProps){
   this.setState({ result: nextProps.data})
 }

 render() {
   const { sprites,abilities,moves,name } = this.state.result
   const img = !sprites ? '' : sprites.front_default
   console.log(this.props, 'state: ', this.state)
   return (
     <div className="Pokedex-data">
     <h3>{name}</h3>
     <img src={img}/>
     
     </div>
   );
 }
}

export default PokedexData;