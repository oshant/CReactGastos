import React from 'react';
import PropTypes from 'prop-types';
import Gasto from "./Gasto";

Listado.propTypes = {

};

function Listado({gastos}) {
    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gastos.map(gasto =>(
              <Gasto
                  key={gasto.id}
                gasto={gasto}/>
            ))}
        </div>
    );
}

export default Listado;