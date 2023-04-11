import Contact from "./components/Contact";
import Main from "./components/Main";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Sidenav from "./components/Sidenav";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Profile />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
