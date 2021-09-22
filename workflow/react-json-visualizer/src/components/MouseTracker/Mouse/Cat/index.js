import React from "react";

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src='https://st.depositphotos.com/1000122/2016/i/950/depositphotos_20163697-stock-photo-small-scottish-straight-kitten-walking.jpg' style={{ position: 'absolute', left: mouse.x, top: mouse.y, width: 60, height: 40}} />
        );
    }
}

export default Cat;