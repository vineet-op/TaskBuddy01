import React from 'react'
import circle from "../assets/circles_bg.png"
import task from "../assets/task.png"
import google from "../assets/google.png"
import vector from "../assets/Vector.png"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '@/auth/Config'
const Homepage = () => {


    const navigate = useNavigate()

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Store user details in localStorage
            localStorage.setItem("user", JSON.stringify(user));

            // Redirect to dashboard
            navigate("/tasks");
        } catch (error) {
            console.error("Error signing in:", error);
        }
    }

    return (
        <div>
            <div className='h-screen w-screen bg-neutral-100'>
                <div className='flex flex-row justify-between items-center h-full w-full'>
                    {/* //left side of the page */}
                    <div className='flex gap-4 flex-col items-center text-center mx-auto flex-wrap w-[400px] h-[250px]'>
                        <h2 className='text-2xl font-bold text-purple-900 flex items-center justify-center gap-2'>
                            <img src={vector} className='inline-block' />
                            TaskBuddy
                        </h2>
                        <p className='font-medium font-sans text-center'>Streamline your workflow and track progress effortlessly with our all-in-one task management app.</p>

                        <div className='flex gap-5 justify-center items-center'>

                            <Link to='/tasks'>
                                <button onClick={signInWithGoogle} className='mt-5 cursor-pointer w-64 bg-gray-950 text-white font-semibold font-sans px-6 py-3 rounded-xl flex items-center justify-center gap-2'>
                                    <img src={google} className='size-6' />
                                    Continue with Google
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* Right side of the page */}
                    <div className='hidden md:flex h-full'>
                        <div className=''>
                            <img src={circle} />
                        </div>
                        <div className='absolute right-0 bottom-6'>
                            <img src={task} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Homepage