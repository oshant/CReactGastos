import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Error from "./Error";
import shortid from 'shortid';


Formulario.propTypes = {
    
};

function Formulario({updateGasto,updateCreatGasto}) {

    const [nombre, updateNombre] = useState('');
    const [cantidad, updateCantidad] = useState(0);
    const [error, updateError] = useState(false);
    const agregarGasto = (e) => {
        e.preventDefault();
        //validar
        if(cantidad <= 0 || isNaN(cantidad) || nombre.trim() ===''){
            updateError(true);
            return;
        }
        //contruir el gasto
        updateError(false);
        //Enviar gasto al componente principal
        const gasto = {
            nombre,
            cantidad,
            id:shortid.generate()
        }
        updateGasto(gasto);
        updateCreatGasto(true);
        //Resetear form

        updateNombre('');
        updateCantidad(0);
    }
    return (
        <form
            onSubmit={agregarGasto}
        >
           <h2>Agregar tus gastos aquí</h2>
            {error? <Error mensaje="Ambos campos son necesarios"/> : null}
            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. transporte"
                    value={nombre}
                    onChange={ e=>updateNombre(e.target.value)}/>
            </div>
            <div className="campo">
                <label >Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. transporte"
                    value={cantidad}
                    onChange={ e=>updateCantidad(parseInt(e.target.value))}/>
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}

export default Formulario;