import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../core/Layout'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Row, Col, Image } from 'react-bootstrap'
import farmImage from '../images/Farmhouse/alHadiFarmHouse.jpg'
import farmImage1 from '../images/Farmhouse/farmImage1.webp'
import farmImage2 from '../images/Farmhouse/jbFarmHouse.jpg'
import farmImage3 from '../images/Farmhouse/farmImage3.webp'
import farmImage4 from '../images/Farmhouse/farmImage4.webp'
import farmImage5 from '../images/Farmhouse/farmImage5.webp'
export const ProductPage = () => {

    const images = () => (
        <>
            <Row style={{ marginBottom: '2rem' }}>
                <Col xs={6} md={4}>
                    <Image src={farmImage} style={{ height: '300px', maxWidth: '105%', maxHeight: '100%', borderRadius: '30px 0px 0px 30px' }} />
                </Col>
                <Col xs={6} md={2}>
                    <Image src={farmImage1} style={{ height: '145px', maxWidth: '110%', maxHeight: '100%' }} />
                    <Image src={farmImage2} style={{ height: '145px', marginTop: '10px', maxWidth: '110%', maxHeight: '100%' }} />
                </Col>
                <Col xs={6} md={2}>
                    <Image src={farmImage3} style={{ height: '145px', maxWidth: '110%', maxHeight: '100%' }} />
                    <Image src={farmImage4} style={{ height: '145px', marginTop: '10px', maxWidth: '110%', maxHeight: '100%' }} />
                </Col>

                <Col xs={6} md={4}>
                    <Image src={farmImage5} style={{ height: '300px', maxWidth: '105%', maxHeight: '100%', borderRadius: '0px 30px 30px 0px' }} />
                </Col>
            </Row>




        </>
    )
    const productNameAndPrice = () => (

        <div >
            <div className='row'>
                <div className='col col-md-4'>
                    <h3>Shamsi Farmhouse</h3>
                    <p>Malir Karachi, Pakistan</p>
                </div>
                <div className='col col-md-8' style={{ textAlign: 'right', paddingRight: '2rem' }}>
                    <h4><b>Rs.27000</b><p style={{ color: 'grey' }}>/12hr</p></h4>
                </div>
            </div>


        </div>
    )

    const userReviews = () => (
        <div>
            <h4>Reviews</h4>
            <h6>Ahmed Mallick</h6>
            <p>This is a very good place for family and guests</p>
            <h6>Faraz Shahid</h6>
            <p>A very good experience</p>
            <h6>Khalid Khan</h6>
            <p>Safe and secure and a good place to visit with friends</p>
        </div>
    )

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '10ch',
            },
        },
    }))

    const productDescription = () => (

        < div className='row' >
            <div className='col col-md-7'>
                <h4>Description</h4>
                <p>Spread across 100 acres of land, Pandawali Organic Farm. It sets an example of multi-discipline farming-with cow milk dairy, goat farming, vegetable net houses, free range poultry and open field organic farming-all under one roof. "Farmstays or eco-tourism is an extension of organic farming which gives you an opportunity to not only unwind amidst nature but also introduces you to a healthy, sustainable lifestyle.<br />Spread across 100 acres of land, Pandawali Organic Farm. It sets an example of multi-discipline farming-with cow milk dairy, goat farming, vegetable net houses, free range poultry and open field organic farming-all under one roof. "Farmstays or eco-tourism is an extension of organic farming which gives you an opportunity to not only unwind amidst nature but also introduces you to a healthy, sustainable lifestyle.<br />A unique experience lies in store for you here for you will be woken up by roosters, the typical farm way. You can learn farming and even try your hand at cooking the freshly plucked vegetables. There are a number of games too that will keep you and your family busy such as chess, carrom, cards or cycling. This pet-friendly farm has private patio's overlooking an amazing view. There is also a reading/activity room for guests to enjoy a lazy afternoon.<br /><b>Guest access</b><br />Guests can access 100 acres of land of Pandawali Organic Farm. It sets an example of multi-discipline farming-with cow milk dairy, goat farming, vegetable net houses, free range poultry and open field organic farming-all under one roof. "Farmstays or eco-tourism is an extension of organic farming which gives you an opportunity to not only unwind amidst nature but also introduces you to a healthy, sustainable lifestyle.<br /><b>Other things to note</b>Walking, hiking, off-roading, trailing are some of the activities that can be done.<br /><b>Guest access</b><br />Guests can access 100 acres of land of Pandawali Organic Farm. It sets an example of multi-discipline farming-with cow milk dairy, goat farming, vegetable net houses, free range poultry and open field organic farming-all under one roof. "Farmstays or eco-tourism is an extension of organic farming which gives you an opportunity to not only unwind amidst nature but also introduces you to a healthy, sustainable lifestyle.<br /><b>Other things to note</b>Walking, hiking, off-roading, trailing are some of the activities that can be done.<br /><b>Guest access</b><br />Guests can access 100 acres of land of Pandawali Organic Farm. It sets an example of multi-discipline farming-with cow milk dairy, goat farming, vegetable net houses, free range poultry and open field organic farming-all under one roof. "Farmstays or eco-tourism is an extension of organic farming which gives you an opportunity to not only unwind amidst nature but also introduces you to a healthy, sustainable lifestyle.<br /><b>Other things to note</b>Walking, hiking, off-roading, trailing are some of the activities that can be done.</p>
            </div>
            <div className='row'>
                <Card variant="outlined" style={{ position: 'absolute', right: '50px', width: '400px', height: '400px', maxWidth: '400px', borderRadius: '10px 10px 10px 10px' }}>
                    <CardContent>
                        <Typography style={{ textAlign: 'center', fontWeight: 'bold' }} gutterBottom>
                            Check Availability and Price
        </Typography>
                        <form className={useStyles.root} noValidate autoComplete="off">
                            <div style={{ marginTop: '2rem' }}>
                                <label>Check-in Date</label>
                                <input name="Check-in date" type="date"
                                    /*disabled={this.state.mode}*/
                                    /*value={ }*/
                                    className="form-control" /*onChange={this.handleInputChange}*/ />
                            </div>

                            <div style={{ marginTop: '2rem' }}>
                                <label>Check-out Date</label>
                                <input name="Check-out date" type="date"
                                    /*disabled={this.state.mode}*/
                                    /*value={ }*/
                                    className="form-control" /*onChange={this.handleInputChange}*/ />
                            </div>

                        </form>
                        <CardActions>
                            <Link to='/view/checkout'>
                                <Button variant='contained' color='primary' style={{ marginTop: '3rem', width: '11rem', height: '3rem', marginBottom: '2rem', marginLeft: '1rem', marginRight: '1rem', backgroundColor: '#D6324A', color: 'white' }}>Book Now</Button>
                            </Link>
                            <Link>
                                <Button variant='contained' color='primary' style={{ marginTop: '3rem', width: '11rem', height: '3rem', marginBottom: '2rem', marginLeft: '1rem', marginRight: '1rem', backgroundColor: '#D6324A', color: 'white' }}>Add to Cart</Button>
                            </Link>

                        </CardActions>
                    </CardContent>



                </Card>


            </div>

        </div >
    )

    return (
        <Layout title='Shugl Home' description='Scene on hai!'>
            <Container>
                {images()}
                {productNameAndPrice()}
                {productDescription()}
                {userReviews()}
            </Container>

        </Layout>
    )
}