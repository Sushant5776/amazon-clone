import React from "react"
import "./Home.css"
import Product from "./Product"

const Home = () => {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Amazon"
        className="home__image"
      />
      <div className="home__row">
        <Product
          id={1}
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          rating={4}
          price="649"
          image="https://m.media-amazon.com/images/I/81RCff1NpnL._AC_UY218_.jpg"
        />
        <Product
          id={1}
          title="Dark Fantasy Sandwich Sunfeast Dark Fantasy Choco Creme Dark Crunch with Smooth Creme Pouch, 300 g"
          rating={4}
          price="58"
          image="https://m.media-amazon.com/images/I/71yL+cNA6aL._SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={1}
          title="American Tourister Casual Backpack"
          rating={4}
          price="899"
          image="https://m.media-amazon.com/images/I/91FvDEE9sCL._UY741_.jpg"
        />
        <Product
          id={1}
          title="Yashika Women's Art Silk Saree With Blouse Piece(NAURTA_Free Size)"
          rating={4}
          price="259"
          image="https://m.media-amazon.com/images/I/818piw6b2wL._UY741_.jpg"
        />
        <Product
          id={1}
          title="Faddish Full Rim Oval Angular Unisex Reading Spectacle Frame Customise Prescription (CLICHE C4 RG|Zero Power|Demi Brown) (Premium Acetate)"
          rating={4}
          price="571"
          image="https://m.media-amazon.com/images/I/71sPf192bgL._UX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={1}
          title="TAGG Verve Ultra Smartwatch with 1.69'' 3D Curved Display, Real SPO2, and Real-Time Heart Rate Tracking, 10 Days Battery Backup, IPX68 Waterproof (Black), Standard"
          rating={4}
          price="2799"
          image="https://m.media-amazon.com/images/I/71HD7vBWC-L._SX522_.jpg"
        />
      </div>
    </div>
  )
}

export default Home
