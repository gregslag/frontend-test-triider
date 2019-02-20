import React, { Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { MdHistory } from "react-icons/md";

import { connect } from "react-redux";
import { fetchOrders } from "../../store/ordersReducer/actions";

import PageTile from "../../components/PageTitle";
import StyledLink from "../../components/StyledLink";
import Box from "../../components/Box";
import List from "../../components/List";
import RoundedImage from "../../components/RoundedImage";
import Button from "../../components/Button";
import Label from "../../components/Label";
import Card, { CardAvatar, CardContent } from "../../components/Card";
import StarRating from "../../components/StarRating";
import Container from "../../components/Container";
import Divider from "../../components/Divider";

import {
  Slider,
  TitleWrapper,
  TitleBoxWrapper,
  ImagesWrapper,
  QuotesWrapper,
  Number
} from "./styles";

class OrdersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "open"
    };
  }

  componentDidMount = async () => {
    await this.props.fetchOrders();
  };

  filter = filter => {
    this.setState({ filter });
  };

  getMessageQuotes = number => {
    const { filter } = this.state;

    if (filter === "open") {
      if (number > 0) return `Você já tem ${number} orçamentos!`;
      else return `Aguardando orçamentos`;
    } else {
      if (number > 0) return `Você teve ${number} orçamentos!`;
      else return `Você não teve orçamentos :(`;
    }
  };

  getLabelColor = status => {
    switch (status) {
      case "contratado":
        return "info";
      case "cancelado":
        return "danger";
      default:
        return "success";
    }
  };

  render() {
    const { orders = { open: [], completed: [], canceled: [] } } = this.props;
    const { filter } = this.state;
    return (
      <Container>
        <TitleWrapper>
          <PageTile>Meus Orçamentos</PageTile>
          <Slider>
            <StyledLink
              active={filter === "open"}
              onClick={() => this.filter("open")}
            >
              Abertos ({orders.open.length})
            </StyledLink>
            <StyledLink
              active={filter === "completed"}
              onClick={() => this.filter("completed")}
            >
              Finalizados ({orders.completed.length})
            </StyledLink>
            <StyledLink
              active={filter === "canceled"}
              onClick={() => this.filter("canceled")}
            >
              Cancelados ({orders.canceled.length})
            </StyledLink>
          </Slider>
        </TitleWrapper>

        <List>
          {orders[filter].map((order, index) => (
            <Box key={`order-${index}-${order.id}`}>
              <TitleBoxWrapper>
                <h3>{order.serviceName}</h3>
                {order.status === "" ? (
                  <p>Validade: 5 dias</p>
                ) : (
                  <Label
                    size="small"
                    background={this.getLabelColor(order.status)}
                  >
                    {order.status.toUpperCase()}
                  </Label>
                )}
              </TitleBoxWrapper>

              <Divider />

              <QuotesWrapper>
                {!order.quotes.some(q => q.hired) ? (
                  <Fragment>
                    <ImagesWrapper>
                      {order.quotes.length === 0 ? (
                        <Fragment>
                          <MdHistory size={50} />
                        </Fragment>
                      ) : (
                        <Fragment>
                          {order.quotes.slice(0, 3).map((quote, index) => (
                            <RoundedImage
                              size="medium"
                              src={quote.avatar}
                              alt={quote.name}
                              key={`quote-${index}-${quote.id}`}
                            />
                          ))}
                          {order.quotes.length > 3 && (
                            <Number>+{order.quotes.length - 3}</Number>
                          )}
                        </Fragment>
                      )}
                    </ImagesWrapper>
                    <p>{this.getMessageQuotes(order.quotes.length)}</p>
                  </Fragment>
                ) : (
                  <Card>
                    <CardAvatar>
                      <RoundedImage
                        size="medium"
                        src={order.quotes.find(o => o.hired).avatar}
                        alt={order.quotes.find(o => o.hired).name}
                      />
                    </CardAvatar>
                    <CardContent>
                      <p>{order.quotes.find(o => o.hired).name}</p>
                      <p>
                        <StarRating
                          stars={order.quotes.find(o => o.hired).stars}
                        />{" "}
                        ({order.quotes.find(o => o.hired).ratings})
                      </p>
                    </CardContent>
                  </Card>
                )}
              </QuotesWrapper>

              <Link to={`/orcamentos/${order.id}`}>
                <Button size="larger">
                  {order.quotes.length === 0
                    ? "VER DETALHES"
                    : "VER ORÇAMENTOS"}
                </Button>
              </Link>
            </Box>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  orders: {
    open: state.ordersReducer.orders.filter(
      r => r.status === "" || r.status === "contratado"
    ),
    completed: state.ordersReducer.orders.filter(
      r => r.status === "finalizado"
    ),
    canceled: state.ordersReducer.orders.filter(r => r.status === "cancelado")
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchOrders }
  )(OrdersList)
);
