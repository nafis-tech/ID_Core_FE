import React from 'react'
import {
    Card,
    Button
} from 'react-bootstrap';
import Axios from 'axios';
// import { Link } from 'react-router-dom'

class Page3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:2000/name')
            .then(res => {
                this.setState({ images: res.data })
                console.log(this.state.images)
            })
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h1>Pages3</h1>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '20%' }}>
                        <h4>Filter</h4>
                        <Card>
                            jenis logo
                        </Card>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '80%' }}>
                        <div>
                            banner
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h5>pekerjaan yang ditemukan 77 item</h5>
                            <h4>Halaman 1 dari 7</h4>
                        </div>
                        <div>
                            {this.state.images.map((item) => {
                                return (
                                    <Card.Img style={{width: '10vw', height:'10vh'}} src={item} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div>kategori terkait</div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex' }}>
                        <Button variant="warning">Logo</Button>
                        <Button variant="warning">Desaign Web</Button>
                        <Button variant="warning">infografis</Button>
                        <Button variant="warning">Baner Online</Button>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Button variant="warning">Presentasi</Button>
                        <Button variant="warning">Postofolio Resume</Button>
                        <Button variant="warning">UI /UX Design</Button>
                        <Button variant="warning">Digital Perinting</Button>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Button variant="warning">Label kemasan</Button>
                        <Button variant="warning">Design Kaos & maotif</Button>
                        <Button variant="warning">Setiker Line</Button>
                        <Button variant="warning">Gambar Ilustrasi</Button>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Button variant="warning">Gambar Potret</Button>
                        <Button variant="warning">Desain Karakter</Button>
                        <Button variant="warning">CAD Drawing</Button>
                        <Button variant="warning">Desain</Button>
                    </div>
                    <Button style={{ width: '10vw' }} variant="warning">Jasa Lainnya</Button>
                </div>
                <div>
                    <h5>Jasa Web Design/ Desain Website Profesional</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet repudiandae nulla ipsam animi saepe aliquid quod quasi, explicabo eius sit minima perspiciatis eum asperiores tenetur error quaerat eligendi dolores aut!</p>
                </div>
                <div>
                    <h5>Keuntungan menggunakan Jasa Desain Website dan Desain Aplikasi Mobile Profesional diNova Freelancer</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet repudiandae nulla ipsam animi saepe aliquid quod quasi, explicabo eius sit minima perspiciatis eum asperiores tenetur error quaerat eligendi dolores aut!</p>
                </div>
                <div>
                    <h5>Cara Menggunakan Nova Freelancer</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet repudiandae nulla ipsam animi saepe aliquid quod quasi, explicabo eius sit minima perspiciatis eum asperiores tenetur error quaerat eligendi dolores aut!</p>
                </div>
                <footer style={{ backgroundColor: 'yellow' }} >backgroundColorKUning</footer>
            </div>
        )
    }
}

export default Page3;