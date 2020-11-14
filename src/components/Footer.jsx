import React from 'react'
import './Footer.css'
import Image from '../Images/phone-app.webp'
import Image1 from '../Images/appstore_2x.webp'
import Image2 from '../Images/playstore_2x.webp'
class Footer extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <div className="image">
                    <img src={Image} alt=""/>
                </div>
                <div className="text">
                    <h1>TRY THE OLX APP</h1>
                </div>
                <div className="sideFooter">
                    <p>Buy, sell and find just about anything using the app on your mobile.</p>
                </div>

                <div className="sider">
                    <h3>GET YOUR APP TODAY</h3>
                    <img src={Image1} alt=""/>
                    <img src={Image2} alt=""/>
                </div>
            </div>
        )
    }
}

export default Footer;