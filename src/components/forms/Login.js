import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Login() {
    const { register, handleSubmit, errors } = useForm()
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    // const handleChange = event => {
    //     if ( event.target === "email" )
    //         setEmail(event.target.value)
    //     else if ( event.target === "password" )
    //         setPassword(event.target.value);
    // }

    const onSubmit = data => {
        console.log(`Email: ${data.email}\nPassword: ${data.password}`)
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            Email: <input 
                        name="email" 
                        type="email" 
                        ref={register}
                    />
            <br />
            Password: <input 
                        name="password" 
                        type="password" 
                        ref={register}
                    />
            <input type="submit" />
        </form>
    )
}

export default Login