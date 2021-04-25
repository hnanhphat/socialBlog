import api from "../../apiService";

const getUser = () => async (dispatch) => {
    try {
      dispatch({ type: "GETUSER_REQUEST_START" });
      const data = await api.get("/users/me");
      dispatch({ type: "GETUSER_REQUEST_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "GETUSER_REQUEST_FAIL", payload: error.message });
    }
  };

const editUser = ({name,avatarUrl}) => async (dispatch) =>{
    try {
        dispatch({ type: "EDITUSER_REQUEST_START", payload: null });
        const data = await api.put("/users",{name,avatarUrl})
        console.log(data)
    } catch (error) {
        dispatch({ type: "EDITUSER_REQUEST_FAIL", payload: error.message });
    }
}

export const UserActions={getUser,editUser}