import styles from "../CSS/Pcard.module.css";
import Input from "./Input";
import Button from "./Button";

function Pcard() {
  return (
    <div className={styles.mainDash}>
      <h3 className={styles.head}>Profile Settings</h3>
      <h4 className={styles.prefer}>👤 Personal Information</h4>

      <form>
        <div className={styles.inpDiv}>
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter full name"
            required={true}
            variant="profile"
          />
          <Input
            label="Date of Birth"
            type="date"
            required={true}
            variant="profile"
          />
        </div>

        <div className={styles.inpDiv}>
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            required={true}
            variant="profile"
          />
          <Input
            label="Phone Number"
            type="tel"
            placeholder="Enter phone number"
            required={true}
            variant="profile"
          />
        </div>

        <div className={styles.add}>
          💡 <span className={styles.bulb}>Address Information</span>
        </div>

        <div className={styles.inpDiv}>
          <Input
            label="Street Address"
            type="text"
            className="address"
            placeholder="Enter full address"
            required={true}
            variant="profile"
          />
        </div>

        <div className={styles.inpDiv}>
          <Input
            label="Pin Code"
            type="number"
            placeholder="Enter PIN"
            required={true}
            variant="profile"
          />
          <Input
            label="City"
            type="text"
            placeholder="Enter city name"
            required={true}
            variant="profile"
          />
        </div>

        <div className={styles.inpDiv}>
          <Input
            label="Country"
            type="text"
            placeholder="Enter country name"
            required={true}
            variant="profile"
          />
          <Input
            label="Github Profile"
            type="text"
            placeholder="Enter profile"
            variant="profile"
          />
        </div>

        <div className={styles.buttonGroup}>
          <Button 
           text="Cancel Changes" 
           variant="profile" 
           type="button" 
           className="clearBtn"
          />
          <Button
            text="💾 Save Changes"
             variant="profile"
            className="saveBtn"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default Pcard;
