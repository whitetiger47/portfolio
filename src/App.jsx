import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Probackground from "./components/probackground/Probackground"
import Education from "./components/education/Education"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
      <Intro/>
      <Probackground/>
      <Education/>
      <Projects/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
