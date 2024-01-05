import { createSlice } from "@reduxjs/toolkit";
import { AgentRegisterState } from "./agent-register-state";

export const initialState: AgentRegisterState = {
    businessName: { value: '', error: '' },
    businessNature: { value: '', error: '' },
    firstName: { value: '', error: '' },
    lastName: { value: '', error: '' },
    email: { value: '', error: '' },
    phoneNumber: { value: '', error: '' },
    password: { value: '', error: '' },
    confirmPassword: { value: '', error: '' },
    valid: false,
    status: "waiting",
}
export const agentRegisterSlice = createSlice({
    name: "agentRegister",
    initialState,
    reducers: {

    }
})

export const {

} = agentRegisterSlice.actions
export default agentRegisterSlice.reducer