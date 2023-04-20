/* eslint-disable @next/next/no-img-element */

import styles from "../styles/components/Profile.module.css";
export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://i.pinimg.com/originals/2e/b9/55/2eb9555ede5736c5fa11a514c9ccf84f.jpg"
        alt=""
      />
      <div className="icon">
        <strong>Love</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level 1
        </p>
      </div>
    </div>
  );
}
