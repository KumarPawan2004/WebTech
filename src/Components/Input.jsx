import styles from "../CSS/Input.module.css";

function Input({
  label,
  id,
  type = "text",
  placeholder,
  required = false,
  variant = "",
  value,
  onChange,
  errorText = "",
  className=""
}) {
  // Create dynamic class names
  const labelClass = styles[`label${variant.charAt(0).toUpperCase() + variant.slice(1)}`];
  const errorClass = styles[`error${variant.charAt(0).toUpperCase() + variant.slice(1)}`];
  const variantClass = styles[variant];
  
  return (
    <div className={`${styles.commonInput} ${variantClass || ""}`}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <br />
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={className}
      />
      {errorText && <p className={errorClass}>{errorText}</p>}
    </div>
  );
}

export default Input;
