// import React from "react";
// import { Row, Col, Card, CardTitle, CardText, CardBody } from "reactstrap";

// import axiosConfig from "../../../axiosConfig";
// import "../../../assets/scss/pages/dashboard-analytics.scss";

// import * as Icon from "react-feather";
// import TodayAstrologerList from "../../apps/dashboardlist/TodayAstrologerList";
// import TodayCustomerList from "../../apps/dashboardlist/TodayCustomerList";
// import TodayRechargeList from "../../apps/dashboardlist/TodayRechargeList";
// import TodayCallHistory from "../../apps/dashboardlist/TodayCallHistory";

// class AnalyticsDashboard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Allplans: "",
//       adminearning: "",
//       rechargelist: "",
//       packageoffer: "",
//       completecall: "",
//       failed: "",
//       Rejected: "",
//       userCount: "",
//       AstroCount: "",
//       OfflineAstroCount: "",
//       busyAstroCount: "",
//       ActiveUser: "",
//       InActiveUser: "",
//     };
//   }

//   componentDidMount() {
//     axiosConfig.get(`/user/userCount`).then((res) => {
//       this.setState({ userCount: res?.data?.count });
//     });
//     axiosConfig.get(`/user/onlineAstroCount`).then((res) => {
//       this.setState({ AstroCount: res?.data?.count });
//     });
//     axiosConfig.get(`/user/offlineAstroCount`).then((res) => {
//       this.setState({ OfflineAstroCount: res?.data?.count });
//     });
//     axiosConfig.get(`/user/busyAstroCount`).then((res) => {
//       this.setState({ busyAstroCount: res?.data?.count });
//     });
//     axiosConfig.get(`/user/inActiveUserCount`).then((res) => {
//       this.setState({ InActiveUser: res?.data?.count });
//     });
//     axiosConfig.get(`/user/activeUserCount`).then((res) => {
//       this.setState({ ActiveUser: res?.data?.count });
//     });
//     axiosConfig.get(`/admin/adminCallHistory`).then((response) => {
//       let callhistory = response.data.data;
//       const completecall = callhistory.filter(
//         (value) => value?.Status === "completed"
//       );
//       const failed = callhistory.filter((value) => value?.Status === "failed");
//       const Rejected = callhistory.filter(
//         (value) => value?.Status === "rejected"
//       );

//       this.setState({ completecall: completecall?.length });
//       this.setState({ failed: failed?.length });
//       this.setState({ Rejected: Rejected?.length });
//     });
//     axiosConfig.get("/admin/allplans").then((response) => {
//       let Allplans = response.data?.data?.length;
//       // console.log(Allplans);
//       this.setState({ Allplans });
//     });
//     axiosConfig.get("/user/recharge_list").then((response) => {
//       let rechargelist = response.data?.data?.length;
//       // console.log(rechargelist);
//       this.setState({ rechargelist });
//     });
//     axiosConfig.get("/admin/getPackage").then((response) => {
//       let packageoffer = response.data?.data?.length;
//       // console.log(packageoffer);
//       this.setState({ packageoffer });
//     });
//     axiosConfig.get(`/admin/getAdminEarnings`).then((response) => {
//       let adminearning = response.data.data?.total;
//       // console.log(adminearning);
//       this.setState({ adminearning });
//     });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Card>

//           <CardTitle className="ast-3">Dashboard</CardTitle>
//           <hr></hr>

//           <CardBody>
//             <Row className="match-height">

//               <Col md="4" className="mt-1 mb-1">
//                 <div className="bg-s">
//                   <span className="ast-1">
//                     <Icon.FileText size={40} className="mr-50" />
//                   </span>
//                   <h2 className="ast-2">
//                     Total Appointment
//                     <span className="ast-4">{this.state.ActiveUser}</span>
//                   </h2>
//                 </div>
//               </Col>

//               <Col md="4" className="mt-1 mb-1">
//                 <div style={{backgroundColor:'teal'}} className="bg-p">
//                   <span className="ast-1">
//                     <Icon.Users size={40} className="mr-50" />
//                   </span>
//                   <h2 className="ast-2">
//                  Total Prescription
//                     <span className="ast-4">{this.state.InActiveUser}</span>
//                   </h2>
//                 </div>
//               </Col>
//               <Col md="4" className="mt-1 mb-1">
//               <div style={{backgroundColor:'violet'}} className="bg-p">
//                 <span className="ast-1">
//                   <Icon.Mail size={40} className="mr-50" />
//                 </span>
//                 <h2 className="ast-2">
//                Today SMS
//                   <span className="ast-4">{this.state.InActiveUser}</span>
//                 </h2>
//               </div>
//             </Col>
//               <Col md="4" className="mt-1 mb-1">
//                 <div style={{backgroundColor:'orange'}} className="bg-p">
//                   <span className="ast-1">
//                     <Icon.Mail size={40} className="mr-50" />
//                   </span>
//                   <h2 className="ast-2">
//                  Total SMS
//                     <span className="ast-4">{this.state.InActiveUser}</span>
//                   </h2>
//                 </div>
//               </Col>
//               <Col md="4" className="mt-1 mb-1">
//               <div style={{backgroundColor:'tan'}} className="bg-p">
//                 <span className="ast-1">
//                   <Icon.Mail size={40} className="mr-50" />
//                 </span>
//                 <h2 className="ast-2">
//                Custom SMS
//                   <span className="ast-4">{this.state.InActiveUser}</span>
//                 </h2>
//               </div>
//             </Col>
//             <Col md="4" className="mt-1 mb-1">
//               <div style={{backgroundColor:'steelblue'}} className="bg-p">
//                 <span className="ast-1">
//                   <Icon.Mail size={40} className="mr-50" />
//                 </span>
//                 <h2 className="ast-2">
//                Send Total Email
//                   <span className="ast-4">{this.state.InActiveUser}</span>
//                 </h2>
//               </div>
//             </Col>

//             </Row>
//           </CardBody>
//         </Card>



//         {/* call management counter */}



//         {/* Earning management counter */}




//         {/* <Row>
//           <Col sm="12">
//             <TodayAstrologerList />
//           </Col>
//           <Col sm="12">
//             <TodayCustomerList />
//           </Col>
//           <Col sm="12">
//             <TodayRechargeList />
//           </Col>
//           <Col sm="12">
//             <TodayCallHistory />
//           </Col>
//         </Row> */}
//       </React.Fragment>
//     );
//   }
// }

// export default AnalyticsDashboard;



import React from "react"
import { Row, Col } from "reactstrap"
import SubscribersGained from "../../ui-elements/cards/statistics/SubscriberGained"
import RevenueGenerated from "../../ui-elements/cards/statistics/RevenueGenerated"
import QuaterlySales from "../../ui-elements/cards/statistics/QuaterlySales"
import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived"
import RevenueChart from "../../ui-elements/cards/analytics/Revenue"
import GoalOverview from "../../ui-elements/cards/analytics/GoalOverview"
import BrowserStats from "../../ui-elements/cards/analytics/BrowserStatistics"
import ClientRetention from "../../ui-elements/cards/analytics/ClientRetention"
import SessionByDevice from "../../ui-elements/cards/analytics/SessionByDevice"
import CustomersChart from "../../ui-elements/cards/analytics/Customers"
import ChatWidget from "../../../components/@vuexy/chatWidget/ChatWidget"

import "../../../assets/scss/plugins/charts/apex-charts.scss"
import ActivityTimeline from "./ActivityTimeline"
import DispatchedOrders from "./DispatchedOrders"

let $primary = "#7367F0",
  $success = "#28C76F",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $stroke_color = "#b9c3cd",
  $label_color = "#e7eef7"

class EcommerceDashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <Row className="match-height">
          <Col lg="3" md="6" sm="6">
            <SubscribersGained />
          </Col>
          <Col lg="3" md="6" sm="6">
            <RevenueGenerated />
          </Col>
          <Col lg="3" md="6" sm="6">
            <QuaterlySales />
          </Col>
          <Col lg="3" md="6" sm="6">
            <OrdersReceived />
          </Col>
        </Row> */}
        <Row className="match-height">
          <Col lg="8" md="6" sm="12">
            <RevenueChart
              primary={$primary}
              dangerLight={$danger_light}
              strokeColor={$stroke_color}
              labelColor={$label_color}
            />
          </Col>
          {/* <Col lg="4" md="6" sm="12">
            <BrowserStats />
          </Col> */}
          <Col lg="4" md="6" sm="12">
            <GoalOverview strokeColor={$stroke_color} success={$success} />
          </Col>
        </Row>
        <Row className="match-height">
          <Col lg="4" md="6" sm="12">
            <BrowserStats />
          </Col>
          <Col lg="8" md="6" sm="12">
            <ClientRetention
              strokeColor={$stroke_color}
              primary={$primary}
              danger={$danger}
              labelColor={$label_color}
            />
          </Col>
        </Row>
        <Row className="match-height">
          <Col lg="4" md="12">
            <SessionByDevice
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
            />
          </Col>
          {/* <Col lg="4" md="12" className="text-center align-middle">
            <ChatWidget></ChatWidget>
          </Col> */}
          <Col lg="4" md="12" className="text-center align-middle">
            <CustomersChart
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
            />
          </Col>
          <Col lg="4" md="12">
            <ActivityTimeline/>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <DispatchedOrders />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default EcommerceDashboard;

