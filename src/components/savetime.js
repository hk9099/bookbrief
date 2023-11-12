import { Grid } from '@mui/material'
import React from 'react'
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

const savetime = () => {
    return (
        <div className='savetime'>
            <Container>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={4}>
                        <div className='save_box' >
                            <Grid sx={{ zIndex: "99", position: "absolute", top: { xs: "-25px", lg: "-47px" }, left: { xs: "4px", lg: "4px" } }}>
                                <img src={require("../asset/images/brown_book.png")} className='save_img' alt="save-img" />
                            </Grid>
                            <Typography sx={{ fontWeight: "600", xs: { fontSize: "20px" }, md: { fontSize: "20px", }, lg: { fontSize: "26px", fontWeight: "600", padding: "10px 0" } }}>Save Time</Typography>
                            <Typography sx={{ md: { fontSize: "14px" }, lg: { color: "#62646B" } }}> 
                            Book summaries can give you the key takeaways of a 
                            book in a fraction of the time it would take to read the entire book. 
                            This is especially helpful if you're short 
                            on time or have a lot of books you want to read.</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className='save_box'>
                            <Grid sx={{ zIndex: "99", position: "absolute", left: { xs: "260px", sm: "95px", lg: "122px" }, top: { xs: "-40px", sm: "390px", lg: "280px" } }}>
                                <img src={require("../asset/images/red_book.png")} className=' save_img_red' alt="save-img" />
                            </Grid>
                            <Typography sx={{ fontWeight: "600", xs: { fontSize: "20px" }, md: { fontSize: "20px" }, lg: { fontSize: "26px", fontWeight: "600", padding: "10px 0" } }}>Learn New Things</Typography>
                            <Typography sx={{ md: { fontSize: "14px" }, lg: { color: "#62646B" } }}>Starting of your day with 10 Minutes reading can expose you to new ideas and information that you might not have otherwise encountered. This can help you expand your knowledge and become more well-rounded. </Typography>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <div className='save_box'>
                            <Grid sx={{ zIndex: "99", position: "absolute", top: { xs: "-47px", lg: "-47px" }, left: { xs: "174px", lg: "280px", } }}>
                                <img src={require("../asset/images/yellow_book.png")} className='save_img' alt="save-img" />
                            </Grid>
                            <Typography sx={{ fontWeight: "600", xs: { fontSize: "20px" }, md: { fontSize: "20px" }, lg: { fontSize: "26px", fontWeight: "600", padding: "10px 0" } }}>Stay Up-To-Date On Book Trends</Typography>
                            <Typography sx={{ md: { fontSize: "14px" }, lg: { color: "#62646B" } }}>Latest curated book summaries can help you keep up with the latest trends and developments in your field or industry. This can be important for career advancement and staying ahead of the competition.</Typography>
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default savetime
