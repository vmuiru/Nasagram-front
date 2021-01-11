import { useState } from 'react';
import { login } from '../../services/UserService';

function Login(props) {
    const [formState, setFormState] = useState(getInitialFormState());
    function getInitialFormState() {
        return {
            email: "",
            password: "",
        }
    }
    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }
    async function handleSubmit(event) {
        try {
            event.preventDefault();
            await login(formState);
            setFormState(getInitialFormState());
            // TODO: comment out to see that user doesn't get added to state without
            props.handleSignupOrLogin();
            props.history.push('/dashboard');
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <div className="Page">
            <form onSubmit={handleSubmit}>
                <input 
                value={formState.email} 
                onChange={handleChange} 
                name="email" 
                type="email" 
                />
                <input 
                value={formState.password} 
                onChange={handleChange} 
                name="password" 
                type="password" 
                />
                <button>Login</button>
            </form>
        </div>
    );
}
export default Login;