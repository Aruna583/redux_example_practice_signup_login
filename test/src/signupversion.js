import { useState } from "react";
import { useDispatch } from 'react-redux'
import { signUp} from "./features/userSlice";
import store from './app/store'

const SignupNewForm = () => {

    const [inputValues, setInputValues] = useState({
        firstname: '',
        lastname: '',
        password: '',
        confirmPassword:'',
        email: '',
        date: '',
        checked: false,
    })



    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        setInputValues({ ...inputValues, [e.target.name]: e.target.value })
    }

    const onChangeCheckBox = () => {
        setInputValues({ ...inputValues, checked: !inputValues.checked })
    }

    const onSubmitForm = (e) => {
        e.preventDefault()

        const dbCheck = JSON.parse(localStorage.getItem("user"));
        const userCount = (dbCheck === null) ? 1 : (dbCheck.length) + 1;

        dispatch(signUp({
            firstname: inputValues.firstname,
            lastname: inputValues.lastname,
            password: inputValues.password,
            confirmPassword:inputValues.confirmPassword,
            email: inputValues.email,
            date: inputValues.date,
            id: userCount,
        }))

        const stateData = store.getState();
        const userDetails = stateData.user.details;

        const arr = []

        if (dbCheck === null || dbCheck.every((ele) => ele.email !== inputValues.email)) {
            arr.push(userDetails)
            localStorage.setItem("user", JSON.stringify(arr));

        } else {
            alert("user already have account")
            return
        }
    }



    return (
        <div className="h-screen bg-blue-50 flex flex-row justify-center items-center">

            <div className="border bg-gray-50 rounded w-90 border-3xl box-content ">
                <h1 className="text-current text-opacity-10 mt-4 text-center m-2 font-sans text-xl font-bold">SignUp Form</h1>
                <form onSubmit={onSubmitForm}>
                    <div className="w-11/12 pl-6">
                        <div className="flex flex-row">
                            <div className="px-2 py-2 flex flex-col m-4">
                                <label className="text-xl font-mono">First Name</label>
                                <input type="text" name="firstname" className="w-full border border-3 rounded border-gray-400 py-2 px-3 focus:outline-none" placeholder="FirstName" value={inputValues.firstname} onChange={onChangeHandler} required />
                            </div>
                            <div className="px-2 py-2 flex flex-col m-4">
                                <label className="text-xl font-mono">Last Name</label>
                                <input type="text" name="lastname" className="w-full border border-3 rounded border-gray-400 py-2 px-3 focus:outline-none" placeholder="LastName" value={inputValues.lastname} onChange={onChangeHandler} required />
                            </div>
                        </div>
                        <div className="px-2 py-2 flex flex-col m-4">
                            <label className="text-xl font-mono">Password</label>
                            <input type="password" name="password"  pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g" className="w-full border border-3 rounded border-gray-400 py-2 px-3 focus:outline-none" placeholder="Password" value={inputValues.password} onChange={onChangeHandler} required />
                        </div>
                        <div className="px-2 py-2 flex flex-col m-4">
                            <label className="text-xl font-mono">ConfirmPassword</label>
                            <input type="password" name="confirmPassword" pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g" className="w-full border border-3 rounded border-gray-400 py-2 px-3 focus:outline-none" placeholder="ConfirmPassword" value={inputValues.confirmPassword} onChange={onChangeHandler} required />
                        </div>
                        <div className="px-2 py-2 flex flex-col m-4">
                            <label className="text-xl font-mono">Email</label>
                            <input type="email" name="email" className="w-full border border-3 rounded border-gray-400 py-2 px-3 focus:outline-none" placeholder="Email" value={inputValues.email} onChange={onChangeHandler} required />
                        </div>
                        <div className="px-2 py-2 flex flex-col m-4">
                            <label className="text-xl font-mono">Date</label>
                            <input type="date" name="date" className="w-full border border-3 rounded border-gray-400 py-2 px-3 focus:outline-none" value={inputValues.date} onChange={onChangeHandler} />
                        </div>
                        <div className="px-2 py-2 m-4">

                            <input type="checkbox" className="px-3 pr-2 mr-2 border border-3 rounded border-gray-400 focus:outline-none" value={inputValues.checked} onChange={onChangeCheckBox} />
                            <label className="text-xl font-mono">I Agree To The Terms & Conditions</label>
                        </div>
                        <button className="bg-blue-500 my-2 py-2 pb-4 hover:bg-blue-400 text-white font-bold py-2 px-4 mx-4 rounded">Submit</button>
                    </div>
                </form>
            </div>


        </div>
    )

}

export default SignupNewForm