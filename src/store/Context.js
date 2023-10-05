import React, { useState } from "react";


const Context = React.createContext({
    
});

export function StoreProvider (props) {
    const [currentRoute , setCurrentRoute] = useState('create');
    
    function routeHandler (route) {
        setCurrentRoute(route);
    }

    const routingContext =  {
        currentRoute,
        routeHandler
    }
 
     return <Context.Provider  value = {routingContext}> {props.children} </Context.Provider>
 }
 
 export default Context;