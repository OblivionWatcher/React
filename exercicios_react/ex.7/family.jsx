import React from 'react'
import { childrenWithProps } from '../utils/reactUtil'

export default props => (
    <div>
        <h1>Família</h1>
        {props.children}
        
        {/* FUNCIONA APENAS PARA UM UNICO MEMBRO
            { React.cloneElement(props.children, {...props}) } */}
       
        { childrenWithProps(props.children, props) }
    </div>
)