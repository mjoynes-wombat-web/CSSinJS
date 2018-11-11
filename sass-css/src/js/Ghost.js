import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ghost extends Component {
  state = {
    clicked: false,
    reviving: false,
  }
  clicked = () => {
    console.log("clicked")
    this.setState({ clicked: true })

    setTimeout(() => this.setState({ reviving: true}), 8000)
    setTimeout(() => this.setState({
      clicked: false,
      reviving: false,
    }), 14000)
  }
  render() {
    const { ghost, quadrant, timing } = this.props;
    const { clicked, reviving } = this.state;
    return (
      <div onClick={this.clicked} className={`ghost ${ghost} ${quadrant} ${timing} ${clicked ? "clicked" : ""} ${reviving ? "reviving" : ""}`}>
        <div className="ghost__body">
          <svg>
            <polygon points="0 24, 4 24, 4 12, 8 12, 8 8, 12 8, 12 4, 20 4, 20 0, 36 0, 36 4, 44 4, 44 8, 48 8, 48 12, 52 12, 52 24, 56 24, 56 48, 0 48 " />
          </svg>
        </div>
        <div className="ghost__eye--left">
          <svg>
            <polygon points="4 0, 12 0, 12 4, 16 4, 16 16, 12 16, 12 20, 4 20, 4 16, 0 16, 0 4, 4 4 " />
          </svg>
        </div>
        <div className="ghost__eye--right">
          <svg>
            <polygon points="4 0, 12 0, 12 4, 16 4, 16 16, 12 16, 12 20, 4 20, 4 16, 0 16, 0 4, 4 4 " />
          </svg>
        </div>
        <div className="ghost__mouth"></div>
        <div className="ghost__feet"></div>
      </div>
    );
  }
}

Ghost.propTypes = {
  ghost: PropTypes.string,
  quadrant: PropTypes.string,
  timing: PropTypes.string,
};

Ghost.defaultProps = {
  ghost: "blinky",
  quadrant: "top-left",
  timing: "move-first",
}

export default Ghost;