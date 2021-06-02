import React, {useState,Fragment} from 'react';

const ComponenteUno = () => {
    const [numero, setNumero]= useState(10)

    return (  
    <Fragment>

<h2>SOY UN COMPONENTE</h2>
    <h3>
        {
            numero >=10 ? "El numero es Mayor o igual": "Es Menor  que 10"

        }
        
        </h3>    
   
    </Fragment>
     );
}
 
export default ComponenteUno;