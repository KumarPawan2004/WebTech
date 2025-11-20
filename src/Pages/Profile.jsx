import styles from "../CSS/Profile.module.css";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Pcard from "../Components/Pcard";

function Profile() {
  return (
    <div className={styles.profilePage}>
      <div className={styles.mainContainer}>
        {/* LEFT SIDE CONTENT */}
        <div className={styles.leftContent}>
          <Sidebar />
        </div>

        {/* MAIN CONTENT */}
        <div className={styles.mainContent}>
          <Header />
          <div className={styles.scrollArea}>
            <Pcard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
