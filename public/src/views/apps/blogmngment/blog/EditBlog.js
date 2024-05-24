import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  CustomInput,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import ReactHtmlParser from "react-html-parser";
import "react-toastify/dist/ReactToastify.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
export default class EditBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      blog_title: "",
      desc: "",
      blogcategory: "",
      blogImg: "",
      editorState: EditorState.createEmpty(),
      selectedFile: undefined,
      selectedName: "",
    };
    this.state = {
      categoryB: [],
    };
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
  // componentDidMount() {
  async componentDidMount() {
    axiosConfig
      .get("admin/all_blog_category")
      .then((response) => {
        console.log(response);
        this.setState({
          categoryB: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    let { id } = this.props.match.params;
    axiosConfig
      .get(`admin/viewoneBlog/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          blog_title: response.data.data.blog_title,
          desc: response.data.data.desc,
          blogImg: response?.data?.data?.blogImg,
          blogcategory: response?.data?.data?.blogcategory?.name,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  // onChangeHandler = (event) => {
  //   this.setState({ selectedFile: event.target.files[0] });
  //   this.setState({ selectedName: event.target.files.name });
  // };
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
    // console.log(e.target.value);
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    // name, status, desc,img
    const data = new FormData();
    data.append("blog_title", this.state.blog_title);
    data.append("desc", this.state.desc);
    data.append("blogcategory", this.state.blogcategory);
    data.append("status", this.state.status);

    // for (const file of this.state.selectedFile) {
    if (this.state.selectedFile !== null) {
      data.append("blogImg", this.state.selectedFile);
    }
    console.log(
      this.state.blog_title,
      this.state.desc,
      this.state.blogcategory,
      this.state.selectedFile
    );
    // }

    let { id } = this.props.match.params;
    axiosConfig
      // .post(`admin/edit_blog_cat/${id}`, data)
      .post(`admin/editBlog/${id}`, data)
      .then((response) => {
        console.log(response.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/blogmngment/blog/blogList");
      })
      .catch((error) => {
        console.log(error.response.data);
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
                <BreadcrumbItem href="/app/blogmngment/blog/blogList" tag="a">
                  Blog List
                </BreadcrumbItem>
                <BreadcrumbItem active>Edit Blog</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit One Blogs
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/blogmngment/blog/blogList")
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
                    name="blog_title"
                    placeholder=""
                    value={this.state.blog_title}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label> add Blog Image</Label>

                  <CustomInput
                    type="file"
                    // multiple
                    onChange={this.onChangeHandler}
                  />
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Blog Category</Label>

                  <CustomInput
                    type="select"
                    name="blogcategory"
                    value={this.state.blogcategory}
                    onChange={this.changeHandler}
                  >
                    <option>{this.state.blogcategory}</option>
                    <option>---select blog category---</option>
                    {this.state.categoryB?.map((allCategory) => (
                      <option value={allCategory?._id} key={allCategory?._id}>
                        {allCategory?.name}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <img
                    src={this.state.blogImg}
                    style={{ borderRadius: "10px" }}
                    width="200px"
                    height="200px"
                  />
                </Col>
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
                <div onChange={this.changeHandler1} className="mb-3">
                  <label>Active</label>
                  <input
                    defaultChecked
                    type="radio"
                    className="mx-2"
                    name="status"
                    value="Active"
                  />

                  <label>Deactive</label>
                  <input
                    type="radio"
                    name="status"
                    className="mx-2"
                    value="Deactive"
                  />
                </div>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update
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
