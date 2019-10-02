import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';

class PortfolioPage extends Component{
    render(){
        return (
            <React.Fragment>
                <Header/>
                <Portfolio/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default PortfolioPage;