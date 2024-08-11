import * as yup from 'yup'

const loginPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const loginSchema =  yup.object().shape({
    username: yup.string().min(4, "Should have at least 4 characters").required("Username is required"),
    password: yup.string().matches(loginPasswordRegex, "Must contain 8 characters, one Uppercase, one lowercase, one number and one special case character").required("Password is required")
})



const registerPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const registerEmailRegex = /([a-zA-Z0-9]+@[a-z]+[a-z]+\.[a-z]{2,3})/;



const registerSchema = (t) => yup.object().shape({
    fullname: yup.string().min(4, "Should have at least 4 characters").required("Full name is required"),
    username: yup.string().min(4, "Should have at least 4 characters").required("Username is required"),
    email: yup.string().matches(registerEmailRegex, "Please enter a valid email address").required("Email address is required"),
    password: yup.string().matches(registerPasswordRegex, "Must contain 8 characters, one Uppercase, one lowercase, one number and one special case character").required("Password is required")
});




export { loginSchema, registerSchema }