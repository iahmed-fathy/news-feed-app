import { Container } from "@mui/material";
import NewsFeed from "./components/NewsFeed";
import NewsHeader from "./components/NewsHeader";
import AppContextProvider, { AppContext } from "./AppContext";
import FooterContainer from "./components/FooterContainer";

function App() {
  return (
    <AppContextProvider>
      <Container>
        <NewsHeader />
        <NewsFeed />
        <FooterContainer />
      </Container>
    </AppContextProvider>
  );
}

export default App;
