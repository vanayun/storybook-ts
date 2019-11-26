import { boolean, text, withKnobs } from "@storybook/addon-knobs";

import Hello from "./Hello";
import React from "react";
import { action } from "@storybook/addon-actions";
import mdx from "./Hello.mdx";

export default {
  title: "components|basic/Hello",
  component: Hello,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트',
    docs: {
      page: mdx
    }
  }
};

export const hello = () => {
  const big = boolean("big", false, "Group 1");
  const red = boolean("red", false);
  const name = text("name", "Storybook");
  return (
    <Hello
      name={name}
      big={big}
      red={red}
      onHello={action("onHello")}
      onBye={action("onBye")}
    />
  );
};

hello.story = {
  name: "Default"
};

export const standard = () => <Hello name="Storybook" />;
export const big = () => <Hello name="Storybook" big />;
export const red = () => <Hello name="Storybook" red />;
