import { Routes, Route } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component'
import SignIn from './routes/sign-in/sign-in.component';
const App = () => {


  const Shop = () => {
    return <h1>This is Shop</h1>
  }

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='auth' element={<Authentication />} />

      </Route>
    </Routes>
  );
}

export default App;
