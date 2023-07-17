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
import ThemeContext from "../src/components/ThemeSwitcher/ThemeContext";
import ThemeSwitcher from "../src/components/ThemeSwitcher";

/** @type { import('@storybook/react').Preview } */
type WrapperProps = {
  children: ReactNode;
}
const Wrapper = ({ children }: WrapperProps) => {
  const {theme} = React.useContext(ThemeContext);
  const [themeState, setThemeState] = React.useState(theme);
  return (
  <>
    <div className={`storybook-wrapper ${themeState}`}>
      <div style={{minHeight:50}}>
        <ThemeSwitcher setTheme={setThemeState}/>
      </div>
      <ThemeContext.Provider value={{theme:themeState}}>
          {children}
      </ThemeContext.Provider>
    </div>
  </>
  );
}
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
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
};

export default preview;
