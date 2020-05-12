import React from "react";
import Alert from "react-bootstrap/Alert";

export default class AlertDismissible extends React.Component {
  state = {
    show: true,
  };
  render() {
    if (this.state.show) {
      return (
        <Alert
          variant={this.props.variant}
          onClose={() => this.setState({ show: false })}
          dismissible
        >
          <Alert.Heading>{this.props.header}</Alert.Heading>
        </Alert>
      );
    }
    return <React.Fragment></React.Fragment>;
  }
}
