import { useCallback, useState } from "react";
import { AppContainer, MainSection } from "./components/AppContainer/app.style";
import { ThemeProvider } from "styled-components";
import { themes } from "./themes";
import { Button } from "./components/Button/button.style";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const getOppositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  );

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <AppContainer>
        <MainSection>
          <h1>You are in {currentTheme} mode</h1>
          <Button onClick={() => setCurrentTheme(getOppositeTheme())}>
            switch to {getOppositeTheme()} mode
          </Button>
        </MainSection>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
