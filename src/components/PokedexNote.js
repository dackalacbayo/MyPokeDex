import React, { Component } from 'react'
import '../App.css'
import pikachu from '../images/pikachu.gif'
import pikaaaa from '../images/poke-notex.png'

class PokedexNote extends Component {
  render() {
    return (

          <div className="Pokedex-note">
           	 
             <img src={pikaaaa} className="pokenote-logo" alt="logo" />
          	 <textarea className="pokenote-textarea"/>
          	 <button type="submit" value="Search" 
            className="btn-save">Save</button>

          </div>

    );
  }
}

export default PokedexNote;
