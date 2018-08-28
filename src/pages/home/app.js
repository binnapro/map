import React, { Component } from 'react';
import './app.less';
// import Map from './map.js';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class componentName extends Component {
	state = {
		step: 1
	}
	callBack = (e) => {
		this.setState({
			step: e
		})
	}
	back = () => {
		// 返回按钮
	}
	render() {
		return (
			<div className="map-bk" style={{ background: '#f8f8f8', width: '100%', height: '100%', }}>
				{/* button */}
				<div style={{ width: 680, margin: '0 auto' }}>
					<div style={{ width: '100%', height: 207, overflow: 'hidden' }}>
						<div style={{
							margin: '0 auto',
							height: 33,
							width: 91,
							lineHeight: '33px',
							marginTop: 20,
							marginBottom: 20,
							fontSize: 15,
							borderRadius: 8,
							background: '#75ca86',
							textAlign: 'center',
							color: '#fff'
						}}>地图展示</div>
						<div className="rowStartCenter">
							<div style={{ height: 12, width: 12, background: '#ffb400', borderRadius: 6, marginRight: 10 }}></div>
							<span style={{ fontSize: 17, color: '#a8a8a8', fontWeight: '300', marginRight: 35 }}>选择学校排名:</span>
							<Tabs defaultActiveKey="1" onChange={this.callBack} className="myTabs">
								<TabPane tab="1-25" key="1" />
								<TabPane tab="26-50" key="2" />
								<TabPane tab="51-75" key="3" />
								<TabPane tab="75-100" key="4" />
							</Tabs>
						</div>
						<div className="rowStartCenter" style={{ marginTop: 30, marginBottom: 26 }}>
							<div style={{ height: 12, width: 12, background: '#ffb400', borderRadius: 6, marginRight: 10 }}></div>
							<span style={{ fontSize: 17, color: '#a8a8a8', fontWeight: '300', marginRight: 35 }}>选择学校:</span>
						</div>
					</div>
					{/* <Map step={this.state.step} /> */}
				</div>
				<div className="rowCenterCenter" style={{ marginTop: 45 }}>
					<div>新英格兰地区</div>
					<div style={{ height: 8, borderRadius: 4, width: 48, background: '#ffa77e', margin: '0 18px' }}></div>
					<div>大西洋沿岸</div>
					<div style={{ height: 8, borderRadius: 4, width: 48, background: '#f7f1e6', margin: '0 18px' }}></div>
					<div>南部</div>
					<div style={{ height: 8, borderRadius: 4, width: 48, background: '#696b70', margin: '0 18px' }}></div>
					<div>中西部</div>
					<div style={{ height: 8, borderRadius: 4, width: 48, background: '#ffefc7', margin: '0 18px' }}></div>
					<div>西部</div>
					<div style={{ height: 8, borderRadius: 4, width: 48, background: '#7cd3d2', margin: '0 18px' }}></div>
				</div>
			</div>
		);
	}
}

export default componentName;