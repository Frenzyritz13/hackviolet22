import React, {useState} from 'react';
import {Form,Button} from 'react-bootstrap';

function Login(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if(email && password){
            alert("okay");
        }
        else if(email){
            alert("Enter Password");
        }
        else if(password){
            alert("Enter Email");
        }
        else{
            alert("Enter Password and Email")
        }
    };

    return(
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail" name="email"
                            onChange={e => setEmail(e.target.value)}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword" name="password"
                            onChange={e => setPassword(e.target.value)}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                    <Form.Check type="checkbox" label="Remember password" />
                </Form.Group>
                {' '}
                <Button variant="primary" type="submit" value="Submit">
                    Log in
                </Button>
            </Form>
            <p>Or</p>
            <p>Don't have an account ?</p>
            <Button variant="primary" href="/signup">
                Sign up
            </Button>
        </>
    );
}

export default Login;