import React, { Component } from 'react';

// creer le composant
class Button extends Component {
    render() {
        return (
            
                <button onClick={this.props.handleFormOpen} className="button__outline">
                    +
                </button>
            

        )
    }
}

//exporter le composant
export default Button;