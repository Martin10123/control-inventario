import { SubNamesProp } from "./SideItem";

import styles from "./sideBar.module.css";

interface Props {
  openSubTitle: boolean;
  subNames: SubNamesProp[];
}

export const SideSubItem = ({ openSubTitle, subNames }: Props) => {
  const showSubTitles = openSubTitle
    ? styles.sidebar__in
    : styles.sidebar__close;

  return (
    <>
      {subNames && (
        <div
          className={`${styles.sidebar__list_item_subtitles} ${showSubTitles}`}
        >
          <ul className={styles.sidebar__list_subtitles}>
            {subNames.map(({ IconSub, nameSub }) => (
              <li className={styles.sidebar__item_subtitles} key={nameSub}>
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
