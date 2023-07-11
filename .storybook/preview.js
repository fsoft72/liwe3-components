import "../src/components/ThemeSwitcher/global.css";
import "../src/components/ThemeSwitcher/variables.css";

import "../src/components/Button/styles.css";
import "../src/components/GrowButton/styles.css";
import "../src/components/PowerSwitch/styles.css";
import "../src/components/SendButton/styles.css";
import "../src/components/TextInput/styles.css";
import "../src/components/DataGrid/styles.css";
import "../src/components/Paginator/styles.css";
import "../src/components/Modal/styles.css";

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
};

export default preview;
