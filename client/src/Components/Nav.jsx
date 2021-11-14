import { Link } from "react-router-dom";
import styles from "../Styles/Nav.module.css";

export const Nav = () => {
  return (
    <div className={styles.navCont}>
      <div className={styles.navLeft}>
        <div className={styles.vectorCont}>
          <img src={window.location.origin + "/Vector.png"} alt="" />
          <p>Job Hunt</p>
        </div>
        {/* <div> */}
        <p className={styles.navP}>Find Jobs</p>
        <p className={styles.navP}>Upskill Yourself</p>
        {/* </div> */}
      </div>
      <div className={styles.navRight}>
        <Link style={{ textDecoration: "none" }} to="/post">
          <p>Post a Job</p>
        </Link>
        <p>Sign In</p>
      </div>
    </div>
  );
};
