/*
  We know there are three types of button , how do i make them working ? 


*/ 

import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
    google : 'google-sign-in', 
    inverted : 'inverted'
}

const Button = ({children ,  buttonType , ...otherProps})=>{
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}` }  {...otherProps}>{children}</button>
    )
}

export default Button ;