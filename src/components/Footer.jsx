import React, { Component } from 'react';

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        console.log(this.props.location);
        return (
            <div id="footer" className="container-fluid pt-2 pb-2">
                <div className="container-fluid">
                    <hr/>
                    <div className="row text-center foo">
                        <div className="col-12 col-lg">
                            <span className="hca">Con  </span>
                            <span className="hca">💗</span>                        
                            <span className="hca">de </span>   
                            <span className="hca"> 
                                <a 
                                href="https://www.instagram.com/coshipigua/"
                                target= "_blank"
                                className="Coshipigua"> Coshipigua</a>                                
                            </span>  
                            <span className="hca">🐽</span>                    
                        </div>             
                    </div>                  
                </div>  
            </div>            
        );			
    }
}

export default Footer;