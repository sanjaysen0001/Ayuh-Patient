import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";

import { ContextLayout } from "../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Eye, Edit, Trash2, ChevronDown } from "react-feather";

import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import swal from "sweetalert";

class AstrologerList extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    Commission: null,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 100,
        filter: true,
      },
      {
        headerName: "Image",
        field: "userimg",
        filter: false,
        width: 100,
        setColumnVisible: false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              {params.data.userimg && params.data.userimg.map((i) => (
                <img
               
                  className=" rounded-circle  mr-3"
                  src={i}
                  alt="user avatar"
                  height="40"
                  width="40"
                />
              ))}
            </div>
          );
        },
      },
      {
        headerName: "Name",
        field: "fullname",
        filter: true,
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.fullname}</span>
            </div>
          );
        },
      },

      {
        headerName: "Identity",
        field: "email	",
        filter: true,
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.email}</span>
            </div>
          );
        },
      },
      {
        headerName: "Phone No.",
        field: "mobile",
        filter: true,
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.mobile}</span>
            </div>
          );
        },
      },
      // {
      //   headerName: "Identity",
      //   field: "gender",
      //   filter: true,
      //   width: 120,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data.gender}</span>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "DOB",
      //   field: "dob",
      //   filter: true,
      //   width: 120,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data.dob}</span>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "Primary Skills",
      //   field: "primary_skills",
      //   filter: true,
      //   width: 120,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data.primary_skills}</span>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "All Skills",
      //   field: "all_skills",
      //   filter: true,
      //   width: 120,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data.all_skills}</span>
      //       </div>
      //     );
      //   },
      // },

      {
        headerName: "Exprience",
        field: "exp_in_years",
        filter: true,
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.exp_in_years}</span>
            </div>
          );
        },
      },
      // {
      //   headerName: "Language",
      //   field: "language",
      //   filter: true,
      //   width: 120,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data.language}</span>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "Call charge ",
      //   field: "callCharge",
      //   filter: true,
      //   width: 120,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data.callCharge}</span>
      //       </div>
      //     );
      //   },
      // },
      {
        headerName: "Status",
        field: "approvedstatus",
        filter: true,
        width: 100,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.approvedstatus}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.approvedstatus}
            </div>
          ) : null;
        },
      },

      // {
      //   headerName: "Status",
      //   field: "status",
      //   filter: true,
      //   width: 100,
      //   cellRendererFramework: (params) => {
      //     return params.value === "Online" ? (
      //       <div className="badge badge-pill badge-success">
      //         {params.data.status}
      //       </div>
      //     ) : params.value === "Offline" ? (
      //       <div className="badge badge-pill badge-warning">
      //         {params.data.status}
      //       </div>
      //     ) : null;
      //   },
      // },
      {
        headerName: "Action",
        field: "sortorder",
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              <Route
                render={({ history }) => (
                  <Eye
                    className="mr-50"
                    size="25px"
                    color="green"
                    onClick={() =>
                      history.push(
                        `/app/userride/viewUserRide/${params.data._id}`
                      )
                    }
                  />
                )}
              />
              <Route
                render={({ history }) => (
                  <Edit
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() =>
                      history.push(
                        `/app/astrology/editAstrologer/${params.data._id}`
                      )
                    }
                  />
                )}
              />
              <Trash2
                className="mr-50"
                size="25px"
                color="red"
                onClick={() => {
                  let selectedData = this.gridApi.getSelectedRows();
                  this.runthisfunction(params.data._id);
                  // this.gridApi.updateRowData({ remove: selectedData });
                }}
              />
            </div>
          );
        },
      },
    ],
  };
  async componentDidMount() {
    await axiosConfig.get("/admin/admin_astrop_list").then((response) => {
      let rowData = response.data.data;
      this.setState({ rowData });
    });
    await axiosConfig.get("/admin/viewoneCommision").then((response) => {
      let rowData = response?.data?.data?.admincomision;
      this.setState({ Commission: rowData });
    });
  }

  async runthisfunction(id) {
    swal(
      `Sure You Want To Delete It`,
      "Delete Or Cancel",

      {
        buttons: {
          cancel: "Cancel",
          catch: { text: "Delete ", value: "delete" },
        },
      }
    ).then((value) => {
      switch (value) {
        case "delete":
          axiosConfig.get(`/admin/dltAstro/${id}`).then(
            (response) => {
              this.componentDidMount();
              console.log(response);
            },
            (error) => {
              console.log(error);
            }
          );
          break;
        default:
          break;
      }
    });
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };
  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };
  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };
  handleAddCommistion = (e) => {
    if (this.state.Commission) {
      axiosConfig
        .post(`/admin/updateComision/64967ef62cf27fc5dd12416d`, {
          admincomision: this.state.Commission,
        })
        .then((res) => {
          console.log(res);
          if (res?.data?.message === "success") {
            swal("Commission Updated Succesfully");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Doctor"
          breadCrumbParent="Home"
          breadCrumbActive=" Doctor "
        />

        <Row className="app-user-list">
          <Col sm="12"></Col>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col lg="3">
                  <h1 sm="2" className="float-left">
                    Doctor List
                  </h1>
                </Col>

                {/* <Col>
                    <Route
                      render={({ history }) => (
                        <Button
                          className=" btn btn-success float-right"
                          onClick={() =>
                            history.push("/app/astrology/addAstrologer")
                          }
                        >
                          Add Doctor
                        </Button>
                      )}
                    />
                  </Col> */}
              </Row>
             {/*
              <div className="container">
                <Row>
                  <Col lg="3">
                    <h4 className="float-left">Set Admin Commission</h4>
                    <h6 className="float-left">
                      Present Commission :{" "}
                      {this.state.Commission && this.state.Commission} %
                    </h6>
                   
                  </Col>
                  <Col lg="4">
                    <input
                      onKeyDown={this.blockInvalidChar}
                      type="number"
                      value={this.state.Commission}
                      onChange={(e) =>
                        this.setState({ Commission: e.target.value })
                      }
                      className="form-control"
                    />
                  </Col>
                  <Col lg="3">
                    <Button onClick={this.handleAddCommistion} color="primary">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </div>
            */}
              <CardBody>
                {this.state.rowData === null ? null : (
                  <div className="ag-theme-material w-100 my-2 ag-grid-table">
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <div className="mb-1">
                        <UncontrolledDropdown className="p-1 ag-dropdown">
                          <DropdownToggle tag="div">
                            {this.gridApi
                              ? this.state.currenPageSize
                              : "" * this.state.getPageSize -
                                (this.state.getPageSize - 1)}{" "}
                            -{" "}
                            {this.state.rowData.length -
                              this.state.currenPageSize *
                                this.state.getPageSize >
                            0
                              ? this.state.currenPageSize *
                                this.state.getPageSize
                              : this.state.rowData.length}{" "}
                            of {this.state.rowData.length}
                            <ChevronDown className="ml-50" size={15} />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(20)}
                            >
                              20
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(50)}
                            >
                              50
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(100)}
                            >
                              100
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(134)}
                            >
                              134
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                      <div className="d-flex flex-wrap justify-content-between mb-1">
                        <div className="table-input mr-1">
                          <Input
                            placeholder="search..."
                            onChange={(e) =>
                              this.updateSearchQuery(e.target.value)
                            }
                            value={this.state.value}
                          />
                        </div>
                        <div className="export-btn">
                          <Button.Ripple
                            color="primary"
                            onClick={() => this.gridApi.exportDataAsCsv()}
                          >
                            Export as CSV
                          </Button.Ripple>
                        </div>
                      </div>
                    </div>
                    <ContextLayout.Consumer>
                      {(context) => (
                        <AgGridReact
                          gridOptions={{}}
                          rowSelection="multiple"
                          defaultColDef={defaultColDef}
                          columnDefs={columnDefs}
                          rowData={rowData}
                          onGridReady={this.onGridReady}
                          colResizeDefault={"shift"}
                          animateRows={true}
                          floatingFilter={false}
                          pagination={true}
                          paginationPageSize={this.state.paginationPageSize}
                          pivotPanelShow="always"
                          enableRtl={context.state.direction === "rtl"}
                        />
                      )}
                    </ContextLayout.Consumer>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default AstrologerList;
