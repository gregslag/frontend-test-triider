import React from "react";
import { connect } from "react-redux";
import { fetchRequests } from "../../store/requestReducer/actions";
import PageTile from "../../components/PageTitle";

// import { Container } from './styles';

class RequestsList extends React.Component {
  componentDidMount() {
    this.props.fetchRequests();
  }

  render() {
    return <PageTile>Meus Orçamentos</PageTile>;
  }
}

const mapStateToProps = state => ({
  requests: state.requestReducer.data
});

export default connect(
  mapStateToProps,
  { fetchRequests }
)(RequestsList);
