import React, { Component } from 'react';
import {revisarPresupuesto} from '../Helpers'

class Restante extends Component {
    render() {
        let restante = this.props.restante
        let presupuesto = this.props.presupuesto


        return (
            <div className={revisarPresupuesto(presupuesto,restante) }>
                Restante: ${this.props.restante}
            </div>
        );
    }
}

export default Restante;