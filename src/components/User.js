import React from 'react';


const user = (props) =>{

    return <div><h2>Jestem uzytkownikiem {props.userName} i ma role: {props.role}</h2>
        <h3>status : {props.children}</h3>
    </div>


}
export default user;