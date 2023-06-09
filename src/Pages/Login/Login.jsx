import React, { useContext, useState } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Content from '../../Shared/Content';
AOS.init();
const Login = () => {
    const [loginError, setLoginError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const { googleSignIn, signIn } = useContext(AuthContext);

    const from = location.state?.from?.pathname || '/'


    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = (data) => {
        const email = data.email;
        const password = data.password;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => {
                setLoginError(error.message)
                console.error(error)
            })
    };

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }
    return (
            <div className=' md:flex justify-center items-center px-3 min-h-screen bg-black'>
                <div data-aos="slide-right">
                    <Content></Content>
                </div>
                <div data-aos="slide-left" className=' py-10 md:ml-10'>
                    <div className='w-[350px] bg-base-200  p-4 rounded-2xl shadow-2xl hover:shadow-red-300'>
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <div>
                                <p className=' my-2 text-black'>Email:</p>
                                <input {...register("email", { required: "email is required" })} type="email" placeholder="Enter Email" className="input input-bordered w-full" />
                                {errors.email && <p className="text-black">{errors.email?.message}</p>}
                            </div>
                            <div>
                                <p className=' my-2 text-black'>Password:</p>
                                <input {...register("password", { required: "Password is required" })} type="Password" placeholder="Enter Password" className="input input-bordered w-full" />
                                {errors.password && <p className="text-black">{errors.password?.message}</p>}
                            </div>
                            <div>
                                <button type='submit' className='btn bg-red-500 text-white border-none w-full my-2'>Login</button>
                                <p>{loginError}</p>
                            </div>

                            <div className='divider text-black'>Or</div>
                            <button onClick={handleGoogle} className='btn bg-black w-full'>SignIn With Google</button>
                        </form>
                        <p className='my-2 text-black'>New to SWachh Akshar LMS? <Link className='text-red-500 hover:underline' to='/register'>Please register</Link></p>

                    </div>
                </div>
            </div>
    );
};

export default Login;