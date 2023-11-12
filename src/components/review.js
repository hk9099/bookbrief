import { Container, Grid, Box, Typography, Button } from '@mui/material'
import React from 'react'
import Rating from '@mui/material/Rating';
import ReviewImg from '../asset/images/review.png';

const Review = () => {
    const reviewData = [
        {
            title: "Milton Austin",
            text: "Sales Manager , Slack"
        },
        {
            title: "Milton Austin",
            text: "Sales Manager , Slack"
        },
        {
            title: "Milton Austin",
            text: "Sales Manager , Slack"
        },
    ];

    return (
        <div>
            <Container>
                <Typography className='review-title' sx={{
                    fontSize: { xs: "28px", sm: "30px", md: "40px", lg: "60px" },
                    padding: { xs: "30px 25px", sm: "40px 150px", md: "40px 200px", lg: "60px 250px" }
                }}>Why People Love Using <span>TheBookBrief</span>
                </Typography>
                <Grid container spacing={2} sx={{ marginBottom: "60px" }}>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        {reviewData.map((item, index) => (
                            <Box className="review-box" key={index}>
                                <Grid className=''>
                                    <img src={ReviewImg} alt="images" />
                                </Grid>
                                <Grid sx={{ marginLeft: "25px" }}>
                                    <Typography gutterBottom sx={{ fontSize: {lg:"24px",md:"22px",sm:"18px",xs:"16px"}, fontWeight: "400", lineHeight: "36px" }} >
                                        {item.title}
                                    </Typography>
                                    <Typography sx={{ fontSize:{lg: "18px",md:"16px",sm:"16px",xs:"16px"}, fontWeight: "400", lineHeight:{lg: "36px"}, color: "#62646B" }} >
                                        {item.text}
                                    </Typography>
                                </Grid>
                            </Box>
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{ textAlign: "left", paddingLeft: { xs: "28px", sm: "40px", md: "70px", lg: "115px" } }} >
                        <Typography sx={{ fontSize: "24px", fontWeight: "600" }} >
                            It was a good experience!
                        </Typography>
                        <Rating name="half-rating-read" defaultValue={5} precision={5} readOnly
                            sx={{ fontSize: { lg: "32px", md: "30px", sm: "25px" }, margin: "10px 0px 30px" }} />
                        <Typography sx={{ fontSize:{lg:"18px",md:"18px",sm:"16px",xs:"14px"}, fontWeight: "400", lineHeight: {lg:"36px",md:"30px",sm:"30px",xs:"30px"} }} >
                            This can be done in a multitude of ways for example if you are producing a brochure selling wellington boots then start every paragraph spelling out
                            'buy our wellington boots' or better still you have no choice but to buy our wellington boots now get out your cheque book and buy them - NOW!*
                        </Typography>
                        <Typography sx={{ fontSize:{lg:"18px",md:"18px",sm:"16px",xs:"14px"}, fontWeight: "400", lineHeight: {lg:"36px",md:"30px",sm:"30px",xs:"30px"} }}>
                            Another crafty method is to doctor images in photoshop so that on an innocent picture of a tree for example carved into the bark is a message along the
                            lines of 'U Luv Wellington boots' You get the idea.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Grid sx={{ backgroundColor: "#277BC1", textAlign: "center" }}>
                <Container>
                    <Typography className='review-title' sx={{
                        fontSize: { xs: "28px", sm: "30px", md: "40px", lg: "60px" },
                        padding: { xs: "30px 20px", sm: "40px 105px", md: "40px 127px", lg: "60px 100px" }, color: "#fff"
                    }}>Expand your reading list without spending a fortune.
                    </Typography>
                    <Button className='summeries_btn' variant="contained" sx={{
                        fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "20px" },
                        marginBottom: { xs: "30px", md: "60px", lg: "68px", },
                        width: { xs: "100%", lg: "fit-content", md: "fit-content", sm: "fit-content" },
                        backgroundColor: "#fff", color: "#3269BA", borderRadius: "40px", textTransform: "capitalize", fontWeight: "500", padding: "8px 50px "
                    }}>Get Your Free Summaries Now</Button>
                </Container>
            </Grid>
        </div>
    )
}

export default Review
