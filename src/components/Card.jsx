import React from 'react'
import './Card.css'
import {Link} from "react-router-dom";
import Items from '../containers/Items'
class Card extends React.Component{
    render(){
        
        return(
            <>
            <Link className="link12" to={
            {
                imgUrl:this.props.imgUrl,
                price:this.props.price,
                discription:this.props.discription,
                pathname:'/items'
            }
            }>
            <div className="container">
                <img src={this.props.imgUrl} alt=""/>
                <h2>RS {this.props.price}</h2>
                <p>{this.props.discription}</p>
                </div>
                </Link>
            </>
        )
    }
}

export default Card;