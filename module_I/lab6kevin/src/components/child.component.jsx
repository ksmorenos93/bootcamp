"use client"
import GrandChildComponent from "lab6kevin/components/grandchild.component";


const ChildComponent = () => {

    return (
        <>
        
            <div>
                <h2>Componente Hijo</h2>
                <small> No utilizar el estado de conteo</small>
            </div>

            <GrandChildComponent />
        </>
    )
};

export default ChildComponent;