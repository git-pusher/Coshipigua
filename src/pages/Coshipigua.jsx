import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';


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
            </div>
        );
    }
}

export default Coshipigua;