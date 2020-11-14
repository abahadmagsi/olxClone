import { render } from '@testing-library/react'
import React from 'react'
import './ItemsPageCard.css'
class ItemsPageCard extends React.Component{
    render(){
        // console.log(this.props);
        return(
            <>
                <div className="picDiv">
                    <img src={this.props.imgUrl} alt=""/>
                </div>
                <div className="priceDiv">
                    <h1>RS {this.props.price}</h1>
                    <p>{this.props.name}</p>
                    <p>{this.props.address}</p>
                </div>
                <div className="sellerDescriptionDiv">
                    <h1>Seller Discription</h1>
                    <h3>Arslan</h3>
                    <div className="btn">
                    <span>Chat with seller</span>
</div>
                </div>
                <div className="discriptionDiv">
                     <p>{this.props.discription}</p>
                </div>
            </>
        )
    }
}

export default ItemsPageCard;