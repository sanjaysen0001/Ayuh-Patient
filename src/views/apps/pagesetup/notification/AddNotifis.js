import React, { Component, useEffect, useState } from "react";
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
import Multiselect from "multiselect-react-dropdown";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";

function AddNotifis() {
  const [desc, setdesc] = useState("");
  const [rowData, setrowData] = useState([]);
  const [selectedValue, setselectedValue] = useState("");
  const [title, settitle] = useState("");
  const [userid, setuserid] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    axiosConfig.get(`/admin/alluser`).then((response) => {
      let rowData = response.data.data;
      console.log(rowData);
      setrowData(rowData);
    });
  }, []);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    setdesc(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let payload = {
      title: title,
      desc: desc,
      userid: userid,
    };

    axiosConfig
      .post("admin/add_notification", payload)
      .then((response) => {
        console.log(response.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        // this.props.history.push("/app/pagesetup/notification/notifiList");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const onSelect = (selectedList, selectedItem) => {
    // debugger;
    // console.log(selectedItem);
    // console.log(selectedList);
    // let fulname = selectedItem?.fullname;
    // console.log(fulname);
    // setselectedValue(fulname);
    var selectItem1 = [];
    for (var i = 0; i < selectedList.length; i++) {
      selectItem1.push(selectedList[i]._id);
    }
    console.log("aaaa", selectItem1);
    setselectedValue(selectItem1);
  };

  const onRemove = (selectedList, removedItem) => {
    console.log(removedItem, selectedList);
  };
  return (
    <div>
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
                Add Notifications
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
            <Form className="m-1" onSubmit={submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Title *</Label>
                  <Input
                    required
                    type="text"
                    name="title"
                    placeholder=""
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Select One User at a Time *</Label>
                  <Multiselect
                    required
                    placeholder="Select "
                    options={rowData} // Options to display in the dropdown
                    // selectedValues={selectedValue} // Preselected value to persist in dropdown
                    onSelect={onSelect}
                    onRemove={onRemove}
                    displayValue="fullname"
                  />
                </Col>
                <Row></Row>
                <Col lg="12" md="12" sm="12" className="mb-2">
                  <Label>Description</Label>
                  <Editor
                    toolbarClassName="demo-toolbar-absolute"
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
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
    </div>
  );
}

export default AddNotifis;
