import styles from "./styles.module.scss";

export default function CallFormField({
  name,
  label,
  required,
  placeholder,
  register,
  pattern,
  type,
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={name}>
        {label}
        {required && "*"}
      </label>
      {type === "textarea" ? (
        <textarea
          {...register(name)}
          className={styles.textarea}
          placeholder={placeholder}
          minLength={20}
        />
      ) : (
        <input
          {...register(name, { required })}
          placeholder={placeholder}
          pattern={pattern}
          className={styles.input}
        />
      )}
    </div>
  );
}
