import React from 'react';
import PropTypes from 'prop-types';

Gasto.propTypes = {
    
};

function Gasto({gasto}) {
    return (
        <li className="gastos">
            <p>
                {gasto.nombre}

                <span className="gasto">$ {gasto.cantidad} </span>
            </p>
        </li>
    );
}

export default Gasto;