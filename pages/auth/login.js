import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router';
import React from 'react'
import Error from '../../components/Err';
import { SignIn, GetSignInErrorMessage } from '../../services/firebase';
import swal from 'sweetalert';
import { useState } from 'react';

export default function Login() {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (values) => {
        const { email, password } = values

        try {
            await SignIn(email, password)
            swal('login success!')
            router.push('/')
        } catch (error) {
            const message = GetSignInErrorMessage(error.code)
            // console.log(message)
            swal(message)
        }
    }
    return (
        <div className='flex justify-center items-center mt-64'>
            <div className='w-1/5 '>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                            id="email"
                            type="email"
                            placeholder="Masukkan Email"
                            {...register("email", { required: true })}
                        />
                        <Error error={errors.email} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                            id="password"
                            type="password"
                            placeholder="******************"
                            {...register('password', { required: true, minLength: 8 })}
                        />
                        <Error error={errors.password} />
                        <p className="text-red text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                            type="submit"
                        >

                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}
