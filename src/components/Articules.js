import React, { Component } from 'react';
import ArticuleItems from './ArticuleItems';
import axios from 'axios';
import './Articules.css';

class Articules extends Component {
    constructor(){
    super()
    this.state = {
        books: [],
        isLoaded: false
    }
    }

    componentDidMount(){
        axios.get('http://167.172.209.140:80/wp-json/wp/v2/articules?per_page=3')
            .then(res => {
                console.log("MOUNTED")
                this.setState({
                books: res.data,
                isLoaded: true
            })})
            .catch(err => console.log("MOUNT ERROR", err))
        
    }

    render(){
       const { books, isLoaded } = this.state;
       if(isLoaded) {
        return (
            <div className="Articule-container">
                { books.map(book => (
                    <ArticuleItems  key={ book.id} book={book} />
                )) }
            </div>
        )
       }
        
       return null
    }
}

export default Articules