// libraries
import React from 'react'
import GoogleMapReact from 'google-map-react'

// components
import Ribbon from '../app/Ribbon'

const PinComponent = () => (
    <div className='PinComponent'></div>
);


class ContactComponent extends React.Component {


    render() {

        return (
            <div className='ContactComponent'>
                <Ribbon title='Contact'/>
                <div className='map'>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDYD4-Z3y5oLChHA4nl7yQMDKRZYuKXMEs'}}
                        defaultCenter={{
                            lat: 37.545556168351936,
                            lng: -122.1734832873044
                        }}
                        defaultZoom={9}
                    >
                        <PinComponent
                            lat={37.36240674924852}
                            lng={-121.90569153925753}
                        />
                    </GoogleMapReact>
                </div>

                <form className='form' action="https://formspree.io/calderonflor82@gmail.com"
                    method="POST">
                    <span>Write me a note and how to contact you back</span>

                    <div className='label'>
                        <div className='email'>
                            <label>Your e-mail:</label>
                        </div>
                        <div className='message'>
                            <label>Message:</label>
                        </div>
                    </div>

                    <div>
                        <input type="email" name="_replyto"/>
                        <input type="text" name="messagebox"/>
                        <input type="submit" value="Send Message"/>
                    </div>



                </form>

            </div>
        )
    }
}

export default ContactComponent
