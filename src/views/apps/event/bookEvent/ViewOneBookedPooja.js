import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Container,
} from "reactstrap";
import "../../../../assets/scss/pages/app-ecommerce-shop.scss";
import { Route } from "react-router-dom";
import axiosConfig from "../../../../axiosConfig";
import ReactHtmlParser from "react-html-parser";
import swal from "sweetalert";
class ViewOneBookedPooja extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Status: "",
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/getOneBookedPuja/${id}`)
      .then((response) => {
        // console.log(response.data);
        console.log(response.data.data);
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  handleUpdate = (e, data) => {
    e.preventDefault();
    let payload = {
      status: this.state.Status,
    };
    axiosConfig
      .post(`/admin/updatePujaStatus/${data?._id}`, payload)
      .then((res) => {
        console.log(res.data.data);
        swal("Status Updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                    Booked Event View and Update
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
                  View/Update Booked Event
                </h1>
              </Col>
              <Col>
                <Route
                  render={({ history }) => (
                    <Button
                      className=" btn btn-danger float-right"
                      onClick={() =>
                        history.push("/app/event/bookEvent/bookedpoojalist")
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
                    {this.state.data?.pujaId?.pooja_type?.pooja_name}
                  </h6>
                </Col>
                <Col md="6" sm="12" className="mb-4">
                  <h4>pooja Image</h4>
                  <img
                    style={{ borderRadius: "12px" }}
                    width="200px"
                    height="150px"
                    src={this.state.data?.pujaId?.poojaimg}
                    alt="image"
                  />
                </Col>
                {/* <Col md="6" sm="12" className="mb-4">
                  <h4>Price OnLine</h4>
                  <h6 className=""> {this.state.data.price_online}</h6>
                </Col> */}
                <Col md="6" sm="12" className="mb-4">
                  <h4>Address Of Event</h4>
                  <h6 className=""> {this.state.data?.address}</h6>
                </Col>
                <Col md="6" sm="12" className="mb-4">
                  <h4>Date Of Event</h4>
                  <h6 className=""> {this.state.data?.date}</h6>
                </Col>
                <Col md="6" sm="12" className="mb-4">
                  <h4>Slots</h4>
                  <h6 className=""> {this.state.data?.slots} </h6>
                </Col>
                <Col md="6" sm="12" className="mb-4">
                  <h4>Presesnt Status</h4>
                  <h6 className=""> {this.state.data?.status} </h6>
                </Col>
                <Col md="6" sm="12" className="mb-4">
                  <h4>Price</h4>
                  <h6 className="">
                    {" "}
                    {this.state.data?.pujaId?.pooja_price} Rs
                  </h6>
                </Col>
                <Col md="6" sm="12" className="mb-4">
                  <h4>Mode</h4>
                  <h6 className=""> {this.state.data?.pujaId?.mode} </h6>
                </Col>

                <Col md="6" sm="12" className="mb-4">
                  <h4>LiveStreaming</h4>
                  <h6 className="">
                    {" "}
                    {this.state.data?.pujaId?.liveStreaming === true
                      ? "Available"
                      : "Not Available"}{" "}
                  </h6>
                </Col>
                <Col md="6" sm="12" className="mb-4">
                  <h4>Total Amount</h4>
                  <h6 className=""> {this.state.data?.totalamt} Rs</h6>
                </Col>

                <Col md="6" sm="12" className="mb-4">
                  <h4>Duration</h4>
                  <h6 className="">
                    {" "}
                    {ReactHtmlParser(this.state.data?.pujaId?.duration)}
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
                    {ReactHtmlParser(
                      this.state.data?.pujaId?.fullfill_location
                    )}
                  </h6>
                </Col>
                <Col md="6" sm="12" className="mb-4">
                  <label for="cars">Update Status</label>

                  <select
                    onChange={(e) => this.setState({ Status: e.target.value })}
                    className="form-control"
                    name="UpdateStatus"
                    id="UpdateStatus"
                  >
                    <option value="Reject">Reject</option>
                    <option value="Assigned">Assigned</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                  </select>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Container className="mb-2">
                    <Button
                      onClick={(e) => this.handleUpdate(e, this.state.data)}
                      size="md"
                      color="primary"
                    >
                      Update Status
                    </Button>
                  </Container>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}
export default ViewOneBookedPooja;
