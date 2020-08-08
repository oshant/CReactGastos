import React, {useState} from 'react';
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

function App() {

    const [presupuesto, updatePresupuesto] = useState(0);
    const [restante, updateRestante] = useState(0);
    const [mostrarPregunta, updatePregunta] = useState(true);
    const [gastos, updateGastos] = useState([]);

    //Cuando se añadan gastos
    const agregarNuevoGasto = gasto =>{
        updateGastos([...gastos, gasto])
    }

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
                                    agregarNuevoGasto={agregarNuevoGasto}/>
                            </div>
                            <div className="one-half column">
                                <Listado
                                    gastos={gastos}/>
                            </div>
                        </div>
                    )}
            </div>

        </div>
    );
}

export default App;
