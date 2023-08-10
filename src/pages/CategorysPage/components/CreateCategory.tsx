import { useState, FC } from "react";
import { v4 as uuidv4 } from "uuid";

import { LayoutModal } from "../../Layout";
import { ButtonForm } from "../../../components";
import { CardCategoryInput } from "./CardCategoryInput";
import { PropsCC, TypeCards } from "../interfaces";

import styles from "./componentsStyles.module.css";

export const CreateCategory: FC<PropsCC> = ({
  onOpenAddNewCategory,
  openCreateCategory,
}) => {
  const [contentCard, setContentCard] = useState<TypeCards[]>([
    { id: "1234-44jfds-first-card" },
  ]);

  const onDeleteCard = (uidCard: string) => {
    if (contentCard.length === 1) return;

    setContentCard((prevCategories) =>
      prevCategories.filter((card) => card.id !== uidCard)
    );
  };

  const onAddNewCard = () => {
    const uuidUniq = uuidv4();

    setContentCard((prevCategories) => [...prevCategories, { id: uuidUniq }]);
  };

  return (
    <LayoutModal
      knowIfOpenClose={openCreateCategory}
      onCloseCreate={onOpenAddNewCategory}
      titleModal="Nueva categoria"
    >
      <div className={styles.cc__content__numbers_add_categories}>
        <p>Cantidad de categorias: ({contentCard.length})</p>
        <ButtonForm
          className={styles.cc__btn_generate}
          titleButton="+"
          onClick={onAddNewCard}
        />
      </div>

      <div className={styles.cc__container_quatity_cards}>
        {contentCard.map(({ id }) => (
          <CardCategoryInput
            countCards={contentCard.length}
            key={id}
            onDeleteCard={onDeleteCard}
            uniqueKey={id}
          />
        ))}
      </div>

      <form className={styles.cc__form}>
        <ButtonForm titleButton="Guardar" />
      </form>
    </LayoutModal>
  );
};
