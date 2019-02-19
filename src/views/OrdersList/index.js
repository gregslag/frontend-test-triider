import React from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../store/ordersReducer/actions";
import PageTile from "../../components/PageTitle";

// import { Container } from './styles';

class OrdersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      filteredOrders: [],
      requests: []
    };
  }

  componentDidMount = async () => {
    await this.props.fetchOrders();
  };

  componentWillReceiveProps = async props => {
    const { requests } = props;
    await this.setState({ requests });

    const { filter } = this.state;
    this.filterOrders(filter);
  };

  filterOrders = filter => {
    const filteredOrders = this.state.requests.filter(r => r.status === filter);

    this.setState({ filteredOrders });
  };

  render() {
    return <PageTile>Meus Orçamentos</PageTile>;
  }
}

const mapStateToProps = state => ({
  requests: state.ordersReducer.data
});

export default connect(
  mapStateToProps,
  { fetchOrders }
)(OrdersList);
