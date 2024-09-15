import './App.css';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import Star from './pages/Shapes/Star';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {

  
  return (
    
    <div className="App">

    
      <BrowserRouter>
      <Link to="/createpost">Create a Post</Link>
      <Link to="/home">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link>
        <Routes>
          <Route path='/home' exact Component={Home}/>
          <Route path="/createpost" element={<CreatePost/>}/>
          <Route path="/post/:id" element={<Post/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration"element={<Registration/>}/>

        </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
