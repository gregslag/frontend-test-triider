import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Container from "../../components/Container";
import PageTile from "../../components/PageTitle";
import StyledLink from "../../components/StyledLink";
import List from "../../components/List";
import RoundedImage from "../../components/RoundedImage";
import Button from "../../components/Button";
import Label from "../../components/Label";
import Card, {
  CardAvatar,
  CardContent,
  CardLabel
} from "../../components/Card";
import StarRating from "../../components/StarRating";
import Divider from "../../components/Divider";

import {} from "./styles";

class OrdersDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: null
    };
  }

  /* 
    Tive problemas com a sincronização do redux com o reac-router-dom.
    Para não perder tempo, "desviei o caminho"
  */
  componentWillReceiveProps = ({ location, orders }) => {
    const split = location.pathname.split("/");
    const id = split[split.length - 1];

    const order = orders.find(o => o.id === id);

    this.setState({ order });
  };

  render() {
    const order = this.state.order ? this.state.order : { quotes: [] };
    const contrated = order.quotes.find(q => q.hired);
    const quotes = order.quotes.filter(q => !q.hired);

    return (
      <Fragment>
        {contrated && (
          <Container>
            <PageTile>CONTRATADO:</PageTile>
            <List>
              <Card larger>
                <CardLabel size="small" background={"info"}>
                  CONTRATADO
                </CardLabel>
                <CardAvatar>
                  <RoundedImage
                    size="medium"
                    src={contrated.avatar}
                    alt={contrated.name}
                  />
                </CardAvatar>
                <CardContent>
                  <p>{contrated.name}</p>
                  <p>
                    <StarRating stars={contrated.stars} /> ({contrated.ratings})
                  </p>
                  <p>{contrated.servicesDone} negócios fechados</p>
                  <p>R$ {contrated.price.replace(".", ",")}</p>
                </CardContent>
              </Card>
            </List>
          </Container>
        )}
        <Container>
          <PageTile>{`${!contrated ? "ORÇAMENTOS" : ""} RECEBIDOS`}</PageTile>
          <List>
            {quotes.map((quote, index) => (
              <Card
                key={`quote-${index}-${quote.id}`}
                larger
                opacity={!!contrated}
              >
                <CardAvatar>
                  <RoundedImage
                    size="medium"
                    src={quote.avatar}
                    alt={quote.name}
                  />
                </CardAvatar>
                <CardContent>
                  <p>{quote.name}</p>
                  <p>
                    <StarRating stars={quote.stars} /> ({quote.ratings})
                  </p>
                  <p>{quote.servicesDone} negócios fechados</p>
                  <p>R$ {quote.price.replace(".", ",")}</p>
                </CardContent>
                <Divider />
                <StyledLink primary>
                  {!contrated ? "CONTRATAR" : "VER PERFIL"}
                </StyledLink>
              </Card>
            ))}
          </List>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ orders: state.ordersReducer.orders });

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(OrdersDetail)
);
