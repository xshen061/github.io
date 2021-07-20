import React from 'react'
import LoginForm from '../LoginForm'
import Paper from "@material-ui/core/Paper";
export default function Login() {
    return (
        <div style={{display:"flex", justifyContent:'center', margin:'4rem 0'}}>
            <Paper style={{
                padding: "2rem",
                maxWidth: "18rem"
            }}>
                
            <LoginForm></LoginForm>

            </Paper>
        </div>
    )
}
