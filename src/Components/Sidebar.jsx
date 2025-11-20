import styles from "../CSS/Sidebar.module.css";
// import { useNavigate } from "react-router-dom";

function Sidebar() {
  // const navigate = useNavigate();
  // const handleclick = () => navigate("/Security");

  return (
    <>
      <div className={styles.userInfo}>
        <div className={styles.userLogo}>DU</div>
        <div className={styles.emails}>
          <span className={styles.name}>Demo User</span>
          <span className={styles.email}>demo@webtech.practice</span>
        </div>
      </div>

      <p className={styles.dash}>DASHBOARD</p>

      <div className={styles.nav}>
        <div className={styles.navItem} id="Overview">🏠 Overview</div>
        <div className={`${styles.navItem} ${styles.active}`} id="Profile">👤 Profile Settings</div>
        <div className={`${styles.navItem} ${styles.active}`} id="Security">🔒 Security</div>
        <div className={styles.navItem} id="Notification">🔔 Notifications</div>
      </div>

      <p className={styles.dash}>QUICK ACTIONS</p>

      <div className={styles.nav}>
        <div className={styles.navItem} id="Help">❓ Help & Support</div>
      </div>

      <p className={`${styles.dash} ${styles.account}`}>ACCOUNT</p>

      <div className={styles.nav}>
        <div className={styles.navItem} id="SignOut">🧡 Sign Out</div>
      </div>
    </>
  );
}

export default Sidebar;
