import { useNavigate } from "react-router-dom";
import { SubNamesProp } from "../interfaces/interfaces";

import styles from "./sideBar.module.css";

interface Props {
  linkGoTo: string;
  onCloseSideBar: () => void;
  openSubTitle: boolean;
  subNames: SubNamesProp[];
}

export const SideSubItem = ({
  openSubTitle,
  subNames,
  onCloseSideBar,
}: Props) => {
  const showSubTitles = openSubTitle
    ? styles.sidebar__in
    : styles.sidebar__close;

  const navigate = useNavigate();

  const onOpenScreen = (name: string) => {
    navigate(name);

    onCloseSideBar();
  };

  return (
    <>
      {subNames && (
        <div
          className={`${styles.sidebar__list_item_subtitles} ${showSubTitles}`}
        >
          <ul className={styles.sidebar__list_subtitles}>
            {subNames.map(({ IconSub, nameSub, linkGoTo }) => (
              <li
                className={styles.sidebar__item_subtitles}
                key={nameSub}
                onClick={() => onOpenScreen(linkGoTo)}
              >
                {IconSub}
                <p className={styles.sidebar__item_title}>{nameSub}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
