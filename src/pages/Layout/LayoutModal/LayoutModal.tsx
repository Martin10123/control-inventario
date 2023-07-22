import { IoChevronBackSharp } from "react-icons/io5";

import styles from "./layoutModal.module.css";

interface PropsLaMo {
  children: JSX.Element | JSX.Element[];
  knowIfOpenClose: boolean;
  onCloseCreate: (v: boolean) => void;
  titleModal: string;
}

export const LayoutModal = ({
  children,
  knowIfOpenClose,
  onCloseCreate,
  titleModal,
}: PropsLaMo) => {
  const styleAnimite = knowIfOpenClose ? "zoomInDown" : "zoomOutDown";

  return (
    <section
      className={`${styles.lym__container} animate__animated animate__${styleAnimite}`}
    >
      <div className={styles.lym__content}>
        <nav className={styles.lym__nav_back}>
          <IoChevronBackSharp onClick={onCloseCreate} />
          <p>{titleModal}</p>
        </nav>

        {children}
      </div>
    </section>
  );
};
