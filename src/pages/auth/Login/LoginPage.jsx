import React, { useContext } from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import AuthContext from '../../../provider/AuthContext';
import loginAnimation from '../../../../public/login.json'
import Lottie from 'lottie-react';

const LoginPage = () => {

    const { signInUser, googleSignIn } = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInUser(email, password)
            .then((result) => {
                console.log(result.user)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <header className='bg-[#F2F6FD]'>
                <Navbar></Navbar>
            </header>
            <main className='w-4/5 mx-auto relative'>
                
                    <div className='w-4/12 mx-auto flex flex-col items-center justify-center my-32'>
                        <div className='text-center'>
                            <p className='text-[#3C65F5] mb-4'>Welcome back!</p>
                            <h2 className='text-[#05264E] font-bold text-3xl mb-2'>Member Login</h2>
                            <p className='text-gray-600 mb-4'>Access to all features. No credit card required.</p>
                        </div>
                        <div className='w-full'>
                            <button onClick={googleSignIn} className='py-3 btn btn-outline rounded-lg border-gray-300 w-full text-base flex items-center'><FcGoogle /> Sign in with Google</button>
                        </div>
                        <div className="divider my-6">OR</div>
                        <form onSubmit={handleSignIn}>
                            <label htmlFor="email">Email address</label>
                            <input type="email" name='email' placeholder="Steven Jobs" className="input input-bordered w-full mt-2 mb-4" />
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' placeholder="********" className="input input-bordered w-full mt-2 mb-4" />
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <label className="label cursor-pointer">
                                        <input type="checkbox" defaultChecked className="checkbox mr-2" />
                                        <span className="label-text">Remember me</span>
                                    </label>
                                </div>
                                <div className='label-text'>
                                    <p>Forget Password?</p>
                                </div>
                            </div>
                            <button className='w-full py-3 text-white rounded-lg bg-[#05264E] my-4'>Login</button>
                            <p className='text-base text-gray-600 text-center'>Don't have an account?<Link to={'/register'} className='text-[#05264E]'>Register</Link></p>
                        </form>
                    </div>
                    <div className='w-60 absolute top-10 right-16'>
                        <Lottie animationData={loginAnimation}></Lottie>
                    </div>
                
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default LoginPage;