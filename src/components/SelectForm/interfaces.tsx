import { ActionMeta, MultiValue, SingleValue } from "react-select";

export type PropsOption = {
  value: string;
  label: string;
};

export type NewValueProps = MultiValue<PropsOption> | SingleValue<PropsOption>;
export type ActionMetaProps = ActionMeta<PropsOption>;

export interface GroupBase {
  defaultValue?: PropsOption;
  isMulti?: boolean;
  name?: string;
  onChange?: (newValue: NewValueProps, actionMeta: ActionMetaProps) => void;
  readonly options: PropsOption[];
  readonly titleLabel?: string;
}
