import React, { useEffect, useState } from 'react'
import { Task1 } from '../components/tasks/task1'

export const Task1Container = () => {
    const [password, setPassword] = useState('')
    const [rpassword, setRpassword] = useState('')
    const [style, setStyle] = useState('')

    useEffect(() => {
        if(rpassword !== '')
            sameChecker()
    })

    const inputHandler = (e) => {
        e.target.name === "password" ? setPassword(e.target.value) : setRpassword(e.target.value)
        //console.log(e.target.name, e.target.value)
    }

    const sameChecker = () => {
        if(rpassword === '' && password === '' ) {
            setStyle('')
            return
        }
        
        password === rpassword ? setStyle('password-green') : setStyle('password-red')
    }
    
    return(
        <Task1 inputHandler={inputHandler} style={style} />
    )
}