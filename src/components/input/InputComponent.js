import { Component } from 'react';
import { connect } from 'react-redux';

class InputComponent extends Component {
	render() {
		return <div data-testid='component-input'></div>;
	}
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(InputComponent);
