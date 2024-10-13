"use client"

import { Fragment, useState } from "react";
import ChildComponent from "./child.component";

const ParentComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <Fragment>
            <div>
                <h2>Componente Padre</h2>
                <small> No utilizar el estado de conteo</small>
            </div>

            <ChildComponent count={count} setCount={setCount}/>
        </Fragment>
    )
}

export default ParentComponent;