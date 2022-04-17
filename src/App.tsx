import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
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
import "./i18n";
import { LoginPage } from "./pages/loginPage";
import { SignupPage } from "./pages/signupPage";
import { ProfilePage } from "./pages/profilePage";

function App() {
  const { theme } = useSelector((state: RootState) => state.theme);
  const isLogged = useSelector((state: RootState) => state.user.isLogged);

  const ProtectedRoute = ({ children }: any) => {
    if (!isLogged) {
      return <Navigate to="/login" replace />;
    }

    return children;
  };

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute>
                <Movies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <ProtectedRoute>
                <MovieDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movie/:id/reviews"
            element={
              <ProtectedRoute>
                <MovieReviewsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movie/:id/credits"
            element={
              <ProtectedRoute>
                <MovieCreditsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/shows"
            element={
              <ProtectedRoute>
                <Shows />
              </ProtectedRoute>
            }
          />
          <Route
            path="/show/:id"
            element={
              <ProtectedRoute>
                <ShowDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/show/:id/season/:number"
            element={
              <ProtectedRoute>
                <SeasonDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/show/:id/season/:number/episode/:episodeNumber"
            element={
              <ProtectedRoute>
                <EpisodeDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/show/:id/reviews"
            element={
              <ProtectedRoute>
                <ShowReviewsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/show/:id/credits"
            element={
              <ProtectedRoute>
                <ShowCreditsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/actor/:id"
            element={
              <ProtectedRoute>
                <ActorPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/company/:id"
            element={
              <ProtectedRoute>
                <CompanyPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/network/:id"
            element={
              <ProtectedRoute>
                <NetworkPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <FullSearchPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
}

export default App;
