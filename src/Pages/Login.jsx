import styles from '../CSS/Login.module.css';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() { 
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailval = localStorage.getItem("useremail");
    const passwordval = localStorage.getItem("password");

    if (email === emailval && password === passwordval) {
      navigate("/Profile");
    } else {
      alert("Invalid email and password");
    }
  };

  const quickdemo = () => {
    setEmail("demo@webtech.practice");
    setPassword("123456");
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.mainContainer}>
        <h2 className={styles.welcome}>Welcome Back 👋</h2>
        <p className={styles.msg1}>Sign in to continue to your dashboard</p>

        <form onSubmit={handleSubmit}>
          <Input
            label="Email Address"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            variant="login"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            variant="login"
          />

          <div className={styles.checkboxRow}>
            <input type="checkbox" id="remember" /> 
            <label htmlFor="remember">Remember me for 30 days</label> 
            <span className={styles.forget}>Forgot Password?</span>
          </div>

          <Button type="submit" text="Sign In" variant="login" />

          <p className={styles.msg}>
            New to WebTech Practice?{" "}
            <span
              className={styles.create}
              onClick={() => navigate("/Signup")}
            >
              Create an account
            </span>
          </p>

          <Button
            type="button"
            text="⚡ Quick Demo"
            variant="demo"
            onClick={quickdemo}
          />
        </form>
      </div>

      <Button
        text="💡 Tips"
        variant="tips"
        onClick={() => navigate("/Tips")}
      />
    </div>
  );
}

export default Login;
