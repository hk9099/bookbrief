/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import Book4 from '../asset/images/book4.png';
import Book5 from '../asset/images/book5.png';
import Book6 from '../asset/images/book6.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';

const Popular = () => {
    const popularData = [
        {
            img: Book4,
            text: "10 Days to Faster Reading"
        },
        {
            img: Book5,
            text: "10 Days to Faster Reading"
        },
        {
            img: Book6,
            text: "10 Days to Faster Reading"
        },
        {
            img: Book4,
            text: "10 Days to Faster Reading"
        },
        {
            img: Book5,
            text: "10 Days to Faster Reading"
        },

    ];
    const settings = {
        arrows: true,
        className: 'sample',
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <Grid sx={{ marginBottom: "40px" }}>
            <Container >
                <Typography className='review-title' sx={{
                    fontSize: { xs: "22px", sm: "30px", md: "40px", lg: "50px" },
                    paddingY: { xs: "30px", sm: "40px", md: "40px", lg: "60px" }, textAlign: "left",
                }}>Most popular in BookBrief
                </Typography>
                <Grid sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" }, justifyContent: "center", fontSize: "18px", fontWeight: "600" }} >
                    {popularData.map((item, index) => (
                        <div key={index} >
                            <img src={item.img} style={{ width: "210px" }} />
                            <div style={{ padding: "0px 16px", textAlign: "center" }}>{item.text}</div>
                        </div>
                    ))}
                </Grid>
                <Grid sx={{ display: { lg: "none", md: "none", sm: "block", xs: "block" }}}>
                <Swiper
            modules={[Navigation, FreeMode]}
            slidesPerView={2}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="mySwiper"
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              520: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {popularData.map((imageUrl, index) => (
              <SwiperSlide key={index} style={{ display:'flex' , justifyContent: 'center'}}>
                <img src={imageUrl.img} alt="image" />
              </SwiperSlide>
            ))}
          </Swiper>
                </Grid>
            </Container>
        </Grid>
    )
}

export default Popular