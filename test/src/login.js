import {useState} from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import {login} from './features/userSlice'

const Login =()=>{
    const [inputValues, setInputValues] = useState({
        
        email:"",
        password:""

    })

    const handleChange =(e)=>{

        setInputValues({...inputValues,[e.target.name]:e.target.value})

    }
    const dispatch=useDispatch();
    const navigate = useNavigate();
   
const onClickRegister = ()=>{
    navigate("/signup")
}

    const loginHangler =(e)=>{
       e.preventDefault()
       dispatch(login({
        
        email:inputValues.email,
        password:inputValues.password
       }))

       const dbData = JSON.parse(localStorage.getItem("user"));
       console.log(dbData)

       if(dbData===null || dbData.every(val=>val.email!==inputValues.email)){
        alert("We cannot find the user? Please try again");
        return;
        }else if(dbData.map(user=>{
            if(user.email===inputValues.email){
                if(user.password!==inputValues.password){
                    alert("Incorrect Password! Please try Again")
                }else{
                    console.log("User Login Success")
                }
                navigate("/dashboard")
            }
            return null;
        })){
            return null;
        }
    }

    return(
        
        <div className="flex justify-center items-center h-screen w-screen bg-blue-300">
            <div className="w-96 px-5 py-5 border-3 roundex-2xl bg-gray-100">
            
            
                <div className="w-11/12 pl-6">
                    <form onSubmit={loginHangler}>
                    <h1 className="text-xl text-current font-bold py-2 text-center">Login Form</h1>
                   
                    <div className="my-2">
                        <label className="text-xl font-mono">Email</label>
                        <input className="border-2 border-slate-300 w-full border-gray-300 rounded shadow-sm focus-outline:none" 
                        required
                         type="text"
                         name="email" 
                         placeholder="Email"
                         value={inputValues.email}
                          onChange={handleChange}/>
                    </div>
                    <div className="my-2">
                        <label className="text-xl font-mono">Password</label>
                        <input className="border-2 border-slate-300 w-full border-gray-300 rounded shadow-sm focus-outline:none" 
                        required
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={inputValues.password}
                         onChange={handleChange}/>
                    </div>
                    <p>Not Registered Yet? <span onClick={onClickRegister} className="text-blue-500">Register Here</span></p>
                    </form>

                </div>
                <button type="button" className="bg-blue-500 my-2 hover:bg-blue-400 text-white font-bold py-2 px-4 mx-4 rounded" onClick={loginHangler}>Login</button>
               
            </div>

        </div>
        
        
    )
}
export default Login