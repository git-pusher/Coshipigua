import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Tables from '../components/Tables';


class Coshipigua extends React.Component {
    constructor(props) {
		super(props);
		this.state = {}
    }
    
    render () {
        return (
            <div>
                <Hero />
                <Footer />
                <Tables 
                title="PRUEBA"/>
            </div>
        );
    }
}

export default Coshipigua;