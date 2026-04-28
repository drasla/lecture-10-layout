import { RouterProvider } from "react-router";
import GlobalStyle from "./styles/GlobalStyle.ts";
import { AppRouter } from "./router/AppRouter.tsx";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./styles/theme.ts";

function App() {
    return (
        <ThemeProvider theme={LightTheme}>
            <GlobalStyle />
            <RouterProvider router={AppRouter()} />
        </ThemeProvider>
    );
}

export default App;
