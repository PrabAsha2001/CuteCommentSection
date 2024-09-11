import './App.css';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {

  
  return (
    
    <div className="App">

    
      <BrowserRouter>
      <Link to="createpost">Create a Post</Link>
      <Link to="home">Home</Link>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path="/createpost" element={<CreatePost/>}/>
          <Route path="/post/:id" element={<Post/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
