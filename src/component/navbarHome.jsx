import React from 'react'
import {
    Image,
    Navbar,
    Button
} from 'react-bootstrap'
// import { Link } from 'react-router-dom'

class NavHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Navbar fixed="top" style={{display:'flex', justifyContent: 'space-between',  backgroundColor: '#FFC107', paddingBottom:'1vh' }}>
                <div>
                        <Image style={{ height: '8vh', width: '20vw', marginLeft: '5vw', marginTop: '4vh', marginBottom: '20vh', }} src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/logo.png"}></Image>
                </div>
             <div style={{ display: 'flex', margin: '1vw', fontSize: '10px', justifyContent: 'space-between'}}>
                    <Button href="/page3" target="_blank" style={{ fontSize: '13px', marginRight: '1vw', borderRadius: '30px', height: '6vh', backgroundColor: 'white' }} variant="outline-warning">Cara menggunakan Nova Frelancer?</Button>
                    <Button style={{ fontSize: '13px', marginRight: '1vw', borderRadius: '30px', height: '6vh', backgroundColor: 'white' }} variant="outline-warning">Daftar sebagai Frelancer</Button>
                    <Button href="/page1" style={{ fontSize: '13px', marginRight: '1vw', borderRadius: '25px', height: '6vh', backgroundColor: 'white' }} variant="outline-warning">Masuk</Button>
                    <Button style={{ fontSize: '13px', marginRight: '1vw', borderRadius: '25px', height: '6vh', backgroundColor: 'white' }} variant="outline-warning">Diskon</Button>
                </div>
            </Navbar>
        )
    }
}

export default NavHome;