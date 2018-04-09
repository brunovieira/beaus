import React, { Component } from 'react';
import logoBeaus from './img/logo_beaus.svg';
import { Link } from 'react-router-dom';

class ItemBeer extends Component {
  render() {
		const img = this.props.beer.image_thumb_url ? this.props.beer.image_thumb_url : logoBeaus;
    return (
			<tr>
				<td className='ItemBeerImage'>
					<img src={img} alt={this.props.beer.name} />
				</td>
				<td className='ItemBeerContent'>
					<p>
						<Link to={`/detail/${this.props.beer.id}`} >{this.props.beer.name}</Link>
					</p>
				</td>
			</tr>
    );
  }
}

export default ItemBeer;
