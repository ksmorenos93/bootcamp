import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const  withAuth = (WrappedComponent) => {
    return (props) =>    { 
        const router = useRouter();
        let[isAuthenticated, setIsAuthenticated] = useState(false);
        useEffect(()=> {
            const session = sessionStorage.getItem("session") === 'true';

            if (session) {
                setIsAuthenticated(true);
            } else {
                router.push("/login");
            }
        }, [router]);

        if (!isAuthenticated){
            return null;
        }


        return <WrappedComponent {...props}/>;
}

};

export default withAuth;