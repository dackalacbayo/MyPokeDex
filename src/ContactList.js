import React from 'react';

class ContactList extends React.Component{
	render(){
		console.log(this.props.contacts);
    
	return(
			<ul>
				<li>{this.props.contacts.name} 555 555 5555</li>
			</ul>

		)
	}
}

export default ContactList;