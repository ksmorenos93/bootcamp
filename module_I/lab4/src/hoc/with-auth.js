
import {useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    let [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(() => {
      const session = sessionStorage.getItem("session") === "true";
      
      if (session) {
        console.log(`session true ${session}`);
        setIsAuthenticated(true);
      } else {
        console.log(`session false 17 ${session}`);
        router.push("/login");
      }
    }, [router]);
    
    if (!isAuthenticated) {
      console.log(`session false 23 ${isAuthenticated}`);
     return null;
    }
    
    return <WrappedComponent {...props} />;
  }
};

export default withAuth;