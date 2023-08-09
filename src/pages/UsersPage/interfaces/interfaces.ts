export interface PropsCU {
    onOpenAddNewUser: () => void;
    openCreateUsers: boolean;
}

export enum USERSSTATE {
    OPTIONLEGAL = "Juridica",
    OPTIONNATIVE = "Natural"
}

export interface InterCreateUser {
    Icon: JSX.Element;
    name: string;
    placeholderJu?: string;
    placeholderNa?: string;
    titleLabelJ?: string;
    titleLabelP: string;
    type: string;
}

export interface PropsShowInputs {
    typePersonAre: string,
    dataUser: InterCreateUser
}

export interface PropsPhotoTypePerson {
    onChangeSelect: ({ target }: { target: HTMLSelectElement; }) => void;
    typePersonAre: string;
}