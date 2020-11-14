import React from 'react'
import './MoreOn.css'
import Card from './Card'
import image from '../Images/ItemsImages/image.jpeg'
import image1 from '../Images/ItemsImages/image (2).jpeg'
import image2 from '../Images/ItemsImages/image (3).jpeg'
import image3 from '../Images/ItemsImages/image (4).jpeg'
class MoreOn extends React.Component{
    render(){
        return(
            <>
            <div className="main">
                    <h1>More on Mobile Phones</h1>
                <div className="cards">
                    <Card className="card" imgUrl={image} address="Muzafirabad" price="3,485" discription="Nokia C3 (WiFi) New Box Pack PTA Approved || Home Delivery All Pak"/>
                    <Card className="card" imgUrl={image1} price="3,485" discription="Nokia C3 (WiFi) New Box Pack PTA Approved || Home Delivery All Pak"/>
                    <Card className="card" imgUrl={image2} price="3,485" discription="Nokia C3 (WiFi) New Box Pack PTA Approved || Home Delivery All Pak"/>
                    <Card className="card" imgUrl={image3} price="3,485" discription="Nokia C3 (WiFi) New Box Pack PTA Approved || Home Delivery All Pak"/>
                </div>
                </div>
            </>
        )
    }
}

export default MoreOn;