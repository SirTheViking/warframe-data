import React, { Component } from "react";

import "@Styles/components/navbar.scss";

class Navbar extends Component {

    render() {
        return (
            <nav>
                <a href="#">Home</a>
                <a href="#">News</a>
                <a href="#">Alerts</a>
            </nav>
        );
    }
}

export default Navbar;