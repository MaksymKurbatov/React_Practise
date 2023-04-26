import React from "react";
import classes from "./Mybutton.module.css"

function Mybutton({children, ...props}) {
        return (
            <button {...props} className={classes.myBtn}>
                {children}
            </button>
        );
}

export default Mybutton;
