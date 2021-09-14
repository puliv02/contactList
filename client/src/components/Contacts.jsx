// import React , {useState} from 'react'

// const intitalState = {
//     contacts : []
// }
// function Contacts() {
//     const [contacts, setContacts] = useState(intitalState);
//     return (
//         <div>
//             <p>Hello</p>
//         </div>
//     )
// }

// export default Contacts
import React, { Component } from 'react';
import AddContacts from './AddContacts';
import SingleContact from './SingleContact';

export default class Contacts extends Component {
    constructor(props){
        super(props);
        this.state ={
            contacts : []
        };
    }
    componentDidMount(){
        fetch('http://localhost:8080/api/contacts')
        .then(res => res.json())
        .then(data => this.setState({contacts : data}));
    }
    render() {
        return (
            <div>
                <div>
                    <AddContacts />
                </div>
                <div>
                    {
                        this.state.contacts.map((item) => (
                            <SingleContact key = {item.id}  item= {item} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

