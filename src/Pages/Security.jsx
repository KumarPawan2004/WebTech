import styles from "../CSS/Security.module.css";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Scard from "../Components/Scard";

function Security() {
  return (
    <div className={styles.securityPage}>
      <div className={styles.mainContainer}>
        {/* LEFT SIDE CONTENT */}
        <div className={styles.leftContent}>
          <Sidebar />
        </div>

        {/* MAIN CONTENT */}
        <div className={styles.mainContent}>
          <Header />
          <Scard />
        </div>
      </div>
    </div>
  );
}

export default Security;
