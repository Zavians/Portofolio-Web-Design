import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import Upper from './component/layout/upper.jsx';
import Lower from './component/layout/lower.jsx';
import Main from './component/main/main.jsx';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Upper />
        <Routes>
         <Route path='/' element={<Main/>}/>
        </Routes>
        <Lower />
      </div>
    </BrowserRouter>
  );
}


export default App;
