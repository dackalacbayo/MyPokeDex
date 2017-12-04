import React, { Component } from 'react'
import logo from './images/pokedex-logo.png'
import pokeball from './images/pokeball.gif'
import './App.css'
import request from 'superagent'
import PokedexData from './components/PokedexData'
import PokedexNote from './components/PokedexNote'

class App extends Component {

  state = {
    search:'',
    details:{}
  }


  handleChange(e){
    this.setState({search:e.target.value})
  }

  handleSearch(){
    const { search } = this.state
    var that = this
    const url = 'https://pokeapi.co/api/v2/pokemon'
    console.log('call api: ', this.state.search)
    request.get(`${url}/${search}`)
    .end(function(err, res){
      if(err) alert('No Data Available')
        that.setState({details:res.body})
    })
  }



  render() {



    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
                
        <div className="Pokedex-container">
          <div className="Pokedex-search">
           <img src={pokeball} className="pokeball-logo" alt="logo" /><br/>

            <input onChange={this.handleChange.bind(this)} className="poke-search" 
            placeholder="Enter Keywords" /> 
            <button onClick={this.handleSearch.bind(this)} type="submit" value="Search" 
            className="btn-search">Search</button>
         
          </div>

          <PokedexData data={this.state.details} />
          <PokedexNote note={this.state.note} />


         

        </div>
      </div>
    );
  }




}

export default App;
