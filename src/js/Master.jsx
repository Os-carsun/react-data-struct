"use strict";
/**
 * Master Component
 * the root component
 */
let React = require("react");
let { RouteHandler } = require("react-router");

class Master extends React.Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onChange(state) {
        this.setState(state);
    }


    render() {
        return (
            <div>
              <RouteHandler {...this.props} />
            </div>
        );
    }
}

Master.propTypes = {
  params: React.PropTypes.object.isRequired,
  query: React.PropTypes.object.isRequired
};

Master.contextTypes = {
  router: React.PropTypes.func.isRequired
};

Master.childContextTypes = {
  muiTheme: React.PropTypes.object
};

module.exports = Master;
