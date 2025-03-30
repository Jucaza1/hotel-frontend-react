import { FormEvent, useContext, useState } from 'react'
import '../App.css'
import { userContext } from '../context/user'
import { storeToken } from '../services/session'

const backendUrl = 'http://localhost:4000/api'

function Login() {
    //extract state and setter form usercontext
    const { setUserJWT } = useContext(userContext)
    const [errors, setErrors] = useState([] as string[])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        //send data to backend
        const response = await fetch(`${backendUrl}/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: (e.target as HTMLFormElement).email.value,
                password: (e.target as HTMLFormElement).password.value
            })
        })
        if (response.ok) {
            // console.log('login successful', response.status)
            // console.log('JWT', response.headers.get('x-authorization'))
            setUserJWT(response.headers.get('x-authorization') as string)
            storeToken(response.headers.get('x-authorization') as string)
        }

    }
    return (
        <>
            <h1 className="text-2xl text-center font-bold mb-5">Login</h1>
            <form className="max-w-md mx-auto my-7" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
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
                    Login
                </button>
            </form>
        </>
    )
}

export default Login
