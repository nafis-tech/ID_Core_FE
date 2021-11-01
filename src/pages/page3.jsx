import React from 'react'
import {
    Card,
    Button,
    Image
} from 'react-bootstrap';
import Axios from 'axios';
import { Link } from 'react-router-dom'

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
                <Image src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/navbar.png"}></Image>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '35%' }}>
                        <h4>Filter</h4>
                        <Card>
                            jenis logo
                        </Card>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '65%', margin: '3vw' }}>
                        <div>
                            <Image src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/banner.png"}
                                style={{ width: '80vw', height: '50vh', border: '1px solid yellow', borderRadius: '13px', padding: '1vw', marginBottom: '5vh' }}></Image>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h5>Pekerjaan yang ditemukan {this.state.images.length} item</h5>
                            <h5>Halaman 1 dari 7</h5>
                        </div>
                        <div style={styles.divCard}>
                            <div >
                                {this.state.images.map((item) => {
                                    return (
                                        <Card.Img style={{
                                            margin: '1vw', width: '13vw', height: '43vh',
                                            border: '1px solid #D3E4CD', borderRadius: '12px',
                                        }}
                                            src={item} />
                                    )
                                })}
                            </div>
                            <div>
                                1233
                            </div>
                        </div>

                    </div>
                </div>
                <Image src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/kategori_terkait_grafis.png"}
                    style={{ width: '45vw', height: '13vh', justifyContent: 'center', margin: 'auto' }}
                ></Image>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5vw', margin: '1vw', border: '1px solid yellow' }}>
                    <div style={{ display: 'flex', margin: 'auto', textAlign: 'center' }}>
                        <Button style={styles.btn} variant="warning">Logo</Button>
                        <Button style={styles.btn} variant="warning">Desaign Web</Button>
                        <Button style={styles.btn} variant="warning">infografis</Button>
                        <Button style={styles.btn} variant="warning">Baner Online</Button>
                    </div>
                    <div style={{ display: 'flex', margin: 'auto', textAlign: 'center' }}>
                        <Button style={styles.btn} variant="warning">Presentasi</Button>
                        <Button style={styles.btn} variant="warning">Postofolio Resume</Button>
                        <Button style={styles.btn} variant="warning">UI /UX Design</Button>
                        <Button style={styles.btn} variant="warning">Digital Perinting</Button>
                    </div>
                    <div style={{ display: 'flex', margin: 'auto', textAlign: 'center' }}>
                        <Button style={styles.btn} variant="warning">Label kemasan</Button>
                        <Button style={styles.btn} variant="warning">Design Kaos & maotif</Button>
                        <Button style={styles.btn} variant="warning">Setiker Line</Button>
                        <Button style={styles.btn} variant="warning">Gambar Ilustrasi</Button>
                    </div>
                    <div style={{ display: 'flex', margin: 'auto', textAlign: 'center' }}>
                        <Button style={styles.btn} variant="warning">Gambar Potret</Button>
                        <Button style={styles.btn} variant="warning">Desain Karakter</Button>
                        <Button style={styles.btn} variant="warning">CAD Drawing</Button>
                        <Button style={styles.btn} variant="warning">Desain</Button>
                    </div>
                    <div style={{ display: 'flex', margin: 'auto', textAlign: 'center' }}>
                        <Button style={styles.btn} variant="warning">Jasa Lainnya</Button>
                    </div>

                </div>
                <div style={{margin: '2vh 10vw', marginTop:'10vh'}}>
                    <h5 style={{color: '#FFD523', marginLeft:'8px'}}>Jasa Web Design/ Desain Website Profesional</h5>
                    <Image src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/jasa_web_design.png"}
                    style={{width: '80vw', height:'40vh'}}></Image>
                </div>
                <div style={{margin: '2vh 10vw'}}>
                    <h5 style={{color: '#FFD523', marginLeft:'8px'}}>Keuntungan menggunakan Jasa Desain Website dan Desain Aplikasi Mobile Profesional diNova Freelancer</h5>
                    <Image src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/keuntungan_menggunakan_jada.png"} 
                    style={{width: '83vw', height:'75vh'}}></Image>
                </div>
                <div style={{margin: '2vh 10vw', marginBottom:'10vh'}}>
                    <h5 id="caramenggunakan" style={{color: '#FFD523', marginLeft:'8px'}}>Cara Menggunakan Nova Freelancer</h5>
                    <Image src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/cara_menggunakan_novafreelancer.png"}
                    style={{width: '80vw', height:'33vh'}}></Image>
                    
                </div>
                <footer style={{ backgroundColor: '#FFC107',height:'33vh' }} ></footer>
            </div>
        )
    }
}

const styles = {
    btn: {
        margin: '1vw'
    },
    divCard: {
        border: '1px solid #D3E4CD',
        borderRadius: '12px',
        paddingLeft: '10vw',
        padding: '2vh',
        justifyContent: 'center',
        // boxShadow: '0 0px 4px 0 rgba(0, 0, 0, 0.2), 0 0px 10px 0 rgba(0, 0, 0, 0.19)'
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    imageP :{
        width: '50vw',
        height:'50vh'
    }
}

export default Page3;