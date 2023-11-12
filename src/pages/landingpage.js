import React from 'react'
import Header from "../components/header"
import Banner from "../components/banner"
import SaveTime from "../components/savetime"
import Card from "../components/card"
// import Review from "../components/review"
import Popular from "../components/popular"
import Footer from "../components/footer"
import ReadBook from "../components/readBook"
import { BrowserRouter } from 'react-router-dom'


const Landingpage = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
            <Banner />
            <ReadBook />
            <SaveTime />
            <Card />
            {/* <Review /> */}
            <Popular />
            <Footer />
        </>
    )
}

export default Landingpage
