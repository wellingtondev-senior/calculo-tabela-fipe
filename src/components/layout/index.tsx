import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { ReactNode } from "react";

interface LayoutProps {
    children:ReactNode
}

const Layout = ({children}:LayoutProps) => {
    return (
        <section>
            <Header/>
            {children}
        </section>
    );
}

export default Layout;