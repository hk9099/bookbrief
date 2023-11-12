/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import Book1 from "../asset/images/book1.png";
import Book2 from "../asset/images/book2.png";
import Book3 from "../asset/images/book3.png";
import Book4 from "../asset/images/book4.png";
import Book5 from "../asset/images/book5.png";
import Book6 from "../asset/images/book6.png";
import ReadBooklogo from "../asset/images/undraw_road_to_knowledge_m8s0 1.png";
import { Swiper, SwiperSlide } from 'swiper/react';

const ReadBook = () => {
  const popularData = [
    {
      img: Book4,
      text: "10 Days to Faster Reading",
    },
    {
      img: Book5,
      text: "10 Days to Faster Reading",
    },
    {
      img: Book6,
      text: "10 Days to Faster Reading",
    },
    {
      img: Book4,
      text: "10 Days to Faster Reading",
    },
    {
      img: Book5,
      text: "10 Days to Faster Reading",
    },
  ];
  const handleButtonClick = () => {
    window.location.href = 'https://library.thebookbrief.com';
  };
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);

  const topics = [
    'Be more knowledgeable',
    'Be more successful',
    'Be a better parent',
    'Be your best self!',
    'Be healthier',
    'Be happier',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextTopicIndex = (currentTopicIndex + 1) % topics.length;
      setCurrentTopicIndex(nextTopicIndex);
    }, 1000); // Change the interval according to your preference (milliseconds).

    return () => {
      clearInterval(interval);
    };
  }, [currentTopicIndex, topics]);

  return (
    <Grid
      // sx={{ marginTop: { xl: "50px", lg: "800px", md: "560px", sm: "515px", xs: "445px" } }}
    >
      <Container>
        <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              textAlign: { lg: "left", md: "left", sm: "center", xs: "center" },
              
            }}
          >
            <img src={ReadBooklogo} className="book-logo 	"
              style={{
                display: { lg: "none", md: "none", sm: "none", xs: "none" },
              }}
             />
                        <Typography
              className="review-title"
              sx={{
                fontSize: { xs: "15px", sm: "30px", md: "20px", lg: "30px" },
                paddingBottom: "20px",
                marginTop: "10px",
                
              }}
            >
              Don't Spend Extra Time On Learning.
              <br /> We Know You Don't Have It.
            </Typography>
            <div
              sx={{
                paddingRight: { lg: '75px', md: '55px', sm: '0px', xs: '0px' },
                display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' },
                fontWeight: '500',
                color: '#62646B',
                lineHeight: '27px',
                fontSize: { lg: '18px', md: '17px', sm: '16px', xs: '12px' },
              }}
            >
              <div className="rotating-headers">
                {topics.map((topic, index) => (
                  <Typography
                    key={index}
                    className="rotating-headers__header"
                    style={{
                      fontWeight: 'bolder',
                      fontFamily: 'system-ui',
                    }}
                    sx={{
                      opacity: index === currentTopicIndex ? 1 : 0.5,
                      transition: 'all 0.5s ease-in-out',
                      '&:hover': {
                        color: '#00000',
                      },
                      fontSize: { lg: '28px', md: '20px', sm: '16px', xs: '12px' },
                      textAlign: { lg: 'left', md: 'left', sm: 'left', xs: 'left' },
                      paddingLeft: { lg: '0px', md: '0px', sm: '90px', xs: '90px' },
                    }}
                  >
                    {topic}
                  </Typography>
                ))}
              </div>
            </div>
            {/* <Button
             
              sx={{
                backgroundColor: "#0ea5e9",
                textTransform: "capitalize",
                color: "#fff",
                borderRadius: "40px",
                fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "20px" },
                paddingX: { lg: "30px", md: "25px", sm: "25px", xs: "0px" },
                margin: { xs: "30px 0px", md: "60px 0px", lg: "68px 0px" },
                padding: { xs: "10px 30px", md: "10px 30px"},
                width: {
                  xs: "auto",
                  lg: "fit-content",
                  md: "fit-content",
                  sm: "fit-content",
                },
              }}
            >
              Explore All Summaries
            </Button> */}
            <Button variant="contained" className='card-btn'  onClick={handleButtonClick}  sx={{
                    fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "20px" },
                    margin: { xs: "30px 0px", md: "60px 0px", lg: "68px 0px", }, width: { xs: "100%",lg:"fit-content",md:"fit-content",sm:"fit-content" }
                }}>Explore All Categories</Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" } }}
          >
            <Grid container spacing={2} className="readbook">
              <Grid item xs={4} sm={4} md={4} lg={4}>
                {" "}
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                {" "}
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                {" "}
                <img src={Book1} width="90%" />
                <Typography>10 Days to Faster Reading</Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                {" "}
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <img src={Book2} width="90%" />{" "}
                <Typography> 21st Century Investing</Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                {" "}
                <img src={Book3} width="90%" />
                <Typography>100 Million Years Of Food</Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <img src={Book4} width="90%" />{" "}
                <Typography>10 Days to Faster Reading</Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <img src={Book5} width="90%" />
                <Typography>10 Days to Faster Reading</Typography>{" "}
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <img src={Book6} width="90%" />
                <Typography>10 Days to Faster Reading</Typography>{" "}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          sx={{ display: { lg: "none", md: "none", sm: "block", xs: "block" } }}
        >
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
  );
};

export default ReadBook;
