import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'


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
    

    const cardClassName = "card container w-120 mx-auto px-4 border-4 border-white rounded-lg bg-white shadow-lg"
    const content1ClassName = "content p-5"
    const content2ClassName = "content p-3"
    const loginClassName = "text-lg font-bold mb-4"
    const inputClassName = "outline-black w-full my-3 pl-2"
    const forgotPasswordClassName = "text-center text-blue-500 hover:text-blue-600 mt-2"
    const submitClassName = "ml-auto mr-0 mt-6 block px-4 py-1 rounded bg-blue-300 font-bold cursor-pointer outline-none hover:bg-blue-400 text-blue-800"
    const noAccountClassName = "text-center font-bold"
    const signUpAsClassName = "text-center mb-3"
    const linkDivClassName = "inline-grid grid-cols-4 gap-16 justify-items-center w-full mx-auto"
    const linkClassName = "bg-blue-300 box-border h-16 w-24 text-center flex items-center justify-center border-2 rounded border-blue-400 hover:border-blue-500 text-blue-800"

    return (
        <div>
            <div className="main">
                <div className={cardClassName} >
                    <div className={content1ClassName} >
                        <h1 className={loginClassName}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label name="email">
                                    Email
                                </label>
                                <input 
                                    className={inputClassName}
                                    name="email" 
                                    type="email" 
                                    ref={register}
                                />
                                <label name="password">
                                    Password: 
                                </label>
                                <input 
                                    className={inputClassName}
                                    name="password" 
                                    type="password" 
                                    ref={register}
                                />
                                <p className={forgotPasswordClassName}><a href="#">Forgot password?</a></p> 
                                <input className={submitClassName} type="submit" value="Login" />
                            </form>
                        </h1>
                    </div>
                </div>
                <br />
                <div className={cardClassName} >
                    <div className={content2ClassName} >
                        <p className={noAccountClassName} >Don't have an account?</p>
                        <p className={signUpAsClassName} >Sign up as a(n) ...</p>

                        <div className={linkDivClassName} >
                            <div></div>
                            <Link to="/employerform">
                                <div className={linkClassName} >Employer</div>
                            </Link>
                            <Link to="/applicantform">
                                <div className={linkClassName} >Applicant</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div />
            </div>

        </div>
    )
}

export default Login