import { Outlet,Link } from "react-router-dom"
import { Fragment , useContext } from "react";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import {UserContext} from '../../contexts/user.context';
import './navigation.styles.scss';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = ()=>{
    const {currentUser } = useContext(UserContext);
   const {isCartOpen} = useContext(CartContext);
    return (
      <Fragment>
          <div className="navigation">
                  <Link to ='/' className="logo-container"><CrwnLogo className="logo"></CrwnLogo></Link>
                  <div className="nav-links-container" to = '/shop'>
                       <Link to = '/shop'className="nav-link">SHOP</Link>
                       
                         {
                          currentUser? <span className="nav-link" onClick={signOutUser} >SIGNOUT</span>:<Link className="nav-link" to = "/auth">SIGNIN</Link>
                         }
                       <CartIcon >0</CartIcon>
                  </div>

                  {isCartOpen && <CartDropDown / >}
           </div>          
          <Outlet></Outlet>
      </Fragment>
    )
}

export default Navigation ;