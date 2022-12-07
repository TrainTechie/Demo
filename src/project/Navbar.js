import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav style={{backgroundColor: "lightblue"}}>
       
            <Link to="/">Home            </Link>
         
            <Link to="/aboutus"> AboutUs               </Link>
          
            <Link to="/contactus">Contact</Link>
         
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;