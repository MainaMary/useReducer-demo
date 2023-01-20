import { useReducer } from "react";
import React from 'react'

interface Props {
    name: string;
    email:string;
    id:string
}
interface P{
    key:string,
    value:string
}
export const reducer = (state:Props, action:{type:string, payload: P}) => {
    switch(action.type){
        case 'TEXT_INPUT':
            return{ ...state,
                [action.payload.key]: action.payload.value,}
    }
}
const Form = () => {
    const initialState = {
        name: '',
        email: '',
        id: ''
    }as Props
const handleInput = (e:any) =>{
    const{name, value} = e.target
    dispatch({type:'TEXT_INPUT', payload:{key:name, value: value}})
}
const [state, dispatch]:any = useReducer<any>(reducer , initialState)
  return (
    <div>
        <form>
            <input type="text" value={state.name} onChange={handleInput}/>
            <input type="text" value={state.email} onChange={handleInput}/>
            <input type="text"value={state.id} onChange={handleInput}/>

        </form>
    </div>
  )
}

export default Form