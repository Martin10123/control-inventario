import styles from "./cuStyles.module.css";

interface CheckProps {
  title: string;
}

export const CheckOption = ({ title }: CheckProps) => {
  return (
    <span className={styles.cu__check_option}>
      <p>{title}</p>

      <div className={styles.cu__content_input_check}>
        <span className={styles.cu__content_question}>
          <input
            className={styles.cu__input_check}
            id="checkYes"
            type="checkbox"
          />
          <label htmlFor="checkYes">Si</label>
        </span>
        <span className={styles.cu__content_question}>
          <input
            className={styles.cu__input_check}
            id="checkNo"
            type="checkbox"
          />
          <label htmlFor="checkNo">No</label>
        </span>
      </div>
    </span>
  );
};
