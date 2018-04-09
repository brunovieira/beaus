import React, { Component } from 'react';
import logoBeaus from './img/logo_beaus.svg';
import Service from './service';
import { Link } from 'react-router-dom';
import DescriptionBeer from './DescriptionBeer';
import StoresBeer from './StoresBeer';

class DetailBeer extends Component {

	constructor(props) {
    super(props);
    this.state = { 
			product: {},
			stores: [],
			selectedTab: '',
			selectedStore: {},
			pager: {}
		};
		this.previusPage = this.previusPage.bind(this);
		this.nextPage = this.nextPage.bind(this);
	}
	
	componentDidMount() {
		this.search('description', 1);	
	}

	search(tab, page) {
		let self = this;
		Service.searchStores(this.props.match.params.id, page, stores => {
			self.setState({
				stores: stores.result,
				product: stores.product,
				selectedTab: tab,
				pager: stores.pager
			})
		});
	}

	centsToDollar(cents) {
		const dollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents/100);
		return dollar;
	}

	formatDate(date) {
		const formatDate = new Date(date);
		return formatDate.toLocaleDateString('en-US');
	}

	selectTab(tab) {
		this.setState({
			selectedTab: tab
		})
	}

	previusPage() {
		this.search('stores', this.state.pager.current_page-1);
	}

	nextPage() {
		this.search('stores', this.state.pager.current_page+1);
	}

  render() {
		const img = this.state.product.image_thumb_url ? this.state.product.image_thumb_url : logoBeaus;
    return (
			<div>
				
				<table width='100%'>
					<thead>
						<tr>
							<td colSpan='2'>
								<Link to='/' >Home</Link>
								<span> | </span>
								<a onClick={this.selectTab.bind(this,'description')}>Description</a>
								<span> | </span>
								<a onClick={this.selectTab.bind(this,'stores')}>Stores</a>
							</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style={{width: `25%`}}>
								<img src={img} alt={this.state.product.name} className='DetailImg'/>
							</td>
							<td style={{width: `75%`}}>
                { this.state.selectedTab === 'description' ? 
									<DescriptionBeer product={this.state.product}/> : 
									<StoresBeer stores={this.state.stores} pager={this.state.pager} 
										previusPage={this.previusPage} nextPage={this.nextPage} />
								}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
    );
	}
}

export default DetailBeer;