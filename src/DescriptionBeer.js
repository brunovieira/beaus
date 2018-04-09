import React, { Component } from 'react';

class DescriptionBeer extends Component {

	centsToDollar(cents) {
		const dollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents/100);
		return dollar;
	}

	formatDate(date) {
		const formatDate = new Date(date);
		return formatDate.toLocaleDateString('en-US');
	}

  render() {
    return (
			<div>
				<div className='DetailHeader'>
					{this.props.product.name}
				</div>
				<div className='DetailBody'>
					<p>
						Price: {this.centsToDollar(this.props.product.price_in_cents)}
					</p>
					<p>
						Stock Type: {this.props.product.stock_type}
					</p>
					<p>
						Primary Category: {this.props.product.primary_category}
					</p>
					<p>
						Secondary Category: {this.props.product.secondary_category}
					</p>
					<p>
						Origin: {this.props.product.origin}
					</p>
					<p>
						Package: {this.props.product.package}
					</p>
					<p>
						Package Unit Type: {this.props.product.package_unit_type}
					</p>
					<p>
						Package Unit Volume in Milliliters: {this.props.product.package_unit_volume_in_milliliters}
					</p>
					<p>
						Total Package Units: {this.props.product.total_package_units}
					</p>
					<p>
						Volume in Milliliters: {this.props.product.volume_in_milliliters}
					</p>
					<p>
						Alcohol Content: {this.props.product.alcohol_content}
					</p>
					<p>
						Price per Liter of Alcohol: {this.centsToDollar(this.props.product.price_per_liter_of_alcohol_in_cents)}
					</p>
					<p>
						Price per Liter: {this.centsToDollar(this.props.product.price_per_liter_in_cents)}
					</p>
					<p>
						Description: {this.props.product.description}
					</p>
					<p>
						Serving Suggestion: {this.props.product.serving_suggestion}
					</p>
					<p>
						Tasting Note: {this.props.product.tasting_note}
					</p>
					<p>
						Updated At: {this.formatDate(this.props.product.updated_at)}
					</p>
					<p>
						Varietal: {this.props.product.varietal}
					</p>
					<p>
						Style: {this.props.product.style}
					</p>
					<p>
						Tertiary Category: {this.props.product.tertiary_category}
					</p>
				</div>
			</div>
    );
	}
}

export default DescriptionBeer;