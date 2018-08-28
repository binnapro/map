import React, { Component } from "react";
import "./app.less";
import Map from "./map.js";
import { Tabs } from "antd";
const TabPane = Tabs.TabPane;

class componentName extends Component {
  state = {
    step: 1
  };
  callBack = e => {
    this.setState({
      step: e
    });
  };
  render() {
    return (
      <div className="map-bk">
        {/* button */}
        <div style={{ width: 680, margin: "0 auto" }}>
          <div className="max-width">
            <div className="map-title">地图展示</div>
            <div className="row subCenter">
              <span className="title-type">选择学校排名:</span>
              <Tabs
                defaultActiveKey="1"
                onChange={this.callBack}
                className="myTabs"
              >
                <TabPane tab="1-25" key="1" />
                <TabPane tab="26-50" key="2" />
                <TabPane tab="51-75" key="3" />
                <TabPane tab="75-100" key="4" />
              </Tabs>
            </div>
            <div style={{ margin: "30px 0 26px" }}>
              <span className="title-type">选择学校:</span>
            </div>
          </div>
          <Map step={this.state.step} />
        </div>
        <div className="row mainCenter subCenter" style={{ marginTop: 45 }}>
          <div>新英格兰地区</div>
          <div className="map-bottom-button" />
          <div>大西洋沿岸</div>
          <div className="map-bottom-button-white" />
          <div>南部</div>
          <div className="map-bottom-button-grey" />
          <div>中西部</div>
          <div className="map-bottom-button-rou" />
          <div>西部</div>
          <div className="map-bottom-button-blue" />
        </div>
      </div>
    );
  }
}

export default componentName;
