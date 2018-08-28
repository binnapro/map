import React, { Component } from 'react';
import Line from './line';

class componentName extends Component {
  state = {
    data: [1, 2, 3],
    isShowBox: false
  }

  hiddle = () => {
    this.props.update({
      visible: false,
      which: 0
    })
    this.setState({
      isShowBox: false
    })
  }
  update = (e) => {
    this.setState(e)
  }
  showDetail = (id,event) => {
    event.stopPropagation();
    //go
	  window.postMessage(id)
  }
  render() {
    if (this.props.visible)
      return (
        <div style={{ position: 'fixed', width: window.innerWidth, height: window.innerHeight, left: 0, top: 0, zIndex: 999, paddingTop: 207, }}
          onClick={this.hiddle}
        >
          <div style={{ width: 680, height: 424, margin: '0 auto' }} className="relative">
            <Line type={this.props.type} top={this.props.lineTop} left={this.props.lineLeft} update={this.update} />
            {this.state.isShowBox &&
              <div style={{
                width: 221, height: 365, background: '#fff', top: this.props.top, left: this.props.left,
                boxShadow: '0 0 7px rgba(74,74,74,0.2)',
                padding: '0 0 13px 0',
                borderRadius: 10,
                overflow: "auto"
              }} className="absolute schoolMapModal">
                <div className="absolute" style={{ top: 17, right: 12, fontSize: 12 }}>USnews排名</div>
                {this.props.source.map((e, i) =>
                  <div key={i}>
                    <div className="rowStartCenter" style={{ fontSize: 15, paddingLeft: 13, marginTop: 13 }}>
                      <div style={{ width: 10, height: 10, borderRadius: 5, background: '#ffb400', marginRight: 10 }}></div>
                      <span>{e.name}</span>
                    </div>
                    <div>
                      {e.data.map((el, il) =>
                        <div className="rowStartCenter" style={{ height: 65, padding: '0 13px', borderBottom: '1px solid #ddd' }}
                          onClick={(event) => this.showDetail(el.university_id, event)}
                          key={il}
                        >
                          <img src={el.badge} style={{ width: 40, marginRight: 20 }} />
                          <div style={{
                            fontSize: 16, color: '#75ca86', width: 85,
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden"
                          }}>{el.chinese_name}</div>
                          <div style={{ fontSize: 18, color: '#ddd', width: 50, textAlign: 'center' }}>{el.usnews_rank}</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            }
          </div>
        </div>
      )
    else
      return (
        <div></div>
      )
  }
}

export default componentName;