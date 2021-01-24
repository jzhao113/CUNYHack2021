import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormUserDetails from './FormUserDetails'

function UserForm() {
    const { register, handleSubmit, errors } = useForm()
    const [ step, setStep ] = useState(1)
    const [ fullName, setFullName ] = useState('')
    const [ email, setEmail ] = useState('')
    
    const nextStep = () => {
        setStep( step + 1 )
    }

    const prevStep = () => {
        setStep( step - 1 )
    }

    const handleChange = input => event => {
    }

    const onSubmit = data => {
        console.log(data)
    }

    // let val = ""
    // switch (step) {
    //     case 1:
    //         val = <FormUserDetails 
    //             nextStep={nextStep}
    //         />
    //         break
    //     case 2:
    //         val = <h1>Form Personal Details</h1>
    //         break
    //     case 3:
    //         val = <h1>Confirm</h1>
    //         break
    //     case 4:
    //         val = <h1>Success</h1>
    //         break
    // }
    return (
        <>
            {/* {val} */}
            <div>{step}</div>
            <button onClick={()=>prevStep()}>Previous</button>
            <button onClick={()=>nextStep()}>Next</button>
        </>
    )
    /*
    return (
        {
            switch(step) {
                case 1:
                    <></>
            }
        }
        <>
            <div>{step}</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>Full Name: <input type="text" name="fullName" ref={register({required: true, minLength: 8})} /></div>
                <div>Email: <input type="email" name="email" ref={register({required: true})} /></div>
                <button onClick={()=>nextStep()}>Next</button>
                <button onClick={()=>prevStep()}>Previous</button>
                { errors.fullName && <p>Full name is invalid</p>}
                <input type="submit"/>
            </form>
        </>
    )*/
}

export default UserForm
