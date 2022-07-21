import React,{useState} from 'react';

const Customer = () =>{

    const [customerState,setCustomerState] = useState({
        //names: ["Alicja","Kasia","Ola"],
        pickedName: "Alicja"
    });

    const [namesState,setNamesState] = useState({names:["Alicja","Kasia","Ola"]});

    const switchName = () =>{
        const namePool = namesState.names;
        const number = Math.floor(Math.random()*3);
        setCustomerState({
            pickedName: namePool[number]
        });
    }

    return(
        <div>
            <h2>
                Customer
            </h2>
            <h3>
                Customer name:<br /> 
                {customerState.pickedName}
            </h3>
            <button onClick={switchName}>
                Change name
            </button>
        </div>
    );
}

export default Customer;