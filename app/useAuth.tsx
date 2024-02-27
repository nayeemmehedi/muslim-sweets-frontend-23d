import { useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";



interface DecodedToken {
  exp: number;
}

const withAuth = (WrappedComponent: React.ComponentType<any>) => {

  const Wrapper = (props: any) => {
    useEffect(() => {
      const accessToken = Cookies.get("accessToken");

      // Redirect to login page if accessToken is not present
      if (!accessToken) {
        redirect("/login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
