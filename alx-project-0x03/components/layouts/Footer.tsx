//## components/layouts/Footer.tsx

import { FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';


const Footer: React.FC =() => {
    return(
        <footer className='bg-gray-900 text-white py-10'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div>
                    <h3 className="text-xl font-bold mb-4">Splash App</h3>
                    <p className='text-gray-400 mb-4'>Your one-stop platform for all your needs. connecting people, creating opportunities</p>
                    <p className='text-gray-400'>& 2024 Splash App. All rights reserved.</p>
                </div>

                <div>
                    <h4 className='text-lg font-semibold mb-4'>Useful Links</h4>
                    <ul>
                        <li><a href="/about" className='text-gray-400 hover:text-white transition duration-300'>About Us</a></li>
                        <li><a href="/about" className='text-gray-400 hover:text-white transition duration-300'>Services</a></li>
                        <li><a href="/about" className='text-gray-400 hover:text-white transition duration-300'>Contact Us</a></li>

                        <div>
                            <h4 className='text-lg font-semibold mb-4'>Follow Us</h4>
                            <div>
                                <a href="https://facebook.com" target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white transition duration-300'><FaFacebook size={24}/></a>
                                <a href="https://twitter.com" target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white transition duration-300'><FaTwitter size={24}/></a>
                                <a href="https://instagram.com" target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white transition duration-300'><FaInstagram size={24}/></a>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;