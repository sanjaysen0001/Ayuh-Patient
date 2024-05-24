import React, { Component } from "react";
import Select from "react-select";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
export default class AddNotifi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      userid: "",
      desc: "",
      rowData: [],
      editorState: EditorState.createEmpty(),
    };
  }

  async componentDidMount() {
    await axiosConfig.get(`/admin/alluser`).then((response) => {
      let rowData = response.data.data;
      console.log(rowData);
      this.setState({ rowData });

      // let newdata = rowData?.map((ele) => {
      //   return ( label: { ele.fullname } )
      // });

      // console.log("new List ", newdata);
    });
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    let payload = {
      title: this.state.title,
      desc: this.state.desc,
      userid: this.state.userid,
    };
    axiosConfig
      .post("admin/add_notification", payload)

      .then((response) => {
        console.log(response.data);

        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/pagesetup/notification/notifiList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem
                  href="/app/pagesetup/notification/notifiList"
                  tag="a"
                >
                  Notification List
                </BreadcrumbItem>
                <BreadcrumbItem active>Add Notification</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Notification
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-success float-right"
                    onClick={() =>
                      history.push("/app/pagesetup/notification/notifiList")
                    }
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
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Title</Label>
                  <Input
                    required
                    type="text"
                    name="title"
                    placeholder=""
                    value={this.state.title}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Select User</Label>
                  <Input
                    required
                    type="text"
                    name="title"
                    placeholder=""
                    onChange={this.changeHandler}
                  ></Input>
                </Col> */}
                <Col md="6" sm="12">
                  <Label>Select User</Label>

                  <select
                    className="form-control"
                    value={this.state.userid}
                    name="userid"
                    onChange={this.changeHandler}
                    id="usreid"
                  >
                    <option value="volvo">Select User</option>

                    {this.state.rowData?.map((value, index) => (
                      <option key={index} value={value?._id}>
                        {value?.fullname}
                      </option>
                    ))}
                  </select>
                  {/* <Select
                    className="React"
                    classNamePrefix="select"
                    defaultValue={this.state.rowData[1]}
                    name="clear"
                    options={this.state.rowData}
                    isClearable={true}
                  /> */}
                </Col>
                <Row></Row>
                <Col lg="12" md="12" sm="12" className="mb-2">
                  <Label>Description</Label>
                  <Editor
                    toolbarClassName="demo-toolbar-absolute"
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    editorState={this.state.editorState}
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                      options: [
                        "inline",
                        "blockType",
                        "fontSize",
                        "fontFamily",
                      ],
                      inline: {
                        options: [
                          "bold",
                          "italic",
                          "underline",
                          "strikethrough",
                          "monospace",
                        ],
                        bold: { className: "bordered-option-classname" },
                        italic: { className: "bordered-option-classname" },
                        underline: { className: "bordered-option-classname" },
                        strikethrough: {
                          className: "bordered-option-classname",
                        },
                        code: { className: "bordered-option-classname" },
                      },
                      blockType: {
                        className: "bordered-option-classname",
                      },
                      fontSize: {
                        className: "bordered-option-classname",
                      },
                      fontFamily: {
                        className: "bordered-option-classname",
                      },
                    }}
                  />
                  <br />
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add
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
