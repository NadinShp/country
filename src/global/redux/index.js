import {createAction} from "@reduxjs/toolkit";

export const asyncActionsCreator = (action) => {
    const values = ['SUCCESS', 'ERROR', 'REQUEST'];
     const types = values.reduce((acc,value)=>{
         const type = `${action}_${value}`;
         acc[value] = type;
         acc[value.toLowerCase()] = createAction(type);
         return acc;
     }, {});
     return types;
}