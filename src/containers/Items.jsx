import React from 'react'
import Header from '../components/Header'
import ItemsPageCard from '../components/ItemsPageCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

class Items extends React.Component{
    constructor(props){
        super(props)
        this.state={
            imgUrl:this.props.location.imgUrl,
            price:this.props.location.price,
            discription:this.props.location.discription
        }
    }
    render(){
        console.log(this.state.imgUrl);
        return(
            <>
                <Header/>
                <Navbar/>
                <div style={{marginTop:'40px'}}>
                <ItemsPageCard address="Karachi" name="Mobile Phone" imgUrl={this.state.imgUrl} price={this.state.price} discription={this.state.discription}/>
            </div>
            <div style={{marginTop:"500px"}}>
             <Footer/>
             </div>
            </>
        )
    }
}

export default Items;