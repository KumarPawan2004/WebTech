import styles from "../CSS/Scard2.module.css";

function Scard2({ icon, text, title }) {
  return (
    <div className={styles.card}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{text}</span>
      <span className={styles.title}>{title}</span>
    </div>
  );
}

export default Scard2;
