// MainPage

export type CardsInfo = {
  backgroundBtn?: string;
  backgroundCard?: string;
  colorDescription?: string;
  colorTitle?: string;
  descripcionCard: string;
  imageCard: string;
  linkGoToCard: string;
  nameCard: string;
};

export interface PropsCard {
  dataCard: CardsInfo;
}
