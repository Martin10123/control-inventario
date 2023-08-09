import { InputForm } from "../../../components";
import { PropsShowInputs, USERSSTATE } from "../interfaces";

import styles from "./cuStyles.module.css";

export const ShowInputs = ({ typePersonAre, dataUser }: PropsShowInputs) => {
  const { OPTIONLEGAL } = USERSSTATE;

  const placeholderText =
    typePersonAre === OPTIONLEGAL
      ? dataUser.placeholderJu
      : dataUser.placeholderNa;

  const labelText =
    typePersonAre === OPTIONLEGAL ? dataUser.titleLabelJ : dataUser.titleLabelP;

  return (
    <InputForm
      classNameDiv={styles.cu__input_text}
      icon={dataUser.Icon}
      key={dataUser.name}
      placeholder={placeholderText}
      titleLabel={labelText}
      type={dataUser.type}
    />
  );
};
