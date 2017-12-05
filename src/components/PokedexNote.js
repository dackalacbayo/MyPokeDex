import React, { Component } from 'react'
import '../App.css'
import pikachu from '../images/pikachu.gif'
import pikaaaa from '../images/poke-notex.png'
import request from 'superagent'

class PokedexNote extends Component {
 
	state={
		note:'',
		search:''

	}

	handleChange(e){
    	this.setState({note:e.target.value})
  	}

  handleSave(){
    const { note, search } = this.state
    var that = this
    console.log('note: ', this.state.note)
    console.log('name: ', this.state.search)
    request.get(`${note}`)
  

  }

  render() {
    console.log(this.state)

    const note = this.state.note
    return (

          <div className="Pokedex-note">
           	<div className="pikarun-container">
              <img src={pikachu}/>
             </div>

             <img src={pikaaaa} className="pokenote-logo" alt="logo" />
          	 <textarea onChange={this.handleChange.bind(this)} className="pokenote-textarea"/>
          	 <button onClick={this.handleSave.bind(this)} type="submit" value="Search" 
            className="btn-save">Save</button>

            <div className="poke-note">
            <h5 className="poke-note">{note}</h5>
          	</div>
          </div>

    );
  }
}

export default PokedexNote;
