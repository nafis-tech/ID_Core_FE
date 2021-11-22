import React from 'react'
import {
    Card,
    Button,
    Image
} from 'react-bootstrap';
import Axios from 'axios';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom'

class Page3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            page: 1,
            prodPerPage: 20,
            maxPage: 0
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:2000/name')
            .then(res => {
                this.setState({ images: res.data, maxPage: Math.ceil(res.data.length / this.state.prodPerPage) })
                console.log(this.state.images)
            })
    }

    onNextPage = () => {
        this.setState({ page: this.state.page + 1 })
    }

    onPrevPage = () => {
        this.setState({ page: this.state.page - 1 })
    }

    showProduct = () => {
        let beginningIndex = (this.state.page - 1) * this.state.prodPerPage
        let currentProduct = this.state.images.slice(beginningIndex, beginningIndex + this.state.prodPerPage)
        console.log(currentProduct)
        return (
            currentProduct.map((item) => {
                return (
                    <Card.Img style={{
                        margin: '10px', width: '13vw', height: '43vh',
                        border: '1px solid #D3E4CD', borderRadius: '12px',
                    }}
                        src={item} />
                )
            })
        )

    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Image src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/navbar.png"}></Image>
                <Image style={{ marginLeft: '23vw', width: '60vw', marginBottom: '0', marginTop: '2vh' }} src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/judul_jasa_web_design.png"}></Image>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '20%' }}>
                        <h4 style={{ marginLeft: '1vw' }}>Filter</h4>
                        <Image style={{ width: '18vw', marginLeft: '3px' }} src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/pnggir1.png"}></Image>
                        <Image style={{ width: '17.8vw', }} src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/pnggir2.png"}></Image>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '80%', margin: '1vw' }}>
                        <div>
                            <Image src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/banner.png"}
                                style={{ width: '75vw', height: '50vh', border: '1px solid yellow', borderRadius: '13px', padding: '1vw', marginBottom: '5vh' }}></Image>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1vw' }}>
                            <h6>Pekerjaan yang ditemukan {this.state.images.length} item</h6>
                            <div style={{ display: 'flex' }}>
                                <Button onClick={this.onPrevPage}><i className="far fa-chevron-left"></i></Button>
                                <p style={{ margin: '1vw' }} >Halaman {this.state.page} dari {this.state.maxPage}</p>
                                <Button onClick={this.onNextPage}><i className="far fa-chevron-right"></i></Button>
                            </div>
                        </div>
                        <div style={styles.divCard}>
                            <div >
                                {this.showProduct()}
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
                        <Button href="/" style={styles.btn} variant="warning">Jasa Lainnya</Button>
                    </div>

                </div>
                <div style={{ margin: '2vh 10vw', marginTop: '10vh' }}>
                    <h5 style={{ color: '#FFD523', marginLeft: '8px' }}>Jasa Web Design/ Desain Website Profesional</h5>
                    <Image src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/jasa_web_design.png"}
                        style={{ width: '80vw', height: '40vh' }}></Image>
                </div>
                <div style={{ margin: '2vh 10vw' }}>
                    <h5 style={{ color: '#FFD523', marginLeft: '8px' }}>Keuntungan menggunakan Jasa Desain Website dan Desain Aplikasi Mobile Profesional diNova Freelancer</h5>
                    <Image src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/keuntungan_menggunakan_jada.png"}
                        style={{ width: '83vw', height: '75vh' }}></Image>
                </div>
                <div style={{ margin: '2vh 10vw', marginBottom: '10vh' }}>
                    <h5 id="caramenggunakan" style={{ color: '#FFD523', marginLeft: '8px' }}>Cara Menggunakan Nova Freelancer</h5>
                    <Image src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/cara_menggunakan_novafreelancer.png"}
                        style={{ width: '80vw', height: '33vh' }}></Image>

                </div>
                <div>
                    <h3>Video</h3>
                    <div style={{margin : '5vh 15vw'}}>
                        <ReactPlayer
                            className='react-player'
                            url='https://youtu.be/e7okSSPj_KE'
                            width='60vw'
                            height='70vh'
                        />
                    </div>

                </div>
                <footer style={{ backgroundColor: '#FFC107', height: '33vh' }} ></footer>
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
        paddingLeft: '2vw',
        padding: '2vh',
        justifyContent: 'center',
        // boxShadow: '0 0px 4px 0 rgba(0, 0, 0, 0.2), 0 0px 10px 0 rgba(0, 0, 0, 0.19)'
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    imageP: {
        width: '50vw',
        height: '50vh'
    }
}

export default Page3;