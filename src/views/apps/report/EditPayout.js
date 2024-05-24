import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";

import swal from "sweetalert";
export class EditPayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Viewone: {},
      status: "",
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    console.log(id);
    axiosConfig
      .get(`/user/getonePayout/${id}`)
      .then((res) => {
        console.log(res.data.data);
        this.setState({ Viewone: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //   changeHandler = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };
  changeHandler1 = (e) => {
    console.log(e.target.value);
    this.setState({ status: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.Viewone?.reqsted_amt);
    console.log(this.state.status);
    if (this.state.status) {
      let payload = {
        // astroId: this.state.Viewone?.astroId?._id,
        // status: this.state.status,
        // amount: this.state.Viewone?.payout_amt,
        // payoutlist: this.state.Viewone?._id,
        payout_amt: this.state.Viewone?.reqsted_amt,
        status: this.state.status,
      };
      axiosConfig
        .post(`/admin/pay_withdrawal/${this.state.Viewone?._id}`, payload)
        .then((response) => {
          console.log(response.data);
          swal("Success!", "Submitted SuccessFull!", "success");
          this.props.history.push("/app/report/payoutlist");
        })
        .catch((error) => {
          console.log(error);
        });
    } else swal("Update Status");
  };
  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Add  Puja"
          breadCrumbParent=" home"
          breadCrumbActive="Add  Puja"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Update Payout
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/report/payoutlist")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="3" md="3" sm="12" className="mb-2">
                  <Label> Doctor Name </Label>
                  <Input
                    disabled
                    type="text"
                    name="pooja_name"
                    placeholder="Enter Pooja Name"
                    value={this.state.Viewone?.astroId?.fullname}
                    // onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="3" md="3" sm="12" className="mb-2">
                  <Label> Doctor Amount </Label>
                  <Input
                    disabled
                    type="text"
                    name="pooja_name"
                    placeholder="Enter Pooja Name"
                    value={this.state.Viewone?.astroId?.ownamount}
                    // onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="3" md="3" sm="12" className="mb-2">
                  <Label> Amount Status </Label>
                  <Input
                    disabled
                    type="text"
                    name="pooja_name"
                    placeholder="Enter Pooja Name"
                    value={this.state.Viewone?.status}
                    // onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="3" md="3" sm="12" className="mb-2">
                  <Label> Requested Amount </Label>
                  <Input
                    disabled
                    type="text"
                    name="pooja_name"
                    placeholder="Enter Pooja Name"
                    value={this.state.Viewone?.payout_amt}

                    // onChange={this.changeHandler}
                  ></Input>
                </Col>
              </Row>
              <Row>
                <h3 className="mt-2 mb-2 mx-1">Update Status</h3>
              </Row>

              {/* <Row>
                <Col lg="3" md="3" sm="12" className="mb-2">
                  <input type="radio" id="age1" name="age" value="Approved" />
                  <label for="age1">Approved</label>
                  <br></br>
                </Col>
                <Col lg="3" md="3" sm="12" className="mb-2">
                  <input type="radio" id="age1" name="age" value="Pending" />
                  <label for="age1">Pending</label>
                  <br></br>
                </Col>
                <Col lg="3" md="3" sm="12" className="mb-2">
                  <input type="radio" id="age1" name="age" value="Success" />
                  <label for="age1">Success</label>
                  <br></br>
                </Col>
              </Row> */}
              <Row>
                <Col lg="8" md="8" sm="8" className="mb-2">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler1(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Approved"
                    />
                    <span style={{ marginRight: "20px" }}>Approved</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Pending"
                    />
                    <span style={{ marginRight: "3px" }}>Pending</span>

                    <input
                      style={{ marginRight: "3px", marginLeft: "8px" }}
                      type="radio"
                      name="status"
                      value="Cancel"
                    />
                    <span style={{ marginRight: "3px", marginLeft: "8px" }}>
                      Cancel
                    </span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Save
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default EditPayout;
