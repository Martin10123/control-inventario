import { BiSearchAlt } from "react-icons/bi";
import { InputForm } from "../../../components";

import styles from "./layout.module.css";

interface ProsLayout {
  chidrenAditional?: JSX.Element | JSX.Element[];
  children: JSX.Element | JSX.Element[];
  firstTitle: string;
  Icon?: JSX.Element;
  onOpenAddNew?: () => void;
  placeholderInput: string;
  secondTitle: string;
}

export const LayoutPages = ({
  chidrenAditional,
  children,
  firstTitle,
  Icon,
  onOpenAddNew,
  placeholderInput,
  secondTitle,
}: ProsLayout) => {
  return (
    <section className={styles.lyp__container}>
      <div className={styles.lyp__content}>
        <div className={styles.lyp__title_page}>
          <h2>{firstTitle}</h2>
        </div>

        <div className={styles.lyp__content_info_section}>
          <div className={styles.lyp__title_info_and_create_user}>
            <p>{secondTitle}</p>

            <span onClick={onOpenAddNew}>{Icon}</span>
          </div>

          {chidrenAditional}

          <div className={styles.lyp__content_table}>
            <InputForm
              icon={<BiSearchAlt />}
              name="searchUser"
              placeholder={placeholderInput}
              type="text"
              stylesCInputF={{
                boxShadow: "0px 2px 7px #00c0e838",
              }}
            />

            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
