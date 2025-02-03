import { Button } from '@/components/ui/button'
import ListView from './ListView'
import { useState, useEffect } from 'react'
import Board from '../Board/Board'
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '@/auth/Config';


const Header = () => {

    const navigate = useNavigate()

    const [activeTab, setActiveTab] = useState(true)
    const [userInfo, setUserInfo] = useState<{ photoURL?: string, displayName?: string } | null>(null)



    useEffect(() => {
        // Get user details from localStorage
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUserInfo(JSON.parse(storedUser));
        } else {
            navigate("/"); // Redirect to home if no user is found
        }
    }, [navigate]);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem("user"); // Remove user data
            navigate("/"); // Redirect to home
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };


    return (
        <div className=''>
            <div className='flex flex-col w-full items-center px-8 py-5'>
                <div className='flex w-screen justify-between px-12'>
                    <div className='font-bold text-purple-900 text-xl'>
                        TaskBuddy
                    </div>
                    <div className='flex items-center gap-5'>
                        <span className='flex gap-5 items-center'>
                            {userInfo?.photoURL && (
                                <img src={userInfo.photoURL} alt="altlogo" className='rounded-full size-10' />
                            )}
                            <div>{userInfo?.displayName}</div>
                        </span>
                    </div>
                </div>

                <div className=' flex justify-between w-screen items-center text-center px-10'>
                    <div className='flex'>
                        <p className="me-2" role="presentation">
                            <button
                                onClick={() => setActiveTab(true)}
                                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab ? 'border-black' : 'border-transparent hover:text-gray-900 hover:border-gray-300'}`}
                            >
                                List
                            </button>
                        </p>
                        <p className="me-2 hidden md:block" role="presentation">
                            <button
                                onClick={() => setActiveTab(false)}
                                className={`inline-block p-4 border-b-2 rounded-t-lg ${!activeTab ? 'border-black' : 'border-transparent hover:text-gray-900 hover:border-gray-300'}`}
                                id="dashboard-tab"
                                data-tabs-target="#dashboard"
                                type="button"
                                role="tab"
                                aria-controls="dashboard"
                                aria-selected="false"
                            >
                                Board
                            </button>
                        </p>
                    </div>
                    <Button className=' bg-neutral-200 text-black font-normal hover:bg-neutral-300 w-20' onClick={handleSignOut}>Logout</Button>
                </div>
            </div>




            {activeTab ? (
                <ListView />
            ) : (
                <Board />
            )}
        </div>
    )
}

export default Header