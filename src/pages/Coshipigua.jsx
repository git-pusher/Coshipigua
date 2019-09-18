import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Tables from '../components/Tables';


class Coshipigua extends React.Component {
  
    
    
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