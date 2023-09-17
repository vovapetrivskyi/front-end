//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './Main/Main';
import AddEditItem from './AddEdit/AddEditItem';


function App() {
  return (
    // <div>
    //   <Header></Header>
    //   <Main></Main>
    //   <Footer></Footer>
    // </div>
    <div className="App">
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="AddEdit" element={<AddEditItem />} />
    </Routes>
  </div>
  );
}

export default App;
