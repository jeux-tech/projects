import Layout from "components/layout/Layout";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import theme from "theme";
import GlobalStyle from "theme/global.style";
import MyNotes from "views/my-notes/MyNotes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence>
        <Normalize />
        <GlobalStyle />
        <Layout children={(view) => <MyNotes view={view} />} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
