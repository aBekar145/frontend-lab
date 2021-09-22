import React from "react";

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {x: 0, y: 0};
    }

    handleMouseMove(event) {
        this.setState ({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return(
            <div style={{height: '100vh', border: '1px solid black', marginTop: '20px', padding: '20px', width: '100%', position: 'relative', backgroundColor:'green'}} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

export default Mouse;