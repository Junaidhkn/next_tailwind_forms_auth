import { useSession } from 'next-auth/react';

const HomePage = () => {
	const { data: session } = useSession();
	return (
		<div className='my-12 mx-auto text-center'>
			<h1 className='m-auto text-[50px]'>Welcome to Home Page!</h1>
			<div className='flex flex-col justify-center items-center mt-4 self-center text-xl sm:text-sm text-gray-800'>
				<h2 className='font-4xl font-bold'>Profile Page (Authorized!)</h2>
				<h3>{session.user.name}</h3>
				<h3>{session.user.email}</h3>
			</div>
		</div>
	);
};

export default HomePage;
