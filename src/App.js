import './App.css';
import { assignmentData }  from "./data/switch-assignment"

import InlineButton from './components/InlineButton/InlineButton';


function App() {

  return (
    <div className="App">
      <h1>The Inspiration Machine ✨</h1>
      <div className="inspiration-output">
          <span>{assignmentData.assignment[0]}</span>
          <InlineButton 
            color="#FF006E"
            input="user"
          />
          <span>{assignmentData.assignment[3]}</span>
          <InlineButton 
            color="#3A86FF" 
            input="purpose"
          />
          <InlineButton 
            color="#FFBE0B" 
            input="constraint"
          />
          <InlineButton 
            color="#8338EC" 
            input="context"
          />
      </div>
      <footer>© 2022 <a href="https://frederik-ueberschaer.de" target="blank">Frederik Ueberschär</a> & <a href="https://studiolab.ide.tudelft.nl/studiolab/about/" target="blank">StudioLab</a> </footer>
    </div>
  );
}

export default App;
