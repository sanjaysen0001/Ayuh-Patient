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
import axiosConfig from "../../../../axiosConfig";
import axios from "axios";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Eye, Edit, Trash2, ChevronDown } from "react-feather";
//import classnames from "classnames";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb";
import swal from "sweetalert";

class PendingtestList extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
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
        // checkboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        // headerCheckboxSelection: true,
      },

      {
        headerName: "Test Category",
        field: "fullname",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.userid?.fullname}</span>
            </div>
          );
        },
      },



      {
        headerName: "Test Name",
        field: "productname",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.product?.product?.productname}</span>
            </div>
          );
        },
      },

      {
        headerName: "Patient Price",
        field: "price",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.product?.price}</span>
            </div>
          );
        },
      },

      {
        headerName: "Created By",
        field: "orderId",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params?.data?.orderId}</span>
            </div>
          );
        },
      },
      {
        headerName: "Date",
        field: "date",
        filter: true,
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params?.data?.date}</span>
            </div>
          );
        },
      },
      {
        headerName: "Status",
        field: "status",
        filter: true,
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params?.data?.status}</span>
            </div>
          );
        },
      },

        // {
        //   headerName: "Status",
        //   field: "status",
        //   filter: true,
        //   width: 100,
        //   cellRendererFramework: (params) => {
        //     return params.value === "true" ? (
        //       <div className="badge badge-pill badge-success">
        //         {params.data.status}
        //       </div>
        //     ) : params.value === "false" ? (
        //       <div className="badge badge-pill badge-warning">
        //         {params.data.status}
        //       </div>
        //     ) : null;
        //   },
        // },


      {
        headerName: "Action",
        field: "sortorder",
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              {/* <Route
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
              /> */}
              <Route
                render={({ history }) => (
                  <Edit
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() =>
                      history.push(
                        `/app/ordermanage/editorder/${params.data._id}`
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
  componentDidMount() {
    // let { id } = this.props.match.params;

    // await axios
    //   .get(`http://3.108.185.7:4000/user/view_onecust/${id}`)
    //   .then((response) => {
    //     let rowData = response.data.data;
    //     console.log(rowData);
    //     this.setState({ rowData });
    //   });

    axiosConfig.get("/admin/admin_product_Orderslist").then((response) => {
      this.setState({ rowData: response.data.data });
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
          axiosConfig
            .get(`/admin/dltOrder/${id}`)
            .then((response) => {
              this.componentDidMount();
              console.log(response);
            })
            .catch((err) => {
              console.log(err);
            });

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
  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Diagnostic Management"
          breadCrumbParent="Pending Test"
        //   breadCrumbActive="All Orders "
        />

        <Row className="app-user-list">
          <Col sm="12"></Col>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col>
                  <h1 sm="6" className="float-left">
                    Pending Test List
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
                        Add Orders
                      </Button>
                    )}
                  />
                </Col> */}
              </Row>
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
export default PendingtestList;
