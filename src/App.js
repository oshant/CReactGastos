import React, {useEffect, useState} from 'react';
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {

    const [presupuesto, updatePresupuesto] = useState(0);
    const [restante, updateRestante] = useState(0);
    const [mostrarPregunta, updatePregunta] = useState(true);
    const [gastos, updateGastos] = useState([]);
    const [gasto, updateGasto] = useState({})
    const [crearGasto, updateCreatGasto] = useState(false);
    //UseEffect para actualizar el restante
    useEffect(() => {
        //Agrega nuevo presupuesto
        if (crearGasto) {
            updateGastos([...gastos, gasto]);
        }
        //resta del presupuesto actual
        let presupuestoRestante = restante - gasto.cantidad;
        updateRestante(presupuestoRestante);
        updateCreatGasto(false);
    }, [gasto])
    //Cuando se añadan gastos


    return (
        <div className="container">
            <header><h1>Gasto semanal </h1></header>

            <div className="contenido-principal contenido">
                {mostrarPregunta ?
                    (<Pregunta
                        updatePresupuesto={updatePresupuesto}
                        updateRestante={updateRestante}
                        updatePregunta={updatePregunta}
                    />)
                    :
                    (<div className="row">
                            <div className="one-half column">
                                <Formulario
                                    updateGasto={updateGasto}
                                    updateCreatGasto={updateCreatGasto}
                                />
                            </div>
                            <div className="one-half column">
                                <Listado
                                    gastos={gastos}/>
                                <ControlPresupuesto
                                    presupuesto={presupuesto}
                                    restante={restante}
                                />
                            </div>
                        </div>
                    )}
            </div>

        </div>
    );
}

export default App;
