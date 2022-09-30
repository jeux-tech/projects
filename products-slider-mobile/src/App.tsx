import Layout from "components/layout/Layout";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import theme from "theme";
import GlobalStyle from "theme/global.style";
import Categories from "views/categories/Categories";
import Products from "views/products/Products";

const FramerRouter = ({ children }: any) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          {children}
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <BrowserRouter>
        <FramerRouter>
          <Route index element={<Categories />} />
          <Route path=":category" element={<Products />} />
        </FramerRouter>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
