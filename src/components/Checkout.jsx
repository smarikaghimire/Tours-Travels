// src/components/CheckoutPage.js

import React, { useState } from 'react';
import '../css/checkout.css';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
    const bookingData = JSON.parse(localStorage.getItem("FormData"));
    const jsonData = bookingData.placeName;
    const [button, setButton] = useState("Book")

    const final = {
        customersname: name,
        email: email,
        address: address,
        ...bookingData
    };




    const handleCheckout = async (e) => {
        setButton("Booking")
        // e.preventDefault();

        try {
            const response = await fetch('https://tourstravelsapi.onrender.com/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(final),
            });

            if (response.ok) {
                console.log('Booking submitted successfully!');

                setTimeout(() => {
                    setButton("Booked!")
                }, 1000)
                setTimeout(() => {
                    navigate('/');
                }, 1500)
                // Optionally, reset the form after successful submission

            } else {
                console.error('Failed to submit booking');
            }
        } catch (error) {
            console.error('Error:', error);
        }

    };

    const data = [
        {
            "Kathmandu": "https://images.unsplash.com/photo-1617469165786-8007eda3caa7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=raimond-klavins-JqT2Wp5S0Dk-unsplash.jpg",
            "Pokhara": "https://images.unsplash.com/photo-1540961018629-a53dfce2fb66?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=samrat-khadka-2bxAoXcfwwM-unsplash.jpg",
            "Illam": "https://images.unsplash.com/photo-1700378232912-83bbfaedb9a3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=shanesh-np-wd5ivTbI8ME-unsplash.jpg",
            "Mugu": "https://images.unsplash.com/photo-1630804597431-46a42500fe02?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=ashok-acharya-shfqBsFABF8-unsplash.jpg",

            "Solukhumbu": "https://images.unsplash.com/photo-1704538349509-d8b14546cbc1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=bibek-kc-UbOaPXlI8hA-unsplash.jpg"
        }
    ]

    const description = [
        {
            "Kathmandu": "Kathmandu, Nepal's capital, is set in a valley surrounded by the Himalayan mountains. At the heart of the old city’s mazelike alleys is Durbar Square, which becomes frenetic during Indra Jatra, a religious festival featuring masked dances.",
            "Pokhara": "Pokhara is a city on Phewa Lake, in central Nepal. It’s known as a gateway to the Annapurna Circuit, a popular trail in the Himalayas. Tal Barahi Temple, a 2-story pagoda, sits on an island in the lake.",
            "Illam": "Ilam is one of four urban municipalities of Ilam District, which lies in the Mahabharata hilly range of Koshi Province, eastern Nepal. Ilam also acts as the headquarters of Ilam District.",
            "Mugu": "Mugu is a village development committee in the Himalayas of Mugu District in the Karnali Zone of north-western Nepal. After Dolphu it is the second largest VDC in Mugu District which takes its name from it.",

            "Solukhumbu": "Solukhumbu District is one of 14 districts of Koshi Province of eastern Nepal. As the name suggests, it consists of the subregions Solu and Khumbu."
        }
    ]




    return (
        <div>
            <div className="container">
                <div className="image">
                    <div className="image-container">
                        <img src={data[0][jsonData]} alt="images" height={500} />
                    </div>
                    <div className="description">
                        <h2>{jsonData}</h2>
                        <p>{description[0][jsonData]}</p>
                    </div>
                </div>
                <div className="checkout">

                    <div className="checkout-container">

                        <h2 className='checkoutTitle'>Book Now!</h2>
                        <div className="form-container">
                            <label>Name:</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                            <label>Email:</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                            <label>Address:</label>
                            <textarea value={address} onChange={(e) => setAddress(e.target.value)} />

                            <button onClick={handleCheckout}>{button}</button>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default Checkout;
