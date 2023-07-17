import React, {ReactNode} from "react";

import "../src/components/ThemeSwitcher/liwe3-styles.css";

import "../src/components/Button/styles.css";
import "../src/components/GrowButton/styles.css";
import "../src/components/PowerSwitch/styles.css";
import "../src/components/SendButton/styles.css";
import "../src/components/TextInput/styles.css";
import "../src/components/DataGrid/styles.css";
import "../src/components/Paginator/styles.css";
import "../src/components/Modal/styles.css";
import "../src/components/ThemeSwitcher/styles.css";
import ThemeSwitcher from "../src/components/ThemeSwitcher";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    ( Story ) => (
      <>
        <div className={'storybook-top-bar'}>
          <ThemeSwitcher /><div>&nbsp;ThemeSwitcher</div>
        </div>
        <div>
          <Story />
        </div>
      </>
    ),
  ],
};

export default preview;