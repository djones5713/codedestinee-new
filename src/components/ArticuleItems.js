import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import './ArticuleItems.css';

class ArticuleItems extends Component {
    state = {
        imageURL: '',
        isLoading: false
    }
    static propTypes = {
        book: PropTypes.object.isRequired
    }
  
    componentDidMount(){
        const { featured_media, author } = this.props.book;
        const getImageURL = axios.get(`http://167.172.209.140:80/wp-json/wp/v2/media/${featured_media}`)
        const getAuthor = axios.get(`http://167.172.209.140:80/wp-json/wp/v2/users/${author}`);

        Promise.all([getImageURL, getAuthor]).then(res => {
          
            this.setState({
                imageURL: res[0].data.media_details.sizes.full.source_url,
                isLoading: true
            })
        })
    }

    render(){
        const { id, title, excerpt } = this.props.book
        const {imageURL, isLoading } = this.state
        if(isLoading){
            return (
                <div className="Articule-itemstyle Body">
                    <img className="Articule-img" src={ imageURL } alt={title.rendered} />
                    <h2 className="Articule-title ">{ title.rendered }</h2>
                        <p className="Articule-blurb" dangerouslySetInnerHTML={{ __html: excerpt.rendered}} />
                        <Link className="Articule-link" to={`/book/${id}`}>Read More</Link>
                </div>
             
            )

        } 
            return null;
     
    }


}

export default ArticuleItems 