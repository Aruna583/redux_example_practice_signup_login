import {createSlice} from '@reduxjs/toolkit'
// const initialState ={
//     users:[]
// }

/*export const signUpUser = createAsyncThunk('signupUser',async(body)=>{
    const res = await fetch("ddddd",{
        method:"post",
        headers:{
            'Content-Type':"aplication/json",
        },
        body:JSON.stringify(body)
    })
    return await res.json();
})

*/

export const userSlice = createSlice({
    
    name:'user',
    initialState:{
        details:null
    },
    
    reducers:{
        signUp:(state,actions)=>{
            state.details=actions.payload;
            
        },
        login:(state,actions)=>{
            state.details=actions.payload
        }
    },

   /* extraReducers:{
        [signUpUser.pending]:(state,action)=>{
            state.loading=true
        },
        [signUpUser.fulfilled]:(state,{payload:{error,msg}})=>{
            state.loading=false;
            if(error){
                state.error=error
            }else{
                state.msg=msg
            }

        },
        [signUpUser.rejected]:(state,action)=>{
            state.loading=true
        }

    }*/

})

export const {signUp,login}=userSlice.actions

export default userSlice.reducer;



