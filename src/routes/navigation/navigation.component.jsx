import { Outlet,Link } from "react-router-dom"
import { Fragment } from "react";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';
const Navigation = ()=>{
    return (
      <Fragment>
          <div className="navigation">
                  <Link to ='/' className="logo-container"><CrwnLogo className="logo"></CrwnLogo></Link>
                  <div className="nav-links-container" to = '/shop'>
                       <Link to = '/shop'className="nav-link">SHOP</Link>
                       <Link to = '/sign-in'className="nav-link">Sign in</Link>
                  </div>
           </div>          
          <Outlet></Outlet>
      </Fragment>
    )
}

export default Navigation ;