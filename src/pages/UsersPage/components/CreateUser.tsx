import { Fragment, useState } from "react";
import { ShowInputs } from "./ShowInputs";
import { ButtonForm } from "../../../components";
import { LayoutModal } from "../../Layout";
import { PropsCU, USERSSTATE } from "../interfaces";
import { listCreateUser } from "../helpers";
import { CheckOption } from "./CheckOption";
import {
  NewValueProps,
  PropsOption,
} from "../../../components/SelectForm/interfaces";
import { PhotoTypePerson } from "./PhotoTypePerson";

import styles from "./cuStyles.module.css";

export const CreateUser = ({ openCreateUsers, onOpenAddNewUser }: PropsCU) => {
  const [typePersonAre, setTypePersonAre] = useState("Juridica");
  const { OPTIONLEGAL } = USERSSTATE;

  const onChangeSelect = (value: NewValueProps) => {
    const select = value as PropsOption;
    setTypePersonAre(select?.value);
  };

  return (
    <LayoutModal
      knowIfOpenClose={openCreateUsers}
      onCloseCreate={onOpenAddNewUser}
      titleModal="Crear usuario"
    >
      <div className={styles.cu__content_form}>
        <form className={styles.cu__form}>
          <PhotoTypePerson onChangeSelect={onChangeSelect} />

          <div className={styles.cu__contain_all_inputs}>
            {listCreateUser.map((dataUser) => {
              const isBusinessName = dataUser.name === "businessName";
              const shouldRenderShowInputs =
                dataUser.name !== "businessName" ||
                (typePersonAre === OPTIONLEGAL && isBusinessName);

              return shouldRenderShowInputs ? (
                <Fragment key={dataUser.name}>
                  <ShowInputs
                    dataUser={dataUser}
                    key={dataUser.name}
                    typePersonAre={typePersonAre}
                  />
                </Fragment>
              ) : null;
            })}

            <div className={styles.cu__content_checkbox}>
              <CheckOption title="Inicia sesión" />
              <CheckOption title="¿Cambiar existencia?" />
            </div>
          </div>
        </form>

        <div className={styles.cu__content_btn_save}>
          <ButtonForm className={styles.cu__btn_save} titleButton="Guardar" />
        </div>
      </div>
    </LayoutModal>
  );
};
