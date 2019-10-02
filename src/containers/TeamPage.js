import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Team from '../components/Team';

class HomePage extends Component{
    render(){
        return (
            <React.Fragment>
                <Header/>
                <Team/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default HomePage;