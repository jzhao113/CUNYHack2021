import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import labels from '../../data/data'
import TagSelection from './TagSelection'
import '../../css/applicantRegister-styles.css'

function ApplicantForm() {

    // Select job titles that you are interested in (Select @ least one)
    // Select tags that apply to you

    /*
        Questions to ask applicant:

        Name
        Type of Job that they want (tags)
        Type of skills they have (tags)
    */

    const { register, handleSubmit, errors } = useForm()
    const [ fullName ] = useState("")
    const [ email ] = useState("")
    const [ password ] = useState("")

    const { jobs, skills } = labels;
    // console.log(job);
    // console.log(labels);
    // job.map(
    //     (val) => {
    //         console.log(val)
    //     }
    // )

    const onSubmit = data => {
        console.log(data)
    }

    const handleClick = event => {
        console.log("clicked")
    }
    
    const labelButtons = jobs.map(jobLabel => {
        <TagSelection key={jobLabel} handleClick={handleClick}/>
    })

    const cardClassName = "card container w-120 mx-auto px-4 border-4 border-white rounded-lg bg-white shadow-lg"
    const contentClassName = "content p-5"
    const headerClassName = "text-lg font-bold mb-4"
    const labelClassName = "outline-black w-full my-3 pl-2"
    const tagClassName = "border-2 border-gray-300 rounded-lg bg-gray-300 px-2 py-0.5 mr-2 inline-block my-3 pl-2 shadow-sm hover:bg-gray-300 hover:border-blue-400 focus:outline-none"
    return (
        // <div className="body">
            <div className="main">
                <div className={cardClassName}>
                    <div className={contentClassName}>
                        <h1 className={headerClassName}>Sign Up Information</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <label className="text-left">Full Name</label>
                                <input 
                                    className={labelClassName}
                                    name="fullName"
                                    type="text"
                                    ref={register}
                                    placeholder="Enter Full Name"
                                />
                            <label>
                                Email:
                                <input 
                                    className={labelClassName}
                                    name="email"
                                    type="text"
                                    ref={register}
                                    placeholder="Enter Email"
                                />
                            </label>
                            <label>
                                Password:
                                <input 
                                    className={labelClassName}
                                    name="password"
                                    type="password"
                                    ref={register}
                                    placeholder="Enter Password"
                                />
                            </label>
                            <br/>
                            <label>
                                Job Tags
                                Select job titles that interest you:
                                {jobs.map(item => <TagSelection name={item}/>)}
                            </label>
                            <br/>
                            <label>
                                Education
                                <input name="education" type="text" ref={register} class={labelClassName} placeholder="Enter Education" />
                            </label>
                            <label>
                                Major
                                <input name="major" type="text" ref={register} class={labelClassName} placeholder="Enter Major" />
                            </label>
                            <input name="GPA" type="number" ref={register} step=".01" max="4.00" class={labelClassName} placeholder="Enter GPA" />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>

            </div>
        // </div>
    )
}

export default ApplicantForm