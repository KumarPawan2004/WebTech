import styles from "../CSS/Button.module.css";

function Button({ type, id, text, variant="", onClick, className="" }) {
  const variantMap = {
    signup: styles.btnSignup,
    login: styles.btnLogin,
    tips: styles.btnTips,
    demo: styles.btnDemo,
    profile: styles.btnProfile,
    save: styles.saveBtn,
    clear: styles.clearBtn
  };

  const finalClass = `${variantMap[variant] || ""} ${styles[className] || ""}`;

  return (
    <button type={type} id={id} className={finalClass} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
