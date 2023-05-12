import React, { useState } from 'react';

// * Definiendo estylos enconstantes

let red = 0;
let green = 200;
let blue = 150;

// ? Estilo para el usuario logueado
const loggedStyle = {
    color: 'white',
    backgroundColor: `rgb(${red},${green},${blue})`,
    fontWeight: 'bold',
}

// ? Estilo para usuario no logueado
const unLoggedStyled = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold', 
}


// Login / Logout buttons
const LoginButton = ({ loginAction, propStyle }) => {
    return(
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({ logoutAction, propStyle }) => {
    return(
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

// ? (Expresion true) && expresion => se renderiza la expresion
// ? (Expresion false) && expresion => no se renderiza la expresion

const OptionalRender = () => {
    
    const [ access, setAccess ] = useState(false);
    const [ nMessages, setNmessages ] = useState(0);

    // const updateAccess = () => {
    //     setAccess(!access);
    // }

    const loginAction = () => {
        setAccess(true);
    }
    
    const logoutAction = () => {
        setAccess(false);
    }

    let opButton;

    // if(access){
    //     opButton = <button onClick={updateAccess}>Logout</button>
    // }else{
    //     opButton = <button onClick={updateAccess}>Login</button>
    // }
    
    if(access){
        opButton = <LogoutButton propStyle={unLoggedStyled} logoutAction={logoutAction}></LogoutButton>
    }else{
        opButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }

    //* unread messages
    let addMessages = () => {
        setNmessages(nMessages + 1);
    }

    return (
        <div>
            {/* Optional Button */}
            { opButton }

            {/* N Messages unread */}
            {/* { nMessages > 0 && nMessages === 1 && <p>You Have {nMessages} new messages...</p> }
            { nMessages > 1 && <p>You Have {nMessages} new messages...</p> }
            { nMessages === 0 && <p>There are not new messages</p> } */}

            {/* Operador ternario */}
            {/* { nMessages > 0 && nMessages === 1 ? <p>You Have {nMessages} new messages...</p> : <p>There are not new messages</p> } */}
            { access ? ( <div>

                { nMessages > 0 ? <p>You Have {nMessages} new message{ nMessages > 1 ? 's' : null }...</p>
                : <p>There are not new messages</p> }

                <button onClick={addMessages} >{
                    nMessages === 0 ? 'Add your firts message' : 'Add new messages'
                }</button>

            </div> ) : null }
            
        </div>
    )
} 

export default OptionalRender