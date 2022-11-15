import {Component} from 'react'


import './signup.css'

class SignupForm extends Component{

    state={
        firstNameInput:'',
        lastNameInput:'',
        passwordInput:'',
        emailInput:'',
        showFirstNameError:false,
        showLastNameError:false,
        showEmailError:false,
        showPasswordError:false,
        isFormSubmitted:false,
        checkBoxInput:false,
    }

    validateFirstName=()=>{
        const {firstNameInput}=this.state
        
        return firstNameInput !== ''
        
    }

    validateLastName=()=>{
        const {lastNameInput}=this.state
        return lastNameInput !== ''
    }

    validateEmail=()=>{
        const{emailInput}=this.state
        return emailInput !== ''
    }

    validatePassword=()=>{
        const{passwordInput}=this.state
        return passwordInput !== ''
    }
    onBlurFirstName =()=>{
    const isValidFirstName = this.validateFirstName()
    this.setState({showFirstNameError:!isValidFirstName})
 }
 onChangeFirstName = event=>{
        this.setState({
        firstNameInput: event?.target?.value,
    })
 }



 renderFirstName =()=>{
    const{firstNameInput}=this.state
    return(
        <div className='flex flex-col m-1'>
        <label htmlFor="firstName" className='text-black font-semibold text-lg mt-1'>First Name</label>
        <input type="text" id="firstName" placeholder='FirstName' className='border-2 border-slate-300 border-gray-300' onChange={this.onChangeFirstName} value={firstNameInput} onBlur={this.onBlurFirstName}/>
        </div>
    )

 }




onBlurLastName =()=>{
    const isValidLastName = this.validateLastName()
    this.setState({showLastNameError:!isValidLastName})
}

onChangeLastName = event=>{
    
    this.setState({
        lastNameInput: event?.target?.value,
    })
}

renderLastName =()=>{
    const{lastNameInput}=this.state
    return(
        <div className='flex flex-col'>
        <label htmlFor="lastName" className='text-black font-semibold text-lg mt-1'>Last Name</label>
        <input type="text" id="lastName" placeholder='LastName' className='border-2 border-slate-300 border-gray-300' value={lastNameInput} onChange={this.onChangeLastName} onBlur={this.onBlurLastName}/>
        </div>
    )

}


onBlurEmail =()=>{
    const isValidEmail = this.validateEmail()
    this.setState({showEmailError:!isValidEmail})
}

onChangeEmail = event=>{
       
    this.setState({
        emailInput: event?.target?.value,
    })
}

renderEmail =()=>{
    const{emailInput}=this.state
    return(
        <div className='flex flex-row my-2 mx-2'>
        <label htmlFor="emailId" className='text-black font-semibold text-lg mt-1'>Email</label>
        <input type="text" id="emailId" placeholder='email' className='border-2 border-slate-300 border-gray-300'  value={emailInput} onChange={this.onChangeEmail} onBlur={this.onBlurEmail}/>
        </div>
    )

}

onBlurPassword=()=>{
    const isValidPassword = this.validatePassword()
    this.setState({showPasswordError:!isValidPassword})
}

onChangePassword = event=>{
        this.setState({
        passwordInput: event?.target?.value,
    })
}

renderPassword =()=>{
    const{passwordInput}=this.state
    return(
        <div className='flex flex-row my-2 mx-2 '>
        <label htmlFor="passwordId" className='text-black font-semibold text-lg mt-1'>Password</label>
        <input type="password" id="passwordId" className='border-2 border-slate-300 border-gray-300' placeholder='Password' value={passwordInput} onChange={this.onChangePassword} onBlur={this.onBlurPassword}/>
        </div>
    )

}

renderDate=()=>{
    return(
        <div className='flex flex-row my-2 mx-2 '>
            <label htmlFor="dateId" className='text-black font-semibold text-lg mt-1'>Date</label>
            <input type="date" id="dateId" className="border-2 border-slate-300 border-gray-300"/>
        </div>
    )
}
onChangeCheckbox =()=>{
    const {checkBoxInput}= this.state

    this.setState({checkBoxInput:!checkBoxInput})
}

renderCheckbox=()=>{
    const {checkBoxInput} = this.state
    return(
        <div className='flex flex-row'>
            <input type="checkbox" id="checkboxId" value={checkBoxInput} onChange={this.onChangeCheckbox}/>
            <label htmlFor='checkboxId' className='text-black font-semibold text-lg mt-1'>Agree Terms & Conditions</label>
        </div>
    )
}

onSubmitForm=(event)=>{
    event.preventDefault()
    const isValidFirstName=this.validateFirstName()
    const isValidLastName=this.validateLastName()
    const isValidEmail=this.validateEmail()
    const isValidPassword=this.validatePassword()
    const isValidCheck=this.renderCheckbox()
    if(isValidFirstName && isValidLastName && isValidEmail && isValidPassword && isValidCheck){
        this.setState({isFormSubmitted:true,})
        console.log("Succefully submitted")
        console.log(isValidCheck)
        console.log(isValidEmail)
        console.log(isValidFirstName)
        console.log(isValidLastName)
        console.log(isValidPassword)

        
        
        
    }else{
        this.setState({
            showFirstNameError:!isValidFirstName,
            showLastNameError:!isValidLastName,
            showPasswordError:!isValidPassword,
            showEmailError:!isValidEmail,
            isFormSubmitted:false,
            checkBoxInput:false,
        })
    }
    
}



 renderSignupForm =()=>{
    const{showFirstNameError,showLastNameError,showEmailError,showPasswordError}=this.state
    return(
        <form className='form-container' onSubmit={this.onSubmitForm}>
            <div className='h-500/2 w-500/2 bg-white rounded'>            
            <div className='flex flex-row'>
            {this.renderFirstName()}
            {showFirstNameError && <p className='text-red-600 font-bold'>Required*</p>}
            {this.renderLastName()}
            {showLastNameError && <p className='text-red-600 font-bold'>Required*</p>}
            </div>           
            {this.renderEmail()}
            {showEmailError && <p className='text-red-600 font-bold'>Required*</p>}
            {this.renderPassword()}
            {showPasswordError && <p className='text-red-600 font-bold'>Required*</p>}
            {this.renderDate()}
            {this.renderCheckbox()}
            <div>
                <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mx-4 rounded' type="submit" >Submit</button>
            </div>
            </div>

            </form>
    )
 }
 
 onSuccessSubmit=()=>{
    return (
        console.log("Submitted Succefully")
    )
 }


   render(){
   
      
    return(
       
            <div className='h-screen w-screen box-border bg-pink-300 flex flex-row justify-center'>
            
            
            <div className='rounded flex flex-col justify-center'>
            <h1 className='font-bold text-2xl my-4 text-center'>Signup Form</h1>
            
             {this.renderSignupForm()}
             
            </div>
            </div>
    )
   }

}
export default SignupForm