import "./App.css";
import { Container } from "@mui/system";
import Header from "./Components/Header";
import Featured from "./Components/Featured";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { Grid } from "@mui/material";
import { featuredPosts, sidebar } from "./data/Data";
import PostCard from "./Components/PostCard";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <Featured />

        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </Grid>
        {
          <Grid container spacing={5} style={{ marginTop: 3 }}>
            <Main title="From the firehose" />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        }
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
