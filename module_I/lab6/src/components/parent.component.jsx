"use client";

import {Fragment, useState} from "react";
import ChildComponent from "lab6/components/child.component";

const ParentComponent = () => {
  
  const [count, setCount] = useState(0);
  
  return (
    <Fragment>
      <div>
        <h2>Componente Padre</h2>
        <small>No utilizar el estado de conteo</small>
      </div>
      
      <ChildComponent />
      
    </Fragment>
  )
};

export default ParentComponent;