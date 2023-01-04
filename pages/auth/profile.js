import React from 'react';

const profile = () => {
	return (
		<div className='my-5 mx-auto'>
			<h1 className='font-extrabold text-[40px] text-center'>
				Your User Profile
			</h1>
			<form className='flex flex-col gap-10 my-9 mx-auto'>
				<div className='mx-auto'>
					<label
						className='block'
						htmlFor='new-password'>
						New Password
					</label>
					<input
						className='p-1 rounded-lg border border-slate-900'
						type='password'
						id='new-password'
					/>
				</div>
				<div className='mx-auto'>
					<label
						className='block'
						htmlFor='old-password'>
						Old Password
					</label>
					<input
						className='p-1 rounded-lg border border-slate-900'
						type='password'
						id='old-password'
					/>
				</div>
				<div className='mx-auto'>
					<button className='block rounded-2xl bg-orange-500 px-3 py-2 hover:bg-neutral-400'>
						Change Password
					</button>
				</div>
			</form>
		</div>
	);
};

export default profile;
