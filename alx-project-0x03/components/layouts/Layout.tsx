//## components/layouts/Footer.tsx

import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';

const Footer: React.FC = () => {
    return(
        <footer className='bg-gray-900 text-white py-10'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div>
                    <h3 className='text-xl font-bold mb-4'>Splash</h3>
                    <p className='text-gray-400 mb-4'>Your one-stop platform for all your needs. connecting people, creating opportunities</p>
                    <p className='text-gray-400'>&</p>
                </div>
            </div>
        </footer>
    )
}