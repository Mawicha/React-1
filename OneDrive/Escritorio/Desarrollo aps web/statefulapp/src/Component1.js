import React, { useEffect, useState } from "react";
import { Fragment } from "react";
 
function Component1() {
   
    const [text, setText] = useState(
        window.localStorage.getItem('text')
    )

    const setLocalStorage = value => {
        try {
            setText(value)
            window.localStorage.setItem("text", value)
        } catch(error) {
            console.log(error)
        }
    }

  return (
    <Fragment>
        <label>
            Nombre del usuario: <span></span>
            <input
            onChange={e => setLocalStorage(e.target.value)}
            value={text}
            placeholder="Ingrese su nombre">
            </input>
        </label>
        <p>Hello {text}!</p>
    </Fragment>
  );
}
 
export default Component1;
 
 

