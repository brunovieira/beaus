import React, { Component } from 'react';
import ItemBeer from './ItemBeer';
import Service from './service';
import Pagination from './Pagination';


class ListBeer extends Component {

	constructor(props) {
    super(props);
    this.state = { 
			products: [],
			// searchValue: '', to list all products
			searchValue: `Beau's All Natural Brewing`,
			pager: {
				current_page: 1
			}
		};
		this.previusPage = this.previusPage.bind(this);
		this.nextPage = this.nextPage.bind(this);
	}
	
	componentWillMount (){
		this.search(this.state.pager.current_page);
	}

	search(page) {
		let self = this;
		Service.searchProduts(this.state.searchValue, page, products => {
			self.setState({
				products: products.result,
				pager: products.pager
			})
		});
	}

	previusPage() {
		this.search(this.state.pager.current_page-1);
	}

	nextPage() {
		this.search(this.state.pager.current_page+1);
	}

  render() {
		const listProduct = this.state.products.map( beer => <ItemBeer key={beer.id} beer={beer} />);
    return (
      <table className='ListBeer'>
				<tbody>
					{listProduct}
				</tbody>
				<Pagination cols='2' pager={this.state.pager} previusPage={this.previusPage} nextPage={this.nextPage}/>
			</table>
    );
	}
}

export default ListBeer;
