import React, { Component } from 'react';
import request from 'superagent'
import '../App.css'
import { App } from '../App'

class PokedexData extends Component {
 state = { result: [] }


 componentWillReceiveProps(nextProps){
   this.setState({ result: nextProps.data})
 }

renderStats(stats){
 	console.log(stats)
 	var stat=[]
 	var base_stat=[]
 	if(stats){
 	 
 		stats.map((item, index) => {
 			if (index < 6){
 				stat = stat.concat(<h4 key={index}>{item.stat.name + ": " +item.base_stat}</h4>)
 			}
 		})
 	}
 	return stat
 }



 renderAbilities(abilities){
 	console.log(abilities)
 	var ability=[]
 	if(abilities){
 	 
 		abilities.map((item, index) => {
 			if (index < 5){
 				ability = ability.concat(<h4 key={index}>{item.ability.name}</h4>)
 			}
 		})
 	}
 	return ability
 }

 renderMoves(moves){
 	console.log(moves)
 	var move=[]
 	if(moves){
 	 
 		moves.map((item, index) => {
 			if (index < 5){
 				move = move.concat(<h4 key={index}>{item.move.name}</h4>)
 			}
 		})
 	}
 	return move
 }

  renderTypes(types){
 	console.log(types)
 	var type=[]
 	if(types){
 	 
 		types.map((item, index) => {
 			if (index < 5){
 				type = type.concat(<h4 key={index}>{item.type.name}</h4>)
 			}
 		})
 	}
 	return type
 }




 render() {
   const { id,sprites,types,moves,name,height,weight,abilities,stats,base_stats } = this.state.result
   const img = !sprites ? '' : sprites.front_default
   console.log(this.props, 'state: ', this.state)

   return (
     <div className="Pokedex-data">
    
    <div className="pokemon-moves"> 
		<h4 >MOVE </h4> 
     	<h5 className="pokemon-movesList">{this.renderMoves(moves)}</h5>
    </div>

    <div className="pokemon-types"> 
		<h4 >TYPE </h4> 
     	<h5 className="pokemon-typeList">{this.renderTypes(types)}</h5>
    </div>

    <div className="pokemon-abilities"> 
		<h4 >ABILITY </h4> 
     	<h5 className="pokemon-abilitiesList">{this.renderAbilities(abilities)}</h5>
    </div>

    <div className="pokemon-stats"> 
		<h4 >STATISTICS </h4> 
     	<h4 className="pokemon-statsList">{this.renderStats(stats)}</h4>
    </div>


     <img className="pokemon-img" src={img} />
      
     <h3 className="pokemon-name">{name}</h3>
   	 
     <div className="pokemon-basic">
     	<h4 className="pokemon-basicList">ID: #{id}</h4>
     	<h4 className="pokemon-basicList">Weight: {weight}</h4>
     	<h4 className="pokemon-basicList">Height: {height}</h4>	
     </div>
   	 </div>
   );
 }	
}

export default PokedexData;