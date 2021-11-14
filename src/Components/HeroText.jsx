import styles from "../Styles/Nav.module.css";

export const HeroText = () => {
  return (
    <div className={styles.heroCont}>
      <p className={styles.heroText}>Find Your Dream Job</p>
      <p className={styles.heroDescription}>
        {" "}
        Browse through thousands of full-time or part-time jobs near you
      </p>
    </div>
  );
};
