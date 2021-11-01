import React from 'react'
import {
    FormControl,
    InputGroup,
    Button,
    Image,
    Card,
    CarouselItem,
    Carousel
} from 'react-bootstrap'
import Axios from 'axios';
import { Link } from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []

        }
    }

    componentDidMount() {
        Axios.get('http://localhost:2000/carousol')
            .then(res => {
                this.setState({ images: res.data })
                console.log(this.state.images)
            })
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={styles.div1}>
                    <div style={styles.div1Kiri}>
                        <Image style={{ height: '8vh', width: '20vw', marginLeft: '5vw', marginTop: '2vh', marginBottom: '20vh' }} src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/logo.png"}></Image>
                        <Image style={{ marginLeft: '5vw', height: '30vh', width: '40vw' }} src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/we_make_your_job.png"}></Image>
                        <Image style={{ marginLeft: '5vw', height: '30vh', width: '40vw' }} src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/isi_we_make.png"}></Image>
                        <div style={{ margin: '3vw 0 5vh 6vw' }}>
                            <Button href="#temukan" variant="warning" >Temukan Freelance</Button>
                            <Button style={{ marginLeft: '3vw' }} variant="outline-dark">Buat job</Button>
                        </div>
                    </div>
                    <div style={styles.div1Kanan}>
                        <div style={{ display: 'flex', margin: '1vw', fontSize: '10px', justifyContent: 'space-between' }}>
                            <Button href="/page3" target="_blank" style={{ fontSize: '13px', marginRight: '1vw', borderRadius: '30px', height: '6vh', backgroundColor: 'white' }} variant="outline-warning">Cara menggunakan Nova Frelancer?</Button>
                            <Button style={{ fontSize: '13px', marginRight: '1vw', borderRadius: '30px', height: '6vh', backgroundColor: 'white' }} variant="outline-warning">Daftar sebagai Frelancer</Button>
                            <Button href="/page1" style={{ fontSize: '13px', marginRight: '1vw', borderRadius: '25px', height: '6vh', backgroundColor: 'white' }} variant="outline-warning">Masuk</Button>
                            <Button style={{ fontSize: '13px', marginRight: '1vw', borderRadius: '25px', height: '6vh', backgroundColor: 'white' }} variant="outline-warning">Diskon</Button>
                        </div>
                        <Image src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/pictureNew.png"}></Image>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex' }}>
                        <Image id="temukan" style={{ margin: '0 5vw', width: '80vw' }} src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/temukan_searching.png"}></Image>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #FFC93C', margin: '2vh 5vw', borderRadius: '13px', boxShadow: '0 2px 3px 0 #FFC93C, 0 2px 10px 0 #FFC93C', }}>
                        <Image style={{ borderRadius: '13px', }} src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/banner.png"}></Image>
                        <Link style={{ color: '#03256C', fontSize: '13px', marginLeft: '75vw', marginBottom: '3vh', color: '#FFC107', fontWeight: 'bold' }} to="/"> Selanjutnya <i class="fas fa-long-arrow-alt-right"></i> </Link>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex' }}>
                        <Image style={{ margin: '2vh 0 3vh 5vw', width: '90vw' }} src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/kenapa_memilih_nova%20(2).png"}></Image>
                    </div>
                    <div style={{ display: 'flex', backgroundColor: 'white' }}>
                        <Image style={{ margin: '2vh 0 3vh 5vw', width: '90vw' }} src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/freelance.png"}></Image>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', }}>
                    <div style={{ display: 'flex', flexBasis: '65%', flexDirection: 'column', marginBottom: '10vh' }}>
                        <Image style={{ width: '55vw', height: '15vh', marginLeft: '10vw', }} src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/freelancer_populer_dalamBanner.png"}></Image>
                        <Carousel fade>
                            {this.state.images.map((item) => {
                                return (
                                    <Carousel.Item style={{
                                        width: '80vw', height: '55vh', marginLeft: '10vw'
                                    }}
                                    >
                                        <img
                                            className="d-block w-100"
                                            src={item}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    </div>
                    <div style={{ display: 'flex', flexBasis: '65%', flexDirection: 'column', marginBottom: '10vh' }}>
                        <Image style={{ width: '70vw', height: '14vh', marginLeft: '11vw', }} src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/freelancer_populer_web_pemrograman.png"}></Image>
                        <Carousel fade>
                            {this.state.images.map((item) => {
                                return (
                                    <Carousel.Item style={{
                                        width: '80vw', height: '55vh', marginLeft: '10vw'
                                    }}
                                    >
                                        <img
                                            className="d-block w-100"
                                            src={item}
                                            alt="First slide "
                                        />
                                    </Carousel.Item>
                                )
                            })}
                            </Carousel>
                    </div>
                </div>
                <div>
                    <Image style={{ width: '90vw', height: '85vh', marginLeft: '5vw'}}
                        src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/ulasan_pelanggan_new.png"}></Image>
                </div>
                <div style={{ background:'#F0F0F0',}}>
                    <Image style={{ width: '80vw', height: '45vh', marginLeft:'10vw'}}
                        src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/logo_header.png"}></Image>
                </div>
                <div style={{background:'white', height:'20vh'}}></div>
                <footer style={{ display: 'flex', backgroundColor: '#FFC107', height:'40vh' }}></footer>
            </div >
        )
    }
}

const styles = {
    div1: {
        // backgroundColor: '#FFC107',
        display: 'flex',
        flexBasis: '50%',
        marginBottom: '10vh'

    },
    div1Kanan: {
        // backgroundImage: `url("https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/pictureNew.png")`,
        backgroundColor: '#FFC107',
        display: 'flex',
        flexBasis: '50%',
        flexDirection: 'column',
        width: '25vw',
        heihgt: '30vh'
    },
    div1Kiri: {
        backgroundColor: 'white',
        display: 'flex',
        flexBasis: '50%',
        flexDirection: 'column',

    }
}

export default Home;