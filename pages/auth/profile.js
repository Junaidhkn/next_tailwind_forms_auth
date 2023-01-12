import { HiFingerPrint } from 'react-icons/hi';
import { useRef, useState } from 'react';

const profile = () => {
	const [type, setType] = useState(true);
	const typeToggler = () => {
		setType(!type);
	};
	return (
		<div className='min-h-screen flex flex-col items-center mt-20'>
			<div className='font-medium self-center text-xl sm:text-3xl text-gray-800'>
				User Profile
			</div>
			<div className='flex flex-col justify-center items-center mt-4 self-center text-xl sm:text-sm text-gray-800'>
				<h2 className='font-4xl font-bold'>Profile Page (Authorized!)</h2>
				<h3>Name</h3>
				<h3>Email</h3>
			</div>
			<div className='mt-10'>
				<form>
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
							htmlFor='password'
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
							className='flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in'>
							<span className='mr-2 uppercase'>Change Password</span>
							<span>
								<svg
									className='h-6 w-6'
									fill='none'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
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
	);
};

export default profile;
