import React from 'react';
import Tables from './Tables';

class Steps extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return(
        <div className="container-fluid">
            <h1>ALGO</h1>
            <p>
                <a class="btn btn-outline-warning" data-toggle="collapse" href="#collapseExample"  aria-expanded="false" aria-controls="collapseExample">
                    Paso 1.
                </a>
                <a class="btn btn-outline-warning" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Paso 2.
                </a>
                <a class="btn btn-outline-warning" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Paso 3.
                </a>
                <a class="btn btn-outline-warning" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Paso 4.
                </a>
                <a class="btn btn-outline-warning" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Paso 5.
                </a>
                <a class="btn btn-outline-warning" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Paso 6.
                </a>
                <button class="btn btn-warning" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Button with data-target
                </button>
            </p>
            <div class="collapse" id="collapseExample">
                <div class="container">
                    <Tables />
                </div>
            </div>
        </div>

        )

    }
}

export default Steps;