import React from 'react'
import {
    FormControl,
    InputGroup,
    Button,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false,

        }
    }

    render() {
        const { visibility } = this.state
        return (
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '50%' }}>
                    <h4>Welcome back</h4>
                    <h1>Login to your account</h1>
                    <label>Username/Email</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><i className="fas fa-user-circle"></i></InputGroup.Text>
                        <FormControl
                            placeholder="Input Your Username/Email Here"
                            ref="username"
                            style={{ color: '#012EA9' }}

                        />
                    </InputGroup>
                    <label>Password</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1 myInput" onClick={() => this.setState({ visibility: !visibility })}>
                            {visibility ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                        </InputGroup.Text>
                        <FormControl
                            placeholder="Input Your Password Here"
                            type={visibility ? "text" : "password"}
                            ref="password"
                            style={{ color: '#012EA9' }}
                        />
                    </InputGroup>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h6>Remember me</h6>
                        <h6>Forget password?</h6>
                    </div>
                    <Button style={styles.button}>
                        Login Now
                    </Button>
                    <Button style={{backgroundColor:'gray'}}>
                        Or Sign-in with google
                    </Button>
                    <h6>Don't have an account? <Link style={{ color: '#00BCD4', fontWeight: 'bold' }} to="/">Join free today</Link></h6>
                </div>
                <div style={{ display: 'flex', flexBasis: '50%', backgroundColor: 'orange' }}>
                    <h1>Foto</h1>
                </div>
            </div>
        )
    }
}

const styles = {
    button: {
        backgroundColor:'yellow',
        border: 'none'
    },
}

export default Page1;