import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

// CheckAuth component manages authentication and role-based routing. It redirects users based on their authentication status and role, ensuring access to appropriate routes (admin or shop pages). If unauthenticated, users are directed to login or registration pages.


function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // console.log(location.pathname, isAuthenticated);

  if (location.pathname === "/") {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" />;
    } else {
      if (user?.role === "admin") {
        return <Navigate to="/admin/dashboard" />;
      } else {
        return <Navigate to="/shop/home" />;
      }
    }
  }

  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}

CheckAuth.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.shape({
    role: PropTypes.string,
  }),
  children: PropTypes.node,
};

export default CheckAuth;
