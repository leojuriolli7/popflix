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
import { MovieReviewsPage } from "./pages/movieReviews";
import { ShowReviewsPage } from "./pages/showReviews";
import { ActorPage } from "./pages/actor";
import { ErrorPage } from "./pages/error";
import { CompanyPage } from "./pages/company";
import { SeasonDetailsPage } from "./pages/seasonDetails";
import { NetworkPage } from "./pages/network";
import { EpisodeDetailsPage } from "./pages/episodeDetails";
import { MovieCreditsPage } from "./pages/movieCredits";
import { ShowCreditsPage } from "./pages/showCredits";
import { FullSearchPage } from "./pages/search";

function App() {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/movie/:id/reviews" element={<MovieReviewsPage />} />
          <Route path="/movie/:id/credits" element={<MovieCreditsPage />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/show/:id" element={<ShowDetailsPage />} />
          <Route
            path="/show/:id/season/:number"
            element={<SeasonDetailsPage />}
          />
          <Route
            path="/show/:id/season/:number/episode/:episodeNumber"
            element={<EpisodeDetailsPage />}
          />
          <Route path="/show/:id/reviews" element={<ShowReviewsPage />} />
          <Route path="/show/:id/credits" element={<ShowCreditsPage />} />
          <Route path="/actor/:id" element={<ActorPage />} />
          <Route path="/company/:id" element={<CompanyPage />} />
          <Route path="/network/:id" element={<NetworkPage />} />
          <Route path="/search" element={<FullSearchPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
}

export default App;
