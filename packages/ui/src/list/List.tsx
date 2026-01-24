import { ListBox, type ListBoxProps } from "react-aria-components";

export type ListProps<T extends object> = ListBoxProps<T>;

export const List = <T extends object>(props: ListBoxProps<T>) => {
  return <ListBox {...props} />;
};
