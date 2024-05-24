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
  CustomInput,
} from "reactstrap";

import axiosConfig from "../../axiosConfig";

// import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";
import { data } from "jquery";
import swal from "sweetalert";
export class ReplyAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Answer: "",
      ViewoneQ: {},
      newQ: [],
    };
    this.state = {
      eventN: [],
    };
  }

  handleSubmitAnswer = (e, value) => {
    console.log(value);
    e.preventDefault();
    let payload = {
      reply: this.state.Answer,
    };

    axiosConfig
      .post(`/user/ticketReply/${value?.ticketNo}`, payload)
      .then((res) => {
        console.log(res.data.data);
        swal("Sucessfully", "Answer Given");
        this.setState({ Answer: "" });
      })
      .catch((err) => {
        console.log(err);
        swal("Something went wrong");
      });
  };

  async componentDidMount() {
    console.log(this.props?.location.state);
    const viewone = this.props?.location.state;
    this.setState({ ViewoneQ: viewone });
    axiosConfig
      .get(`/user/CmntByTicketNo/${viewone?.ticketNo}`)
      .then((res) => {
        console.log(res?.data.data);
        this.setState({ newQ: res?.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
    // let { id } = this.props.match.params;
    // axiosConfig
    //   .get(`/user/getone_ask_qus/${id}`)

    //   .then((res) => {
    //     console.log(res?.data?.data);
    //     this.setState({ Data: res?.data?.data });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                You Got Question
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/askQuestionList")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Row>
              <Col lg="6" md="6" sm="12" className="mb-2">
                <h6>Question :</h6>
                <h6>{this.state.ViewoneQ?.desc} ?</h6>
              </Col>

              <Col lg="6" md="6" sm="12" className="mb-2">
                <Label>Your Answer</Label>
                <Input
                  required
                  type="text"
                  name="Answer"
                  placeholder="Enter Price Online"
                  value={this.state.Answer}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
            </Row>

            {this.state.newQ && (
              <>
                {this.state.newQ?.map((value, i) => (
                  <div className="py-2">
                    <div key={i}>
                      Question: <b>{value?.desc}</b> ?
                    </div>
                  </div>
                ))}
              </>
            )}

            <Row>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Button
                  onClick={(e) =>
                    this.handleSubmitAnswer(e, this.state.ViewoneQ)
                  }
                  color="primary"
                  className="mr-1 mb-1"
                >
                  Save
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default ReplyAnswer;
