 const login = (user) => async (dispatch)=>{

    try {
        dispatch({type:"loginRequest"});

   
 dispatch({type:"loginSuccess",payload:user});

    } catch (error) {
        
        dispatch({type:"loginFail",payload:error.response.data.message});
    }

}
export default login;