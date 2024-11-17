import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiURL, fetchHeaders, fetchHeadersMultipart } from "../../constants";

export const fetchUserList = createAsyncThunk("fetchUserList",async ({getState})=>{
    const headers = fetchHeaders(getState);
    const response = await fetch(`${apiURL}/user`,{
        headers,
        method:"GET",
      }).then(res=>res.json());
      return response;
});

export const editUser = createAsyncThunk("editUser",async ({formdata,isMultipart=false},{getState})=>{
    const headers = isMultipart?fetchHeadersMultipart(getState):fetchHeaders(getState);
    const response = await fetch(`${apiURL}/user`,{
        headers,
        method:"PUT",
        body:formdata
      }).then(res=>res.json());
      return response;
});



export const changeUserType = createAsyncThunk("changeUserType",async (body,{getState})=>{
    const headers = fetchHeaders(getState);
    const response = await fetch(`${apiURL}/user/type`,{
        headers,
        method:"POST",
        body:JSON.stringify(body)
      }).then(res=>res.json());
      return response;
});



export const deleteUser = createAsyncThunk("deleteUser",async (body,{getState})=>{
    const headers = fetchHeaders(getState);
    const response = await fetch(`${apiURL}/user`,{
        headers,
        method:"DELETE",
        body:JSON.stringify(body)
      }).then(res=>res.json());
      return response;
});




const userSlice = createSlice({
    name:"user",
    initialState:{
        userlist:[]
    },
    extraReducers:builder=>{
        builder
            .addCase(fetchUserList.fulfilled,(state,action)=>{
                if(action.payload.status===200){
                state.userlist=action.payload.data;
                }
               
            })
    }
});


export default userSlice.reducer;
