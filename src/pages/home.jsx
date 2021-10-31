import React from 'react'
import {
    FormControl,
    InputGroup,
    Button,
    Image,
} from 'react-bootstrap'
// import { Link } from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={styles.div1}>
                    <div style={styles.div1Kiri}>
                        <Image style={{ height: '8vh', width: '20vw', marginLeft: '5vw', marginTop:'2vh', marginBottom:'20vh' }} src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/logo.png"}></Image>
                        <Image style={{ marginLeft: '5vw',height: '30vh', width: '40vw'}} src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/we_make_your_job.png"}></Image>
                        <h4 style={{ margin: '6vh' }}> soluta neque at! Consequuntur, aut facere possimus, similique accusamus ipsum autem praesentium itaque cum ducimus repudiandae fugit. Sapiente praesentium vel doloremque!</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo quod, dicta veniam ab quae dolores adipisci perferendis, maiores officiis quidem perspiciatis eos est ex atque. Ut cupiditate distinctio illum!</p>
                        <div>
                            <button>Temukan Freelance</button>
                            <button>Buat job</button>
                        </div>
                    </div>
                    <div style={styles.div1Kanan}>
                        <div style={{ display: 'flex', margin: '1vw', fontSize: '10px', justifyContent: 'space-between' }}>
                            <Button style={{ fontSize: '13px', marginRight: '1vw', borderRadius: '30px', height: '6vh', backgroundColor: 'white' }} variant="outline-warning">Cara menggunakan Nova Frelancer?</Button>
                            <Button style={{ fontSize: '13px', marginRight: '1vw', borderRadius: '30px', height: '6vh', backgroundColor: 'white' }} variant="outline-warning">Daftar sebagai Frelancer</Button>
                            <Button style={{ fontSize: '13px', marginRight: '1vw', borderRadius: '25px', height: '6vh', backgroundColor: 'white' }} variant="outline-warning">Masuk</Button>
                            <Button style={{ fontSize: '13px', marginRight: '1vw', borderRadius: '25px', height: '6vh', backgroundColor: 'white' }} variant="outline-warning">Diskon</Button>
                        </div>
                        <Image src={"https://raw.githubusercontent.com/nafis-tech/ID_Core_FE/master/src/images/pictureNew.png"}></Image>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex' }}>
                        <h1>Temukan Freelancermu?</h1>
                        <h3>cari pekerjaan - searching</h3>
                    </div>
                    <div style={{ display: 'flex', backgroundColor: 'aquamarine', justifyContent: 'space-between' }}>
                        <h4>icon</h4>
                        <h4>icon</h4>
                        <h4>icon</h4>
                        <h4>icon</h4>
                        <h4>icon</h4>
                        <h4>icon</h4>
                        <h4>icon</h4>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex' }}>
                        <h1>Temukan Freelancermu?</h1>
                        <h3>cari pekerjaan - searching</h3>
                    </div>
                    <div style={{ display: 'flex', backgroundColor: 'aquamarine', justifyContent: 'space-between' }}>
                        <div>
                            <h4>icon</h4>
                            <h5>Top Freelance</h5>
                            <p>Lorem ipsum dolor tempore maiores.Lorem ipsum dolor tempore maiores</p>
                        </div>
                        <div>
                            <h4>icon</h4>
                            <h5>Top Freelance</h5>
                            <p>Lorem ipsum dolor tempore maiores.Lorem ipsum dolor tempore maiores</p>
                        </div>
                        <div>
                            <h4>icon</h4>
                            <h5>Top Freelance</h5>
                            <p>Lorem ipsum dolor tempore maiores.Lorem ipsum dolor tempore maiores</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', flexBasis: '65%', flexDirection: 'column' }}>
                        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi commodi neque</h2>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex' }}>
                                <div>
                                    <h5>icon + judul 1. cari</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem assumenda optio? Soluta dolor eligendi iure sit cumque,</p>
                                </div>
                                <div>
                                    <h5>icon + judul 2. cari</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem assumenda optio? Soluta dolor eligendi iure sit cumque,</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div>
                                    <h5>icon + judul 3. cari</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem assumenda optio? Soluta dolor eligendi iure sit cumque,</p>
                                </div>
                                <div>
                                    <h5>icon + judul 4. cari</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem assumenda optio? Soluta dolor eligendi iure sit cumque,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexBasis: '35%', backgroundColor: 'greenyellow' }}>
                        gambar
                    </div>
                </div>
                <div>
                    <h3>Freelance populer dalam Banner</h3>
                    <h3>Carosoul - gambar card</h3>
                </div>
                <div>
                    <h3>Freelance populer dalam Web dna pemograman</h3>
                    <h3>Carosoul - gambar card</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Ulasan dari pelanggan</h3>
                    <div style={{ display: 'flex' }}>
                        <h5>Card 1</h5>
                        <h5>Card 1</h5>
                        <h5>Card 1</h5>
                        <h5>Card 1</h5>
                    </div>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequatur, vero adipisci voluptas excepturi quas voluptatibus repellendus ducimus sapiente animi eos officia, ipsa voluptates expedita illum maxime corporis porro libero?</p>
                </div>
                <div>
                    logo logo
                </div>
                <footer style={{ display: 'flex', backgroundColor: 'yellow' }}> backgroundColor kuning</footer>
            </div>
        )
    }
}

const styles = {
    div1: {
        backgroundColor: '#FFC107',
        display: 'flex',
        flexBasis: '50%'

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