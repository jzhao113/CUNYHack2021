import React from 'react'
import { useForm } from 'react-hook-form'

function EmployerForm() {
    const {register, handleSubmit, errors } = useForm()
    // Select tags that are applicable to this posting

    /*
        Questions to ask Employer:

        Company Name
        Company Logo
        Job Title
        Location
        [Date Posted, current Date]
        Description of Job
        Type of Job this applies to (tags)
        Type of skills this job requires (tags)
    */
   const onSubmit = data => {
       console.log(data)
   }


    return (
        <div>
            <div className="main">
                <div className="card container w-120 mx-auto px-4 border-4 border-white rounded-lg bg-white shadow-lg">
                    <div className="content p-5">
                        <h1 className="text-lg font-bold mb-4">Company Sign Up Information</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>Company Name</label>
                            <input name="companyName" type="text" ref={register} className="outline-black w-full my-3 pl-2" />

                            <label>Company Email</label>
                            <input name="email" type="text" ref={register} className="outline-black w-full my-3 pl-2" />
                            
                            <label>Password</label>
                            <input name="password" type="password" ref={register} className="outline-black w-full my-3 pl-2" />
                            
                            <label>Location</label>

                            <input name="location" type="text" ref={register} className="outline-black w-full my-3 pl-2"  />
                            
                            <label>Employment Type</label>
                            <input name="employmentType" type="text" ref={register} className="outline-black w-full my-3 pl-2" />

                            <label>Job Position(s)* <br /></label>
                            <button id="tg-positions" className="border-2 border-gray-300 rounded-lg bg-gray-300 px-2 py-0.5 mr-2 inline-block my-3 pl-2 shadow-sm hover:bg-gray-300 hover:border-blue-400 focus:outline-none">Full Stack Developer</button>

                            <label><br /><br />Qualification Tags* <br /></label>
                            <button id="tg-qualifications" className="border-2 border-gray-300 rounded-lg bg-gray-300 px-2 py-0.5 mr-2 inline-block my-3 pl-2 shadow-sm hover:bg-gray-300 hover:border-blue-400 focus:outline-none">Python</button>

                            <input type="submit" value="Next" className="ml-auto mr-0 mt-8 block px-4 py-1 rounded bg-blue-300 font-bold cursor-pointer outline-none hover:bg-blue-400 text-blue-800" />
                        </form>                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployerForm