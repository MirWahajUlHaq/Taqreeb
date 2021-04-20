import React from 'react'
import Layout from '../core/Layout';
const About = () => {

    const aboutUs = () => (
        <div>
            <div className='container'>
                <h2>We set events in motion</h2>
                <p>We believe that good things happen when people host events for their loved ones. Using our technology people will experience a change in the way they have been hosting and experiencing events. It will lead millions of people to book all sorts of events just one click away anytime, anywhere.</p>
                <h2>A Message from the CEO and Co-Founders:</h2>
                <br />
                <img src=''></img>
                <h2>Events and Beyond</h2>
                <p>In addition to connecting you to hundreds and thousands of vendors quickly and at affordable rates, we also make sure that the vendors we’re connecting you to, deliver the best of the best services, creating a smooth,reliable, and seamless event experience to our user.</p>
                <h2>Your Safety drives Us</h2>
                <p>Whether you are in the back seat of a van or car, or you are at a Hut or a Farmhouse. We try our best to keep you safe by employing technology. We work with safety advisors to develop new technology to help improve safety and make it easier for everyone to get around.</p>
                <img src=''></img>
                <h2>Company’s Info</h2>
                <p></p>
                <h2>Who is running Shugl?</h2>
                <p>We, at shugl, believe in building a supportive and helpful culture for everyone - our vendor and our employees by doing the right thing at the right time.</p>
            </div>
        </div>
    )
            
        
    
    return(
        <Layout title='About Us Page' description='What Shugl Is?'>
            {aboutUs()}
        </Layout>
    )
}

export default About;