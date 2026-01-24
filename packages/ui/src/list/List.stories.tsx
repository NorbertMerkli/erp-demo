import type { Meta, StoryObj } from "@storybook/react";
import { ListBoxItem } from "react-aria-components";

import { List } from "./List";

const meta: Meta<typeof List> = {
  title: "List",
  component: List,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const items = [...Array(10).keys()].map((id) => ({ id }));

export const Default: StoryObj<typeof List> = {
  args: {
    "aria-label": " ",
  },
  render: (args) => (
    <List {...args} items={items}>
      {(item) => <ListBoxItem>{String(item.id)}</ListBoxItem>}
    </List>
  ),
};
