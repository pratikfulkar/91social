import React from 'react'

import { Container,Form,Button,Card,Alert } from 'react-bootstrap'


 const Login = () => {
   



    return (
        <Container className="d-flex align-items-center justify-content-center " style={{minHeight:"100vh"}}>
        <div className="w-100" style={{maxWidth:"400px"}}>
        <Card>
            <Card.Body>
               
                <Form >
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required />

                    </Form.Group>
                    <Form.Group id="passward">
                        <Form.Label>Passward</Form.Label>
                        <Form.Control type="Passward"  required />

                    </Form.Group>
                    <Form.Group id="passward-confirm">
                        <Form.Label>Passward Conformation</Form.Label>
                        <Form.Control type="passward" required />

                    </Form.Group>
                    <Button className="w-100" type="submit">Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2 ">
            Already have an account ? Log In
        </div>

        </div>
        </Container>
    )
}

export default Login