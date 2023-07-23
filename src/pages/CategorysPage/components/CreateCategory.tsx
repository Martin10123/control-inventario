import { useState, FC } from "react";
import { v4 as uuidv4 } from "uuid";

import { LayoutModal } from "../../Layout";
import { ButtonForm } from "../../../components";
import { CardCategoryInput } from "./CardCategoryInput";

import styles from "./componentsStyles.module.css";

interface PropsCC {
  openCreateCategory: boolean;
  onOpenAddNewCategory: () => void;
}

type TypeCards = {
  id: string;
};

export const CreateCategory: FC<PropsCC> = ({
  onOpenAddNewCategory,
  openCreateCategory,
}) => {
  const [contentCard, setContentCard] = useState<TypeCards[]>([
    { id: "first-card" },
  ]);

  const onDeleteCard = (uidCard: string) => {
    setContentCard((prevCategories) =>
      prevCategories.filter((card) => card.id !== uidCard)
    );
  };

  const onAddNewCard = () => {
    if (contentCard.length === 10) return;

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
        <p>Cantidad de categorias: ({Number(10) - contentCard.length})</p>

        <ButtonForm
          titleButton="Generar"
          onClick={onAddNewCard}
          stylesDivContent={{ padding: 0 }}
        />
      </div>

      <div className={styles.container_quatity_cards}>
        {contentCard.map(({ id }) => (
          <CardCategoryInput
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
