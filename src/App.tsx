import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { RootState } from "./store/";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { Movies } from "./pages/movies";
import { Shows } from "./pages/shows";
import { useSelector } from "react-redux";
import { MovieDetailsPage } from "./pages/movieDetails";
import { ShowDetailsPage } from "./pages/showDetails";

function App() {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/show/:id" element={<ShowDetailsPage />} />
          <Route path="/shows" element={<Shows />} />
        </Routes>
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
}

export default App;
