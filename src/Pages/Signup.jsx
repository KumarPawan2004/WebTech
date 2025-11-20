import styles from "../CSS/Signup.module.css";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (name.trim() === "") {
      setNameError("Enter a valid name");
      valid = false;
    } else {
      setNameError("");
    }

    if (!email.includes("@")) {
      setEmailError("Enter a valid email");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (confirmPassword !== password) {
      setConfirmError("Passwords do not match");
      valid = false;
    } else {
      setConfirmError("");
    }

    if (valid) {
      localStorage.setItem("username", name);
      localStorage.setItem("useremail", email);
      localStorage.setItem("password", password);

      navigate("/Login");
    }
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.main}>
        <h2 className={styles.heading}>
          Create your account <span className={styles.star}>★</span>
        </h2>
        <p className={styles.para}>Sign up to access the practice dashboard.</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputRow}>
            <Input
              label="First name"
              type="text"
              id="fname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter first name"
              variant="signup"
              errorText={nameError}
            />
            <Input
              label="Last name"
              type="text"
              id="lname"
              placeholder="Enter last name"
              variant="signup"
            />
          </div>

          <div className={styles.input1}>
            <Input
              label="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              errorText={emailError}
              variant="signup"
            />
          </div>

          {/* ✅ password inputs have a separate class */}
          <div className={styles.inputPswd}>
            <Input
              label="Password"
              type="password"
              id="pswrd"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Minimum 6 characters"
              errorText={passwordError}
              variant="signup"
            />
            <Input
              label="Confirm password"
              type="password"
              id="cnfpwd"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm your password"
              errorText={confirmError}
              variant="signup"
            />
          </div>

          <hr className={styles.hr} />

          <div className={styles.check}>
            <input type="checkbox" id="check" required />
            <label htmlFor="check">
              I agree to the <span className={styles.terms}>Terms</span>
            </label>
          </div>

          <Button
            type="submit"
            id="submit"
            text="Create Account"
            variant="signup"
          />
        </form>

        <p className={styles.msg}>
          Already have an account?{" "}
          <span
            className={styles.sign}
            onClick={() => {
              navigate("/Login");
            }}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
