import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import Upper from './component/layout/upper.jsx';
import Lower from './component/layout/lower.jsx';
import{ Project } from './component/main/project.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Upper />
        <Routes>
         <Route path='/main' element={<Project/>}/>
        </Routes>
        <Lower />
      </div>
    </BrowserRouter>
  );
}


export default App;
