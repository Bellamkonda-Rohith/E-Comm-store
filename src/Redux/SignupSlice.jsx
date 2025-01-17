import { createSlice } from "@reduxjs/toolkit";

export const SignupSlice = createSlice({
    name: "Signup",
    initialState: {
        name: "Rohith",
        email: "rohith123@gmail.com",
        password: "12327643872",
        avatar: "https://picsum.photos/800"
    },
    reducers: {
        setSignup(state, action) {
    const { name, email, password } = action.payload;
            state.name = name;
            state.email = email;
            state.password = password;
        }
    }
})
export const { setSignup } = SignupSlice.actions;
export default SignupSlice.reducer;