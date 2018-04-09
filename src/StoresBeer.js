import React, { Component } from 'react';
import MapDirection from './MapDirection';
import Pagination from './Pagination';

class StoresBeer extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			stores: [],
			selectedStore: {},
			pager: {}
		};
	}

	componentDidMount (){
		this.setState({
			stores: this.props.stores,
			pager: this.props.pager
		});
	}

	shouldComponentUpdate(nextProps, nextState) {
		let self = this;
		if(nextProps.pager.current_page !== this.props.pager.current_page) {
			self.setState({
				stores: nextProps.stores,
				pager: nextProps.pager		
			});
		}
		return true;
	}

	selectStore(store) {
		this.setState({
			selectedStore: store
		})
	}

  render() {
    return (
			<div>
				<div className='ListStore'>
					<table>
						<tbody>
							<tr>
								<td>
									{this.state.stores ? this.state.stores.map(store => <div key={store.id}><a onClick={this.selectStore.bind(this, store)}>{store.name}</a></div>) : null}
								</td>
							</tr>
						</tbody>
						<Pagination cols='1' pager={this.state.pager} previusPage={this.props.previusPage} nextPage={this.props.nextPage}/>
					</table>
				</div>
				<div className='MapStore'>
					{this.state.selectedStore ? <MapDirection store={this.state.selectedStore} /> : null}
				</div>
			</div>
    );
	}
}

export default StoresBeer;