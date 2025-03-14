import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-6">
      <div className="h-16 w-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="4"/>
          <text x="50" y="65" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" textAnchor="middle" fill="white">DL</text>
        </svg>
      </div>
      <div className='flex items-center gap-6 text-2xl text-white'>
      <a href="https://www.linkedin.com/in/devanshlingamaneni" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="cursor-pointer hover:text-gray-300" />
      </a>
      <a href="https://www.github.com/DevanshL" target="_blank" rel="noopener noreferrer">
        <FaGithub className="cursor-pointer hover:text-gray-300" />
      </a>
      <a href="https://www.instagram.com/d__e__v__a__n__s__h7/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="cursor-pointer hover:text-gray-300" />
      </a>
      <a href="https://x.com/DLingamaneni" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="cursor-pointer hover:text-gray-300" />
      </a>
      </div>
    </nav>
  );
};

export default Navbar;