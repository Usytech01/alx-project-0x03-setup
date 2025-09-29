import {Children, ReactNode} from 'react';
import Footer from "@/components/layouts/Footer";
import Header from "./Header"; // the same as above

interface LayoutProps{children: ReactNode;}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </>
    );
};
