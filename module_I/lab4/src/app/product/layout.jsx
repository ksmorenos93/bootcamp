"use client";

import NavbarHome from "lab4/components/shared/navbar-home/page";
import Footer from "lab4/components/shared/footer/page";
import withAuth from "lab4/hoc/with-auth";

function Layout({ children }) {
  return (
    <main>
      <NavbarHome/>
        {children}
      <Footer/>
    </main>
  )
}

export default withAuth(Layout);