import {createContext, useState} from 'react';
const TodoContext =createContext({
    totalTodos:0
});

function TodoContextProvide(props){
    const context ={};
    return <TodoContext.Provider value={context}>
        {props.children}
    </TodoContext.Provider>
}