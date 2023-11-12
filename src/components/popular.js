/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import Book4 from '../asset/images/book4.png';
import Book5 from '../asset/images/book5.png';
import Book6 from '../asset/images/book6.png';
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
      // text: "10 Days to Faster Reading"
    },
    {
      img: Book5,
      // text: "10 Days to Faster Reading"
    },
    {
      img: Book6,
      // text: "10 Days to Faster Reading"
    },
    {
      img: Book4,
      // text: "10 Days to Faster Reading"
    },
    {
      img: Book5,
      // text: "10 Days to Faster Reading"
    },

  ];
  return (
    <Grid sx={{ marginBottom: "40px" }}>
      <Container >
        <Typography className='review-title' sx={{
          fontSize: { xs: "22px", sm: "30px", md: "40px", lg: "50px" },
          paddingY: { xs: "30px", sm: "40px", md: "40px", lg: "60px" }, textAlign: "left",
        }}>Most popular in BookBrief
        </Typography>
        <Grid sx={{ }}>
          <Swiper
            modules={[Navigation, FreeMode]}
            slidesPerView={2}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="mySwiper"
            loop={true}
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
              720: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              1025: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
            }}
          >
            {popularData.map((imageUrl, index) => (
              <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
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