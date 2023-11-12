import { Grid, Container, Typography, Button } from '@mui/material'; import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
const Banner = () => {
    return (
        <>
            <Container style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" ,marginBottom:"50px"}}>
                <div className='lg:w-1/2 md:w-full flex align-center justify-center'>
                    <Grid className="my-auto">
                        <Grid display="flex" alignItems="flex-end">
                            <Typography variant='h3' className="banner_heading">Read Books
                            </Typography>
                            <img src={require("../asset/images/banner_small_1.png")} alt='banner-small' />
                        </Grid>
                        <Grid display="flex">
                            <Grid className='banner_line_contant'>Spend less. Read more</Grid>
                            <Grid sx={{ marginLeft: "-40px" }}>
                                <Typography variant='h3' className="banner_heading">
                                    You Love, </Typography>
                                <Grid display="flex" >
                                    <img src={require("../asset/images/banner_small_2.png")} alt='banner-small' />
                                    <Typography variant='h3' sx={{ paddingLeft: "5px" }} className="banner_heading">
                                        In Minutes</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Typography variant="h6" className="banner_desc">On New Year Resolution Join Us and Access 1000+ book summaries from the world's best authors.</Typography>
                        <Paper
                            component="form"
                            className='searchbar'
                            style={{ borderRdius: "30px" }}
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: { lg: "400px" }, borderRdius: "30px" }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search books.."
                                inputProps={{ 'aria-label': 'search books..' }}
                                onClick={() => {
                                    window.location.replace('https://library.thebookbrief.com');
                                }}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => {
                                window.location.replace('https://library.thebookbrief.com');
                            }}>
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Grid>
                </div>
                <div className='lg:w-1/2 md:w-full flex align-center justify-center '>
                    <Grid className="banner_img "
                        sx={{
                            marginTop: { lg: "0px", md: "20px" },
                        }} >
                        <img src={require("../asset/images/banner_img.png")} alt='banner-img' />
                    </Grid>
                </div>
            </Container>
        </>
    )
}
export default Banner

