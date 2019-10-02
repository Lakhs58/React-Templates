import React, {Component} from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import Team from '../components/Team';

class HomePage extends Component{
    render(){
        return (
            <React.Fragment>
                <Header/>
                <About/>
                <Services/>
                <Portfolio/>
                <Team/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default HomePage;