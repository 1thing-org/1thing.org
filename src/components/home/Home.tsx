import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';

class Home extends Component{
    render() {
        return (
            <div>
                <NavBar />
                <h1>Home Page</h1>
                <Footer />
            </div>
        )
    }
}
export default Home;