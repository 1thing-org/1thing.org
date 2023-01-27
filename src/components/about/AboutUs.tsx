import React, {Component} from 'react'
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';

class AboutUs extends Component{
    render() {
        return (
            <div>
                <NavBar />
                <h1>About Page</h1>
                <Footer />
            </div>
        )
    }
}

export default AboutUs;