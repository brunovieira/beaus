import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemBeer extends Component {

	centsToDollar(cents) {
		const dollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents/100);
		return dollar;
	}

  render() {
		const classRow = `ItemBeerRow ${this.props.index%2 ? 'ItemBeerOdd' : 'ItemBeerEven'}`;
    return (
			<tr className={classRow} >
				<td with='40%'>
					<p>
						<Link to={`/detail/${this.props.beer.id}`} >{this.props.beer.name}</Link>
					</p>
				</td>
				<td with='40%'>
					<p>
						<Link to={`/detail/${this.props.beer.id}`} >{this.props.beer.tertiary_category ? this.props.beer.tertiary_category : this.props.beer.secondary_category}</Link>
					</p>
				</td>
				<td with='20%'>
					<p>
						<Link to={`/detail/${this.props.beer.id}`} >{this.centsToDollar(this.props.beer.price_in_cents)}</Link>
					</p>
				</td>
			</tr>
    );
  }
}

export default ItemBeer;
