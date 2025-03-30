import { FormEvent } from 'react'
import '../App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const backendUrl = 'http://localhost:4000/api'

function Register() {
    const [errors, setErrors] = useState([] as string[])
    const navigate = useNavigate()
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        //check if passwords match
        if ((e.target as HTMLFormElement).password.value !== (e.target as HTMLFormElement).repeat_password.value) {
            console.log('Passwords do not match');
            (e.target as HTMLFormElement).password.style.borderColor = 'red';
            (e.target as HTMLFormElement).repeat_password.style.borderColor = 'red';
            (e.target as HTMLFormElement).firstName.style.borderColor = '';
            (e.target as HTMLFormElement).lastName.style.borderColor = '';
            (e.target as HTMLFormElement).email.style.borderColor = '';
            setErrors(['Passwords do not match'])
            return
        }
        const response = await fetch(`${backendUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: (e.target as HTMLFormElement).firstName.value,
                lastName: (e.target as HTMLFormElement).lastName.value,
                email: (e.target as HTMLFormElement).email.value,
                password: (e.target as HTMLFormElement).password.value
            })
        })
        // check for errors in the response
        // if the status is unprocessable entity, then the email is already taken
        if (response.status === 422) {
            (e.target as HTMLFormElement).email.style.borderColor = 'red'
            setErrors(['email is already registered'])
            return
        }
        if (!response.ok) {
            // the data contains an error for each field if there is, lets show it
            const data = await response.json()
            const errormsg = [] as string[]
            if (data.firstName) {
                errormsg.push(data.firstName);
                (e.target as HTMLFormElement).firstName.style.borderColor = 'red'
            }
            if (data.lastName) {
                errormsg.push(data.lastName);
                (e.target as HTMLFormElement).lastName.style.borderColor = 'red'
            }
            if (data.email) {
                errormsg.push(data.email);
                (e.target as HTMLFormElement).email.style.borderColor = 'red'
            }
            if (data.password) {
                errormsg.push(data.password);
                (e.target as HTMLFormElement).password.style.borderColor = 'red'
            }
            setErrors(errormsg)
            return
        }
        setErrors([])
        window.alert('User registered successfully')
        const data = await response.json()
        console.log(data.headers);
        //bring back the border color to normal
        (e.target as HTMLFormElement).firstName.style.borderColor = '';
        (e.target as HTMLFormElement).lastName.style.borderColor = '';
        (e.target as HTMLFormElement).email.style.borderColor = '';
        (e.target as HTMLFormElement).password.style.borderColor = '';
        (e.target as HTMLFormElement).repeat_password.style.borderColor = '';
        // navigate to the login page
        navigate('/login')

    }
    return (
        <>
            <h1 className="text-2xl text-center font-bold mb-5">Register</h1>
            <form className="max-w-md mx-auto my-7" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="firstName" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="lastName" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
                </div>
                <div className="text-red-500 text-sm mb-5">
                    {errors.length != 0 && <ul className="" id="error">
                        <p className="font-bold">Error Messages</p>
                        {errors.map((error, index) => (
                            <li className='list-disc list-inside' key={index}>{error}</li>
                        ))}
                    </ul>}

                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Register
                </button>
            </form>

        </>
    )
}

export default Register

