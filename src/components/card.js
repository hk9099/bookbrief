import React from 'react'
import Grid from '@mui/material/Grid';
import { Box, Container, Typography, Button } from '@mui/material';
import CardImg1 from '../asset/images/card1.png';
import CardImg2 from '../asset/images/bxs_happy.png';
import CardImg3 from '../asset/images/emojione-monotone_baby-bottle.png';
import CardImg4 from '../asset/images/bi_clipboard-heart-fill.png';
import CardImg5 from '../asset/images/ic_round-science.png';
import CardImg6 from '../asset/images/foundation_lightbulb.png'
const card = () => {
    const cardData = [
        {
            img: CardImg1,
            title: "Career & Success",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac."
        },
        {
            img: CardImg2,
            title: "Mindfullness & Happiness",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac."
        },
        {
            img: CardImg3,
            title: "Parenting",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac."
        },
        {
            img: CardImg4,
            title: "Society & Culture",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac."
        },
        {
            img: CardImg5,
            title: "Science & Technology",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac."
        },
        {
            img: CardImg6,
            title: "Motivation & Inspiration",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac."
        },
    ];

    return (
        <Grid className='card'>
            <Container>
                <Typography variant="h3" gutterBottom sx={{ textAlign:{lg: 'left',md:"left",sm:"center",xs:"center"}, paddingY: { lg: "75px", sm: "30px", xs: "20px" }, fontWeight: "600", fontSize: { xs: "30px", md: "40px", lg: "50px" } }}>
                What are you interested in?
                </Typography>
                <Grid container spacing={2}>
                    {cardData.map((item, index) => (
                        <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                            <Box sx={{ textAlign: 'left' }} className="card-box">
                                <div className='card-img'>
                                    <img src={item.img} alt="images" />
                                </div>
                                <Typography gutterBottom className='card-title' >
                                    {item.title}
                                </Typography>
                                {/* <Typography className='card-text' >
                                    {item.text}
                                </Typography> */}
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Button variant="contained" className='card-btn' sx={{
                    fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "20px" },
                    margin: { xs: "30px 0px", md: "60px 0px", lg: "68px 0px", }, width: { xs: "100%",lg:"fit-content",md:"fit-content",sm:"fit-content" }
                }}>Show All Categories</Button>
            </Container>
        </Grid>
    )
}

export default card