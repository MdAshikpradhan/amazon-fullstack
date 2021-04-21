import React from 'react';
import Product from '../Product/Product';
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img 
                className="home_image"
                src="https://storage.googleapis.com/freesat-production-assets/styles/teaser_hero_image_1440x500_/cloud-storage/news/headliners/amazon-prime-video-banner.jpg?itok=zUbCf_wT" alt=""/>
                
                <div className="home_row">
                    <Product 
                    id={4903850}
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={29.99}
                    rating={5}
                    image="https://miro.medium.com/max/4452/1*zxtMIuwC0eMGDAQ8gkCtcg.jpeg" 
                    />
                    <Product 
                    id={4903851}
                    title="Learning PHP, MySQL & JavaScript: With jQuery, CSS & HTML5 (Learning PHP, MYSQL, Javascript, CSS & HTML5) 5th Edition"
                    price={28.50}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51H8DtU-WTL._SX379_BO1,204,203,200_.jpg" 
                    />
                </div>
                <div className="home_row">
                <Product 
                    id={4903852}
                    title="New Apple Watch Series 6 (GPS, 40mm) - Blue Aluminum Case with Deep Navy Sport Band"
                    price={139.47}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/718qilkBKUL._SL1500_.jpg" 
                    />
                    <Product 
                    id={4903853}
                    title="Garmin 010-02028-00 Approach S10, Lightweight GPS Golf Watch, Black"
                    price={119.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61v5OxrSe8L._AC_SL1000_.jpg" 
                    />
                    <Product 
                    id={4903854}
                    title="Garmin Approach S60, Premium GPS Golf Watch with Touchscreen Display and Full Color CourseView Mapping, Black w/ Silicone Band"
                    price={99.58}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71HmJRIYpTL._AC_SX679_.jpg" 
                    />
                </div>
                <div className="home_row">
                <Product 
                    id={4903855}
                    title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
                    price={1694.47}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
