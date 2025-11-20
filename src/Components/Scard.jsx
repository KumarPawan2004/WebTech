import styles from "../CSS/Scard.module.css";
import Input from "./Input";
import Button from "./Button";
import Scard2 from "./Scard2";

function Scard() {
  return (
    <div className={styles.mainDash}>
      <h3 className={styles.head}>Security Settings</h3>

      <h4 className={styles.prefer}>🔒 Change Password</h4>
      <p className={styles.state}>
        Keep your account secure by using a strong password and changing it regularly.
      </p>

      <div className={styles.inpDiv}>
        <Input
          label="Current Password"
          type="password"
          id="password1"
          required={true}
          variant="security"
        />
        <Input
          label="New Password"
          type="password"
          id="password2"
          required={true}
          variant="security"
        />
      </div>

      <div>
        <Input
          label="Confirm New Password"
          type="password"
          id="NewPassword"
          required={true}
          variant="security"
        />
      </div>

      <div className={styles.updates}>
        <span id="popup"></span>

        <Button
          type="button"
          id="update"
          text="Update Password"
          variant="security"
        />
        <Button
          type="button"
          id="clear"
          text="Clear"
          variant="security"
        />
      </div>

      <hr className={styles.hr1} />

      <h4 className={styles.prefer}>🛡️ Security Information</h4>

      <div className={styles.securityInfo}>
        <Scard2 icon="📅" text="Account Created" title="9/4/2025" />
        <Scard2 icon="🔄" text="Last Updated" title="Never Updated" />
        <Scard2 icon="🏢" text="Session" title="Current browser session active" />
      </div>
    </div>
  );
}

export default Scard;
