import React from "react";
// import React, { Component } from "react";
import PropTypes from "prop-types";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

class ClassComponents extends React.Component {
    // class ClassComponents extends Component {
    state = {
        name: "This Class Componenet State",
        surname: this.props.surname,
        counter: 0
    }
    constructor(props) {
        super(props);
        console.log("This is Class Component");
        // this.state = {
        //     name: "This Class Componenet State",
        //     surname: this.props.surname,
        //     counter: 0
        // }
    }
    handleState() {
        this.setState({
            name: "Welcome to My First App",
            counter: this.state.counter + 1,
            surname: "Name Change"
        })
    }
    handleStateDecrement() {
        if (!this.state.counter == 0) {
            this.setState({
                counter: this.state.counter - 1
            })
        }
    }
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
                                    <Typography component="h1" variant="h4" align="center">
                                        {this.state.name} {this.state.counter} {this.state.surname}
                                    </Typography>
                                    <Button type="button" variant="contained" color="secondary" onClick={() => this.handleState()}>Increment</Button>
                                    <Button type="button" variant="contained" color="secondary" onClick={() => this.handleStateDecrement()}>Decrement</Button>
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