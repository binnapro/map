import React, { Component } from 'react';
import './Detail.less'
import {
	Tabs,
} from 'antd';
const TabPane = Tabs.TabPane;
import {
	post, api
} from "../utils/request";

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			loading: true,
			detail: {
				test_requirements: []
			}
		};
	}

	componentDidMount() {
		post(api.getSchoolDetail, {
			university_id:window.location.search.slice(1).split("=")[1]
		})
			.then(response => {
				const res = response.data;
				if(res.status == 'success') {
					this.setState({detail: res.data})
					setTimeout(()=>this.setState({loading: false}), 400)
				}
			})
	}

	render() {
		const {detail} = this.state;
		const schoolDatas = detail.university_data;

		const requires = detail.test_requirements || [];
		const {clientWidth, clientHeight} = document.body;
		const infos = detail.extra || [];
		const height = document.body.clientHeight;
		return this.state.loading ? (
			<div style={{width:clientWidth, height:clientHeight, display:'flex', alignItems:'center', justifyContent:'center'}}>
				<img
					style={{width:'100px'}}
					src={"http://university-apply-book.applan.org/loading.gif"} />
			</div>
		):(
					<div className="detail-container">
						<div className="school-intro">
							<div className="school-img">
								<img src={detail.photo_url} />
							</div>
							<div className="school-intro-text">
								<div className="school-name">
									{detail.chinese_name} <span>{detail.primitive_name}</span>
								</div>
								<div className="school-detail">
									{detail.overview}
								</div>
							</div>
						</div>

						<div className="school-data">
							<Title title="学校数据" />
							<div className="data-item-container">
								{
									schoolDatas.map((e, i)=>(
										<div className="data-item" key={i} >
											<div className="value" style={{padding:e.type == '学校性质'?'10px':null}}>{e.value}</div>
											<div className="type">{e.type}</div>
										</div>
									))
								}
							</div>
						</div>

						<div className="exam-require">
							<Title title="考试要求" />
							<div className="require-item-container">
								{
									requires.map((e, i)=>(
										<div className="require-item" key={i}>
											<div className="type">{e.type}</div>
											<div className="value">{e.value}</div>
										</div>
									))
								}
							</div>
						</div>

						<div className="waterfall">
							{
								infos.map((e, i) => (
									<div className="waterfall-item" key={i}>
										<Title title={e.title} />
										<div className="waterfall-content">
											{e.content}
										</div>
									</div>
								))
							}
						</div>
					</div>
		)
	}
}

const Title = props => (
	<div className="section-title">
		<div className="circle"/>
		{props.title}
	</div>
)