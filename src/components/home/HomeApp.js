import React from 'react';
import {Link, IndexLink} from 'react-router';

class HomeApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      example: props.params.example,
    };
  }

  componentDidMount() {
    HomeAPI.getExample().then(result => this.setState({
      example: result
    }));
  }

  render() {
    return (
      <div>
        Home component
      </div>
    );
  }
};

export default HomeApp;
