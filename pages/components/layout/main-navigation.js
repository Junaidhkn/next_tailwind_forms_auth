import Link from 'next/link';


function MainNavigation () {
  return (
    <header className='flex justify-between h-20 w-full bg-orange-400'>
      <Link href='/'>
        <a>
          <div className=''>Next Auth</div>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/auth/login'>Login</Link>
          </li>
          <li>
            <Link href='/auth/resetpassword'>Profile</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
