import React, { Component } from 'react';

class Presupuesto extends Component {
    render() {
        return (
            <div className='alert alert-primary' >
                Presupusto: ${this.props.presupuesto}
            </div>
        );
    }
}

export default Presupuesto;