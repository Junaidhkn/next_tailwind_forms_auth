import Link from 'next/link';
import { useSession, signOut } from "next-auth/react"

function MainNavigation () {
	const { data: session } = useSession()
	const signOutHandler = () => {
		signOut()
	}
	return (
		<header className='flex justify-around items-center h-20 w-full bg-orange-400'>
			<Link href='/'>
				<div className='text-[30px] font-extrabold text-white'>Next Auth</div>
			</Link>
			<nav>
				<ul className='flex gap-10'>
					{!session && <li className='border px-3 py-2 hover:bg-slate-200'>
						<Link
							className='px-3 py-2'
							href='/auth/login'>
							Login
						</Link>
					</li>}
					{!session && <li className='border px-3 py-2 hover:bg-slate-200'>
						<Link
							className='px-3 py-2'
							href='/auth/register'>
							Register
						</Link>
					</li>}
					<li className='border px-3 py-2 hover:bg-slate-200'>
						<Link
							className='px-3 py-2'
							href='/auth/profile'>
							Profile
						</Link>
					</li>
					{session && <li>
						<button onClick={signOutHandler} className='border bg-green-300 rounded-2xl px-3 py-2 hover:bg-slate-200'>
							Logout
						</button>
					</li>}
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
