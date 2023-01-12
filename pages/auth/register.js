import Link from 'next/link.js';
import { useRef, useState } from 'react';
import { HiFingerPrint } from 'react-icons/hi';

const register = () => {
	const [type, setType] = useState(true);
	const typeToggler = () => {
		setType(!type);
	};

	const nameInputRef = useRef();
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	const cpasswordInputRef = useRef();
	const createUser = async (name, email, password) => {
		const response = await fetch('/api/auth/signup', {
			method: 'POST',
			body: JSON.stringify({ name, email, password }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		if (!response.ok) {
			throw new Error(data.message || 'Something Went Wrong!');
		}

		return data;
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const name = nameInputRef.current.value;
		const email = emailInputRef.current.value;
		const password = passwordInputRef.current.value;
		createUser(name, email, password);
		nameInputRef.current.value = '';
		emailInputRef.current.value = '';
		passwordInputRef.current.value = '';
	};

	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
			<div className='flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md'>
				<div className='font-medium self-center text-xl sm:text-3xl text-gray-800'>
					Join us Now
				</div>
				<div className='mt-4 self-center text-xl sm:text-sm text-gray-800'>
					Enter your credentials to get access account
				</div>
				<div className='mt-10'>
					<form onSubmit={submitHandler}>
						<div className='flex flex-col mb-6'>
							<label
								htmlFor='name'
								className='mb-1 text-xs sm:text-sm tracking-wide text-gray-600'>
								Name:
							</label>
							<div className='relative'>
								<div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400'>
									<svg
										className='h-6 w-6'
										fill='none'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z' />
									</svg>
								</div>

								<input
									id='name'
									type='name'
									name='name'
									ref={nameInputRef}
									className='text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400'
									placeholder='Enter your name'
								/>
							</div>
						</div>
						<div className='flex flex-col mb-6'>
							<label
								htmlFor='email'
								className='mb-1 text-xs sm:text-sm tracking-wide text-gray-600'>
								E-Mail Address:
							</label>
							<div className='relative'>
								<div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400'>
									<svg
										className='h-6 w-6'
										fill='none'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207' />
									</svg>
								</div>

								<input
									id='email'
									type='email'
									name='email'
									ref={emailInputRef}
									className='text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400'
									placeholder='E-Mail Address'
								/>
							</div>
						</div>
						<div className='flex flex-col mb-6'>
							<label
								htmlFor='password'
								className='mb-1 text-xs sm:text-sm tracking-wide text-gray-600'>
								Password:
							</label>
							<div className='relative'>
								<div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400'>
									<span>
										<svg
											className='h-6 w-6'
											fill='none'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											viewBox='0 0 24 24'
											stroke='currentColor'>
											<path d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
										</svg>
									</span>
								</div>

								<input
									id='password'
									type={type ? 'password' : 'text'}
									name='password'
									ref={passwordInputRef}
									className='text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400'
									placeholder='Password'
								/>
								<button
									onClick={typeToggler}
									type='button'
									className='absolute top-[5px] right-3 cursor-pointer p-2'>
									<HiFingerPrint />
								</button>
							</div>
						</div>
						<div className='flex flex-col mb-6'>
							<label
								htmlFor='cpassword'
								className='mb-1 text-xs sm:text-sm tracking-wide text-gray-600'>
								Confirm Password:
							</label>
							<div className='relative'>
								<div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400'>
									<span>
										<svg
											className='h-6 w-6'
											fill='none'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											viewBox='0 0 24 24'
											stroke='currentColor'>
											<path d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
										</svg>
									</span>
								</div>

								<input
									id='cpassword'
									type={type ? 'password' : 'text'}
									name='cpassword'
									ref={cpasswordInputRef}
									className='text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400'
									placeholder='Confirm Password'
								/>
								<button
									onClick={typeToggler}
									type='button'
									className='absolute top-[5px] right-3 cursor-pointer p-2'>
									<HiFingerPrint />
								</button>
							</div>
						</div>
						<div className='flex w-full'>
							<button
								type='submit'
								className='flex mt-2 items-center justify-center focus:outline-none  text-white text-sm   sm:text-base  bg-blue-500 hover:bg-blue-600 rounded-2xl   py-2   w-full   transition   duration-150   ease-in '>
								<span className='mr-2 uppercase'>Sign Up</span>
								<span>
									<svg
										className='h-6 w-6'
										fill='none'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z' />
									</svg>
								</span>
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className='flex justify-center items-center mt-6'>
				<Link
					href='/auth/login'
					className='
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center
          '>
					<span className='ml-2'>You have an account?</span>
				</Link>
				<Link
					href='/auth/login'
					className='text-xs ml-2 text-blue-500 font-semibold'>
					Login here
				</Link>
			</div>
		</div>
	);
};

export default register;
