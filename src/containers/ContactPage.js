import React, {Component} from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

class HomePage extends Component{
    render(){
        return (
            <React.Fragment>
                <Header/>
                <Contact/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default HomePage;