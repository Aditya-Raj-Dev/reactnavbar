import React from "react";
import styles from "./navbar.module.css"


const Navbar=()=>{
    return (
        <div className={styles.blue}> 
            <div className={styles.back}>
       <h1 className={styles.hello}>LOGOBAKERY</h1>
       <div className={styles.display}>
           <p>Services</p>
           <p>Projects</p>
           <p>About</p>
       </div>
       <button className={styles.button}>Contact</button>
    </div>
    </div>
    )
}
export default Navbar;