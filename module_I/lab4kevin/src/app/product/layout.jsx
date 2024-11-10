"use client"
import NavbarHome from "lab4kevin/components/shared/navbar-home/page"
import Footer from "lab4kevin/components/shared/footer/page"
export default function Layout({ children }) {
    
    return (
        <main>
            <nav> Product navigation </nav>
            <NavbarHome/>
            {children }
            <Footer/>
        </main>
    )
}