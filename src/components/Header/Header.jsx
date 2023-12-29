import styles from "./Header.module.css";

const getHeadingText = (sum) => {
  if (sum > 0) {
    return (
      <h1>
        Your current balance is <span className={styles.greenSum}>${sum}</span>{" "}
        Good job!
      </h1>
    );
  }
  if (sum < 0) {
    return (
      <h1>
        Oops! You are <span className={styles.redSum}>${Math.abs(sum)}</span> in
        the red.
      </h1>
    );
  }
  return (
    <div>
      <h1>Let's start tracking!</h1>
      <p className={styles.subheading}>
        Enter your incomes and expenses below.
      </p>
    </div>
  );
};

const Header = ({ sum }) => {
  return (
    <header className={styles.headerSection}>
      <img
        src="./images/logo.png"
        alt="logo with a circular shape and green background that has a white dollar sign in the middle"
        className={styles.logo}
      />
      <div className={styles.heading}>{getHeadingText(sum)}</div>
    </header>
  );
};

export default Header;
