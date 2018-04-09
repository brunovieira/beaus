import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    return this.props.pager.total_pages > 1 && (
			<tfoot className='Pagination'>
				<tr>
					<td colSpan={this.props.cols}>
						{!this.props.pager.is_first_page && <a onClick={this.props.previusPage.bind(this)}>Previus Page</a>}
						{!this.props.pager.is_first_page && !this.props.pager.is_final_page && <span> | </span>}
						{!this.props.pager.is_final_page && <a onClick={this.props.nextPage.bind(this)}>Next Page</a>}
					</td>
				</tr>
				<tr>
					<td colSpan={this.props.cols}>
					<span> Pages ( {this.props.pager.current_page} / {this.props.pager.total_pages} ) </span>
					<span> | </span>
					<span> Items ( {this.props.pager.current_page_record_count} / {this.props.pager.total_record_count} ) </span>
					</td>
				</tr>
			</tfoot>
    );
  }
}

export default Pagination;
