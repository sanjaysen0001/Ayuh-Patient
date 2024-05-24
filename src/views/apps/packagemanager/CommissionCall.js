import React from "react";
import { Row, Col, Label } from "reactstrap";
import axiosConfig from "../../../axiosConfig";

import { Eye, Edit, Trash2, ChevronDown } from "react-feather";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

class CommissionCall extends React.Component {
  state = {
    rowData: {},
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
      },

      {
        headerName: "Category Name",
        field: "category",
        filter: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.product?.category?.name}</span>
            </div>
          );
        },
      },

      {
        headerName: "Commission Name",
        field: "comision_name",
        filter: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.comision_name}</span>
            </div>
          );
        },
      },

      {
        headerName: "Product Name",
        field: "productname",
        filter: true,
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.product?.productname}</span>
            </div>
          );
        },
      },

      {
        headerName: "Commission Rate(%)",
        field: "comision_rate",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.comision_rate}</span>
            </div>
          );
        },
      },

      {
        headerName: "Status",
        field: "status",

        width: 100,
        cellRendererFramework: (params) => {
          return params.value === "Active" ? (
            <div className="badge badge-pill badge-success">
              {params.data.status}
            </div>
          ) : params.value === "Inactive" ? (
            <div className="badge badge-pill btn-primary">
              {params.data.status}
            </div>
          ) : null;
        },
      },

      {
        headerName: "Action",
        field: "sortorder",
        width: 200,
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
                        `/app/packagemanager/commissionview/${params.data._id}`
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
                        `/app/packagemanager/commissionedit/${params.data._id}`
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
                  this.gridApi.updateRowData({ remove: selectedData });
                }}
              />
            </div>
          );
        },
      },
    ],
  };
  async componentDidMount() {
    await axiosConfig.get(`/admin/getAdminEarnings`).then((response) => {
      let rowData = response.data.data;
      console.log(rowData);
      this.setState({ rowData });
    });
  }
  async runthisfunction(id) {
    console.log(id);
    await axiosConfig.get(`/admin/dltComision/${id}`).then((response) => {
      console.log(response);
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
      console.log(rowData),
      (
        <div>
          <Breadcrumbs
            breadCrumbTitle="Comission Set"
            breadCrumbParent="Home"
            breadCrumbActive="Comission Set "
          />

          <Row className="app-user-list">
            <Col sm="12"></Col>
            <Col sm="12">
              <Row className="m-2">
                <Col>
                  <h1 sm="6" className="float-left">
                    My Commission
                  </h1>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <div className="container text-center card justify-content-center">
                    <Label>
                      <h3 className="mt-1">Today Earn</h3>
                    </Label>
                    <h4>{this.state.rowData?.today} Rs</h4>
                  </div>
                </Col>
                <Col>
                  <div className="container text-center card justify-content-center">
                    <Label>
                      <h3 className="mt-1">Weekly Earn</h3>
                    </Label>
                    <h4>{this.state.rowData?.week} Rs</h4>
                  </div>
                </Col>
                <Col>
                  <div className="container text-center card justify-content-center">
                    <Label>
                      <h3 className="mt-1">Month Earn</h3>
                    </Label>
                    <h4>{this.state.rowData?.month} Rs</h4>
                  </div>
                </Col>
                <Col>
                  <div className="container text-center card justify-content-center">
                    <Label>
                      <h3 className="mt-1">Total Earn</h3>
                    </Label>
                    <h4>{this.state.rowData?.total} Rs</h4>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      )
    );
  }
}
export default CommissionCall;
