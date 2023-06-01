import React from "react";
// import React, { Component } from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, Typography } from "@mui/material";

class ClassComponents extends React.Component {
    // class ClassComponents extends Component {
    render() {
        const { heading, children } = this.props;
        return (
            <>
                <Box component="section">
                    <Box component="div">
                        <Container fixed>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography component="h1" variant="h4" align="center">
                                        {heading}
                                    </Typography>
                                    {children}
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Box>
            </>
        );
    }
}

ClassComponents.propTypes = {
    heading: PropTypes.string.isRequired,
}

ClassComponents.defaultProps = {
    heading: "Enter Your Title"
}

export default ClassComponents;