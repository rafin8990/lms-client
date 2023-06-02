import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { AuthContext } from '../../Context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Content from '../../Shared/Content';
AOS.init();

const Register = () => {
    const [signUpError, setSignUpError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()

    const { googleSignIn, updateUser, createUser } = useContext(AuthContext)

    const from = location.state?.from?.pathname || '/'


    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegister = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        navigate(from, { replace: true });
                    })
                    .catch(error => {
                        setSignUpError(error.message)
                        console.error(error)
                    })
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='min-h-screen md:flex justify-center items-center px-3 bg-black'>
            <div data-aos="slide-right">
                <Content></Content>
            </div>
            <div data-aos="slide-left" className='lg:ml-10 py-10'>
                <div className='w-[350px] lg:w-96  bg-[#FA383E]  p-4 rounded-2xl shadow-2xl hover:shadow-green-300'>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <div>
                            <p className=' my-2 text-white'>Name:</p>
                            <input {...register("name", { required: "Name is required" })} type="text" placeholder="Enter Name" className="input input-bordered w-full" />
                            {errors.name && <p className="text-black">{errors.name?.message}</p>}
                        </div>
                        <div>
                            <p className=' my-2 text-white'>Email:</p>
                            <input {...register("email", { required: "email is required" })} type="email" placeholder="Enter Email" className="input input-bordered w-full" />
                            {errors.email && <p className="text-black">{errors.email?.message}</p>}
                        </div>
                        <div>
                            <p className=' my-2 text-white'>Password:</p>
                            <input {...register("password", { required: "Password is required" })} type="Password" placeholder="Enter Password" className="input input-bordered w-full" />
                            {errors.password && <p className="text-black">{errors.password?.message}</p>}
                        </div>
                        <div>
                            <button type='submit' className='btn bg-black w-full my-2'>Register</button>
                            <p>{signUpError}</p>
                        </div>
                        <div className='divider text-white'>Or</div>

                        <button onClick={handleGoogleSignIn} className='btn bg-black w-full'>SignIn With Google</button>
                    </form>
                    <p className='my-2 text-white'>Already Have An Account? <Link className='text-blue-500 hover:underline' to='/login'>Please Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;