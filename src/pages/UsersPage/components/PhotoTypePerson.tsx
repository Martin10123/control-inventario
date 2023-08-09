import { photoUser } from "../../../assets";
import { BsCamera } from "react-icons/bs";
import { SelectForm } from "../../../components";
import { PropsPhotoTypePerson, USERSSTATE } from "../interfaces";

import styles from "./cuStyles.module.css";

export const PhotoTypePerson = ({
  onChangeSelect,
  typePersonAre,
}: PropsPhotoTypePerson) => {
  const { OPTIONLEGAL, OPTIONNATIVE } = USERSSTATE;

  return (
    <div className={styles.contain_photo_select_person}>
      <div className={styles.cu__content_photo_user}>
        <figure className={styles.cu__photo_user}>
          <img src={photoUser} alt="Foto de perfil del usuario" />

          <figcaption>
            <BsCamera />
          </figcaption>
        </figure>
      </div>

      <SelectForm
        className={styles.cu__select_text}
        onChange={onChangeSelect}
        titleLabel="Persona"
        value={typePersonAre}
      >
        <option value={OPTIONLEGAL}>Juridica</option>
        <option value={OPTIONNATIVE}>Natural</option>
      </SelectForm>
    </div>
  );
};
