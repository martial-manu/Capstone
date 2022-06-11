import Home from './routes/home/home.component'
import { Routes , Route } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component"
import Authentication from './routes/authentication/authentication.component';

const Shop = ()=>{
    return <h1>Hi i am the shop page</h1>     
}


const App = ()=> {
  return (<Routes>
    <Route path = '/' element = {<Navigation></Navigation>}>
          <Route index={true} element= {<Home></Home>}></Route>
          <Route path = 'shop' element = {<Shop></Shop>}></Route>
          <Route path = 'auth' element = {<Authentication></Authentication>}></Route>
          </Route>
    </Routes>
 
  )
}


export default App;
