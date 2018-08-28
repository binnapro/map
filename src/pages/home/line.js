import React, { Component } from 'react';
import classname from 'classnames';

class componentName extends Component {
  state = {
    isShowH: false,
    isShowCircle: false
  }
  componentDidMount = () => {
    document.getElementsByClassName('xLine')[0].addEventListener('webkitAnimationEnd', () => {
      this.setState({ isShowH: true }, () => {
        document.getElementsByClassName('hLine')[0].addEventListener('webkitAnimationEnd', () => {
          this.setState({ isShowCircle: true }, () => {
            this.props.update({ isShowBox: true })
          })
        })
      })
    })
  }
  render() {
    var boxStyle = classname({
      absolute: true,
      'lineRight': this.props.type === 'right',
      'lineLeft': this.props.type === 'left',
    });
    return (
      <div className={boxStyle} style={{ height: 120, width: 120, top: this.props.top, left: this.props.left, zIndex: 9 }}>
        <div className="xLine"></div>
        {this.state.isShowH &&
          <div className="hLine"></div>
        }
        <img src={require('./img/circle.png')} className="bottomLeftCircle" />
        {this.state.isShowCircle &&
          <img src={require('./img/circle.png')} className="topRightCircle" />
        }
      </div>
    );
  }
}

export default componentName;