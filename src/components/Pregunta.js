import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from "./Error";

Pregunta.propTypes = {};

function Pregunta({updatePresupuesto, updateRestante,updatePregunta}) {

    const [cantidad, updateCantidad] = useState(0);
    const [error, updateError] = useState(false);

    const actualizarCantidad = e => {
        updateCantidad(parseInt(e.target.value));
    }
    const agregarPresupuesto = e => {
        e.preventDefault();
        if (cantidad <= 0 || isNaN(cantidad)) {
            updateError(true);
            return;
        }
        updateError(false);
        updatePresupuesto(cantidad);
        updateRestante(cantidad);
        updatePregunta(false);
    }

    return (
        <Fragment>
            <h2>Coloca aqui tu presupuesto</h2>
            {error ? <Error
                mensaje="El presupuesto es incorrecto"/> : null}
            <form
                action=""
                onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={actualizarCantidad}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir un presupuesto"
                />
            </form>
        </Fragment>
    );
}

export default Pregunta;