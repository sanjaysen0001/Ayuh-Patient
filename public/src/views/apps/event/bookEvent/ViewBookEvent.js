import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import "../../../../assets/scss/pages/app-ecommerce-shop.scss";
import { Route } from "react-router-dom";
import axiosConfig from "../../../../axiosConfig";
import ReactHtmlParser from "react-html-parser";
class ViewHoroscopeCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/admin_getone_event/${id}`)
      .then((response) => {
        // console.log(response.data);
        console.log(response.data.data);
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Row>
            <Col sm="12">
              <div>
                <Breadcrumb listTag="div">
                  <BreadcrumbItem href="/analyticsDashboard" tag="a">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbItem
                    href="/app/event/bookEvent/bookEventList"
                    tag="a"
                  >
                    Book Event List
                  </BreadcrumbItem>
                  <BreadcrumbItem active>View Book Event</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
          <Card className="overflow-hidden app-ecommerce-details">
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  View Book Event
                </h1>
              </Col>
              <Col>
                <Route
                  render={({ history }) => (
                    <Button
                      className=" btn btn-danger float-right"
                      onClick={() =>
                        history.push("/app/event/bookEvent/bookEventList")
                      }
                    >
                      Back
                    </Button>
                  )}
                />
              </Col>
            </Row>
            <CardBody className="pb-0">
              <Row className="mb-5 mt-2">
                <Col md="6" sm="12" className="mb-4">
                  <h4>Event Name</h4>
                  <h6 className="">
                    {" "}
                    {this.state.data?.pooja_type?.pooja_name}
                  </h6>
                </Col>
                {/* <Col md="6" sm="12" className="mb-4">
                  <h4>Price OnLine</h4>
                  <h6 className=""> {this.state.data.price_online}</h6>
                </Col> */}
                <Col md="6" sm="12" className="mb-4">
                  <h4>City</h4>
                  <h6 className=""> {this.state.data?.city}</h6>
                </Col>
                <Col md="6" sm="12" className="mb-4">
                  <h4>Price</h4>
                  <h6 className=""> {this.state.data?.pooja_price} Rs</h6>
                </Col>

                <Col md="6" sm="12" className="mb-4">
                  <h4>Duration</h4>
                  <h6 className="">
                    {" "}
                    {ReactHtmlParser(this.state.data?.duration)}
                  </h6>
                </Col>
                <Col md="6" sm="12" className="mb-4">
                  <h4>Description</h4>
                  <h6 className=""> {ReactHtmlParser(this.state.data.desc)}</h6>
                </Col>
                <Col md="6" sm="12" className="mb-4">
                  <h4>Fulfil Location</h4>
                  <h6 className="">
                    {" "}
                    {ReactHtmlParser(this.state.data?.fullfill_location)}
                  </h6>
                </Col>
                <Col md="6" sm="12" className="mb-4">
                  <h4>pooja Image</h4>
                  <img
                    width="250px"
                    src={this.state.data?.poojaimg}
                    alt="image"
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}
export default ViewHoroscopeCategory;
