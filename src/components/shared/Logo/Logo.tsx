import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link className='w-full flex justify-center items-center' href='/'>
        <img alt='logo image' />
      </Link>
    </div>
  );
};

export default Logo;
