import React, {Component} from "react";
import {Link} from "react-router-dom";
import {ToggleLink} from "../ToggleLink";

export class CategoryNavigation extends Component {

	render = () => <React.Fragment>
		<ToggleLink to={ `${this.props.baseUrl}/all` } exact={ false }>ALL</ToggleLink>
		{this.props.categories && this.props.categories.map(cat =>
			<ToggleLink key={ cat } to={ `${this.props.baseUrl}/${cat.toLowerCase()}`}>
				{ cat }
			</ToggleLink>
		)}
	</React.Fragment>
}