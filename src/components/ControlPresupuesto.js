import React, {Fragment} from 'react';
import {checkPresupuesto} from '../helpers';
import PropTypes from 'prop-types';

ControlPresupuesto.propTypes = {};

function ControlPresupuesto({presupuesto, restante}) {
    return (
        <Fragment>
            <div className="alert alert-primary">
                    Presupuesto: {presupuesto} €
            </div>
            <div className={checkPresupuesto(presupuesto,restante)}>
                    Restante: {restante} €
            </div>
        </Fragment>

    );
}

export default ControlPresupuesto;