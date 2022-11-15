import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import SignupForm from './signup'
import Login from './login'

import Logout from './logout'
import SignupNewForm from './signupversion'
import Example from './useEffectExample'

import './App.css';

function App (){
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/signup" element={<SignupNewForm/>}/>
            {/* <Route exact path="/signup" element={<SignupForm/>}/> */}
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/dashboard" element={<Logout/>}/>
            <Route exact path='/example' element={<Example/>}/>
           
        </Routes>        
        </BrowserRouter>
    )
}

export default App;
