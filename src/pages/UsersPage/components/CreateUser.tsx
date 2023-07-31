import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import { InfoUserOne } from "./InfoUserOne";
import { InfoUserTwo } from "./InfoUserTwo";
import { InfoUserThree } from "./InfoUserThree";
import { LayoutModal } from "../../Layout";

import styles from "./cuStyles.module.css";

interface PropsCU {
  onOpenAddNewUser: () => void;
  openCreateUsers: boolean;
}

export const CreateUser = ({ openCreateUsers, onOpenAddNewUser }: PropsCU) => {
  const [currentTab, setCurrentTab] = useState(1);

  const handleTabChange = (step: number) => {
    setCurrentTab((prevTab) => prevTab + step);
  };

  const isFirstTab = currentTab === 1;
  const isLastTab = currentTab === 3;

  const disabledBBtn = isFirstTab ? styles.cu__disabled_btn : "";
  const disabledGBtn = isLastTab ? styles.cu__disabled_btn : "";

  const handleBack = () => {
    if (!isFirstTab) {
      handleTabChange(-1);
    }
  };

  const handleNext = () => {
    if (!isLastTab) {
      handleTabChange(1);
    }
  };

  return (
    <LayoutModal
      knowIfOpenClose={openCreateUsers}
      onCloseCreate={onOpenAddNewUser}
      titleModal="Crear usuario"
    >
      <div className={styles.cu__content_form}>
        <form className={styles.cu__form}>
          {currentTab === 1 && <InfoUserOne />}
          {currentTab === 2 && <InfoUserTwo />}
          {currentTab === 3 && <InfoUserThree />}
        </form>

        <div className={styles.cu__content_btn__arrow_back_go}>
          <button
            className={`${styles.cu__btn_back_go} ${disabledBBtn}`}
            disabled={isFirstTab}
            onClick={handleBack}
          >
            <MdArrowBackIosNew />
          </button>

          <button
            className={`${styles.cu__btn_back_go} ${disabledGBtn}`}
            disabled={isLastTab}
            onClick={handleNext}
          >
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    </LayoutModal>
  );
};
