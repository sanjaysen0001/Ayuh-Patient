import React from "react";
import * as Icon from "react-feather";

import { FcMoneyTransfer } from "react-icons/fc";
import { GiPayMoney } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { FaRupeeSign } from "react-icons/fa";

const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },

  {
    type: "groupHeader",
    groupTitle: "Appointment management",
  },
   {
      id: "appointment",
      title: "Appointment",
      type: "item",
      icon: <Icon.Calendar  size={20} />,
      navLink: "/app/user/Patientdashboard/PTappointment",

    },
    {
      id: "callhistory ",
      title: "Call History ",
      type: "item",
      icon: <Icon.PhoneIncoming  size={20} />,
      navLink: "/app/user/Patientdashboard/PTcallhistory",

    },
    {
      id: "chathistory  ",
      title: "Chat History  ",
      type: "item",
      icon: <Icon.MessageCircle  size={20} />,
      navLink: "/app/user/Patientdashboard/PTchathistory",

    },
    {
      id: "videocallhistory   ",
      title: "Video Call History   ",
      type: "item",
      icon: <Icon.Video  size={20} />,
      navLink: "/app/user/Patientdashboard/PTvideocallhistory",

    },
    {
      id: "physicalvisithistory    ",
      title: "Physical Visit History    ",
      type: "item",
      icon: <Icon.Users  size={20} />,
      navLink: "/app/user/Patientdashboard/PTphysicalvisithistory",

    },
    {
      id: "prescrption history    ",
      title: "Prescrption History    ",
      type: "item",
      icon: <Icon.FileText  size={20} />,
      navLink: "/app/user/Patientdashboard/PTprescriptionhistory",

    },
    {
      id: "conversationintake",
      title: "Conversation Intake List",
      type: "item",
      icon: <Icon.MessageCircle size={12} />,
      permissions: ["admin", "editor"],
      navLink: "/appmanagement/Conversion-list",
    },
    {
      type: "groupHeader",
      groupTitle: "Order Management  ",
    },
     {
        id: "pendingorder ",
        title: "Pending Order ",
        type: "item",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
      </svg>,
        navLink: "/app/user/PatientOrderManagement/PTpendinglist",

      },
      {
        id: "completeorder ",
        title: "Complete Order ",
        type: "item",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
      </svg>,
        navLink: "/app/user/PatientOrderManagement/PTcompletelist",

      },
      {
        id: "cancelledorder  ",
        title: "Cancelled Order  ",
        type: "item",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-x" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M6.146 8.146a.5.5 0 0 1 .708 0L8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 0 1 0-.708"/>
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
      </svg>,
        navLink: "/app/user/PatientOrderManagement/PTcancelledlist",

      },
      {
        type: "groupHeader",
        groupTitle: "Diagnostics management ",
      },
       {
          id: "pendingtestreport",
          title: "Pending Test Report",
          type: "item",
          icon: <Icon.FileMinus  size={20} />,
          navLink: "/app/user/PatientDiagmangement/PTpendingtestreport",

        },
        {
          id: "deliveredtestreport ",
          title: "Delivered Test Report ",
          type: "item",
          icon: <Icon.FilePlus  size={20} />,
          navLink: "/app/user/PatientDiagmangement/PTdeliveredreport",

        },
        {
          type: "groupHeader",
          groupTitle: "Finance Management ",
        },

          {
            id: "wallethistory ",
            title: "Wallet History ",
            type: "item",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
            <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
          </svg>,
            navLink: "/app/user/Patientfinancemanagement/PTwallethistory",

          },
          {
            id: "transactionhistory  ",
            title: "Transaction History ",
            type: "item",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
            <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
            <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
            <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
          </svg>,
            navLink: "/app/user/Patientfinancemanagement/PTtranscationhistory",

          },
          {
            id: "withdrawrequest  ",
            title: "Withdraw Request  ",
            type: "item",
            icon: <Icon.Repeat  size={20} />,
            navLink: "/app/user/Patientfinancemanagement/PTwithdrawrequest",

          },
          {
            id: "editprofile  ",
            title: "Edit Profile  ",
            type: "item",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-person-rolodex" viewBox="0 0 16 16">
            <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
            <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z"/>
          </svg>,
            navLink: "/app/user/Edit-profile",

          },
          {
            id: "logout  ",
            title: "Logout  ",
            type: "item",
            icon: <Icon.LogOut  size={20} />,
            // navLink: "/userList/patient-list",

          },

  // {
  //   id: "Appointmentmanagement",
  //   title: "Appointment management ",
  //   type: "collapse",
  //   icon: <Icon.Users color="green" size={20} />,
  //   children: [
  //     {
  //       id: "patientList",
  //       title: "Patient List",
  //       type: "item",
  //       icon: <Icon.Users color="blue" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/userList/patient-list",
  //     },
  //     {
  //       id: "doctorList",
  //       title: "Doctor List",
  //       type: "item",
  //       icon: <Icon.User color="blue" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/userList/doctor-list",
  //     },
  //     {
  //       id: "pharmaList",
  //       title: "Pharma List",
  //       type: "item",
  //       icon: <Icon.Users color="blue" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/userList/pharma-list",
  //     },
  //     {
  //       id: "diagnosticList",
  //       title: "Diagnostic List",
  //       type: "item",
  //       icon: <Icon.User color="blue" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/userList/diagnostic-list",
  //     },
  //   ],
  // },

  // {
  //   type: "groupHeader",
  //   groupTitle: "Kundli Management",
  // },

  // {
  //   id: "kundlidetail",
  //   title: "Kundli Detail Users",
  //   type: "item",
  //   icon: <Icon.BarChart2 size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/kundlimanage/kundliuserdetail",
  // },

  // {
  //   id: "kundlimatch",
  //   title: "Kundli Match Users",
  //   type: "item",
  //   icon: <Icon.BarChart2 size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/kundlimanage/kundlimatchlist",
  // },

  // {
  //   type: "groupHeader",
  //   groupTitle: "Horoscopes",
  // },/
  // {
  //   id: "horoscopes",
  //   title: "Horoscopes",
  //   type: "collapse",
  //   icon: <Icon.Box size={20} />,
  //   children: [
  //     {
  //       id: "horoscopeList",
  //       title: "Horoscope ",
  //       type: "item",
  //       icon: <Icon.FileText size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/horoscopes/horoscopesList",
  //     },

  //     //     {
  //     //       id: "todayHoroscopeList",
  //     //       title: "Today Horoscope",
  //     //       type: "item",
  //     //       icon: <Icon.FileText size={12} />,
  //     //       permissions: ["admin", "editor"],
  //     //       navLink: "/app/horoscopes/todayshoroscope/todayHoroscopeList",
  //     //     },

  //     //     {
  //     //       id: "weeklyHoroscopeList",
  //     //       title: "Weekly Horoscope",
  //     //       type: "item",
  //     //       icon: <Icon.FileText size={12} />,
  //     //       permissions: ["admin", "editor"],
  //     //       navLink: "/app/horoscopes/weeklyhoroscope/weeklyHoroscopeList",
  //     //     },

  //     //     {
  //     //       id: "monthlyHoroscopeList",
  //     //       title: "Monthly Horoscope",
  //     //       type: "item",
  //     //       icon: <Icon.FileText size={12} />,
  //     //       permissions: ["admin", "editor"],
  //     //       navLink: "/app/horoscopes/monthlyhoroscope/monthlyHoroscopeList",
  //     //     },

  //     //     {
  //     //       id: "yearlyHoroscopeList",
  //     //       title: "Yearly Horoscope",
  //     //       type: "item",
  //     //       icon: <Icon.FileText size={12} />,
  //     //       permissions: ["admin", "editor"],
  //     //       navLink: "/app/horoscopes/yearlyhoroscope/yearlyHoroscopeList",
  //     //     },

  //     //     {
  //     //       id: "dailyHoroscopeList",
  //     //       title: "Daily Horoscope",
  //     //       type: "item",
  //     //       icon: <Icon.FileText size={12} />,
  //     //       permissions: ["admin", "editor"],
  //     //       navLink: "/app/horoscopes/dailyhoroscope/dailyHoroscopeList",
  //     //     },

  //     //     {
  //     //       id: "tomorrowHoroscopeList",
  //     //       title: "Tomorrow Horoscope",
  //     //       type: "item",
  //     //       icon: <Icon.FileText size={12} />,
  //     //       permissions: ["admin", "editor"],
  //     //       navLink: "/app/horoscopes/tomorrowhoroscope/tomorrowHoroscopeList",
  //     //     },

  //     //     {
  //     //       id: "yesterdayHoroscopeList",
  //     //       title: "Yesterday Horoscope",
  //     //       type: "item",
  //     //       icon: <Icon.FileText size={12} />,
  //     //       permissions: ["admin", "editor"],
  //     //       navLink: "/app/horoscopes/yesterdayhoroscope/yesterdayHoroscopeList",
  //     //     },

  //     //     // {
  //     //     //   id: "YearlyHoroscopeList",
  //     //     //   title: "Yearly Horoscope",
  //     //     //   type: "item",
  //     //     //   icon: <Icon.FileText size={20} />,
  //     //     //   permissions: ["admin", "editor"],
  //     //     //   navLink: "/app/horoscopes/yearlyhoroscope/YearlyHoroscopeList",
  //     //     // },
  //   ],
  // },
  // {
  //   id: "horoscopesList",
  //   title: "Horoscopes List44",
  //   type: "item",
  //   icon: <Icon.Box size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/horoscopes/horoscopesList",
  // },

  // {
  //   id: "horoscopeCategoryList",
  //   title: "Horoscope Category",
  //   type: "item",
  //   icon: <Icon.Box size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/horoscopecategory/horoscopeCategoryList",
  // },
  // {
  //   id: "rashimanagement",
  //   title: "Rashi Management",
  //   type: "collapse",
  //   icon: <Icon.BarChart2 size={20} />,
  //   children: [
  //     {
  //       id: "rashi",
  //       title: "Rashi List",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/rashimanagement/rashi/rashiList",
  //     },
  //     {
  //       id: "rashiHoroscopeList",
  //       title: "Rashi Horoscope List",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/rashimanagement/rashihoroscope/rashiHoroscopeList",
  //     },
  //   ],
  // },

  // {
  //   type: "groupHeader",
  //   groupTitle: "Applied Refund",
  // },

  // {
  //   id: "refund applied",
  //   title: "Refund Applied",
  //   type: "item",
  //   icon: <Icon.List color="green" size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/ordermanage/refundlist",
  // },

  // {
  //   id: "appmanagement",
  //   title: "App Management List ",
  //   type: "collapse",
  //   icon:  <Icon.List color="green" size={20} />,
  //   children: [
  //     {
  //       id: "category",
  //       title: "Category List",
  //       type: "item",
  //       icon: <Icon.Users color="blue" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/appmanagement/category-list",
  //     },
  //     {
  //       id: "subcategoryList",
  //       title: "Sub Category List",
  //       type: "item",
  //       icon: <Icon.User color="blue" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/appmanagement/Subcategory-list",
  //     },
  //     {
  //       id: "diseaseList",
  //       title: "Diseases List",
  //       type: "item",
  //       icon: <Icon.Users color="blue" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/appmanagement/disease-list",
  //     },
  //     {
  //       id: "doctorsuggestecategory",
  //       title: "Doctor Suggest Categories",
  //       type: "item",
  //       icon: <Icon.User color="blue" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/appmanagement/Dr-suggest-category",
  //     },
  //     {
  //       id: "doctorsuggestesubcategory",
  //       title: "Doctor Suggest Sub Categories",
  //       type: "item",
  //       icon: <Icon.Users color="blue" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/appmanagement/Dr-sub-suggest",
  //     },
  //     {
  //       id: "doctorprescription",
  //       title: "Doctor Prescription",
  //       type: "item",
  //       icon: <Icon.User color="blue" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/appmanagement/Dr-prescription",
  //     },

  //   ],
  // },


  // {
  //   type: "groupHeader",
  //   groupTitle: "Order Management",
  // },

  // {
  //   id: "appointments",
  //   title: "Appointments",
  //   type: "collapse",
  //   icon: <Icon.Box color="green" size={20} />,
  //   permissions: ["admin", "editor"],
  //   // navLink: "/app/ordermanage/allorderlist",
  //   children: [
  //     {
  //       id: "pending",
  //       title: "Pending List",
  //       type: "item",
  //       icon: <Icon.Users color="blue" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/appointments/Pending-list",
  //     },
  //     {
  //       id: "accepted",
  //       title: "Accepted List",
  //       type: "item",
  //       icon: <Icon.User color="blue" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/appointments/Accept-list",
  //     },
  //     {
  //       id: "completed",
  //       title: "Completed List",
  //       type: "item",
  //       icon: <Icon.Users color="blue" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/appointments/Completed-list",
  //     },
  //     {
  //       id: "cancelled",
  //       title: "Cancelled List",
  //       type: "item",
  //       icon: <Icon.User color="blue" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/appointments/Cancelled-list",
  //     },
  //   ],
  // },

  // {
  //   type: "groupHeader",
  //   groupTitle: "Add Notification",
  // },
  // {
  //   id: "pharmamanagement",
  //   title: "Pharma Management",
  //   type: "collapse",
  //   icon: <Icon.List  color="pink" size={20} />,
  //   children: [
  //     {
  //       id: "category ",
  //       title: "Category List",
  //       type: "item",
  //       icon: <Icon.Circle  color="blue" size={10} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/PharmaManagement/category-list",
  //     },
  //     {
  //       id: "medicine ",
  //       title: "Medicine List",
  //       type: "item",
  //       icon: <Icon.Circle  color="blue" size={10} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/PharmaManagement/Medicine-list",
  //     },
  //     {
  //       id: "order  ",
  //       title: "Order List",
  //       type: "item",
  //       icon: <Icon.Circle  color="blue" size={10} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/PharmaManagement/Order-list",
  //     },
  //     {
  //       id: "medicinestock  ",
  //       title: "Medicine Stock List",
  //       type: "item",
  //       icon: <Icon.Circle  color="blue" size={10} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/PharmaManagement/Medicin-stock-list",
  //     },
  //     {
  //       id: "supplierinvoice  ",
  //       title: "Supplier Invoice",
  //       type: "item",
  //       icon: <Icon.Circle  color="blue" size={10} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/pagesetup/notification/notifiList",
  //     },
  //   ],
  // },

  // {
  //   type: "groupHeader",
  //   groupTitle: " Event",
  // },
  // {
  //   id: "EventManagement",
  //   title: "Event Management",
  //   type: "collapse",
  //   icon: <Icon.BarChart2 size={20} />,
  //   children: [
  //     {
  //       id: "eventListnew",
  //       title: "Pharma List",
  //       type: "item",
  //       icon: <Icon.Box size={20} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/event/addEvent/EventList",
  //     },
  //     {
  //       id: "bookEventListnew",
  //       title: "Book Event List",
  //       type: "item",
  //       icon: <Icon.Box size={20} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/event/bookEvent/bookEventList",
  //     },
  //   ],
  // },

  // {
  //   type: "groupHeader",
  //   groupTitle: "Event",
  // },
  // {
  //   id: "rashimanagementa",
  //   title: "Book Doctors",
  //   type: "collapse",
  //   icon: <Icon.BarChart2 size={20} />,
  //   children: [
  //     {
  //       id: "booked pooja ",
  //       title: "Booked List",
  //       type: "item",
  //       icon: <Icon.Box color="green" size={20} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/event/bookEvent/bookedpoojalist",
  //     },
  //     // {
  //     //   id: "bannerPoojaLista",
  //     //   title: "Doctor List",
  //     //   type: "item",
  //     //   icon: <Icon.Box size={20} />,
  //     //   permissions: ["admin", "editor"],
  //     //   navLink: "/app/event/bennerPooja/bannerPoojaList",
  //     // },
  //     {
  //       id: "pojatyoelost",
  //       title: "Doctor type List",
  //       type: "item",
  //       icon: <Icon.Box size={20} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/event/addEvent/EventList",
  //     },
  //     {
  //       id: "bookEventLisat",
  //       title: "Doctor List",
  //       type: "item",
  //       icon: <Icon.Box size={20} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/event/bookEvent/bookEventList",
  //     },
  //   ],
  // },
  // {
  //   id: "socialmedia",
  //   title: "Social Media",
  //   type: "item",
  //   icon: <Icon.Share2 color="green" size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/media/socialmedia",
  // },
  // {
  //   type: "groupHeader",
  //   groupTitle: "Add Footer Pages",
  // },
  // {
  //   id: "Add Pages ",
  //   title: "Add Pages",
  //   type: "item",
  //   icon: <Icon.List color="green" size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/pageslist",
  // },

  // {
  //   type: "groupHeader",
  //   groupTitle: "User Ticket Question ",
  // },
  // {
  //   id: "askQuestionList",
  //   title: "Patient Question",
  //   type: "item",
  //   icon: <Icon.MessageCircle color="red" size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/askQuestionList",
  // },


  // {
  //   id: "diagnosticsmanagement",
  //   title: "Diagnostics Management",
  //   type: "collapse",
  //   icon: <Icon.List  color="pink" size={20} />,
  //   children: [
  //     {
  //       id: "test category  ",
  //       title: " Test Category List",
  //       type: "item",
  //       icon: <Icon.Circle  color="blue" size={10} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/pagesetup/notification/notifiList",
  //     },
  //     {
  //       id: "testlist ",
  //       title: "Test List",
  //       type: "item",
  //       icon: <Icon.Circle  color="blue" size={10} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/pagesetup/notification/notifiList",
  //     },
  //     {
  //       id: "report order   ",
  //       title: "Report Order List",
  //       type: "item",
  //       icon: <Icon.Circle  color="blue" size={10} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/pagesetup/notification/notifiList",
  //     },
  //     {
  //       id: "suppliersinvoice  ",
  //       title: "Suppliers Invoice",
  //       type: "item",
  //       icon: <Icon.Circle  color="blue" size={10} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/pagesetup/notification/notifiList",
  //     },
  //   ],
  // },
  // {
  //   type: "groupHeader",
  //   groupTitle: "Pharmacy Management",
  // },


  // {
  //   id: "ratinglist",
  //   title: "Rating and Review",
  //   type: "collapse",
  //   icon: <Icon.Star fill="yellow" size={20} />,
  //   permissions: ["admin", "editor"],
  //   // navLink: "/app/reviewrating/ratinglist",
  //   children: [
  //     {
  //       id: "doctor reviews ",
  //       title: "Doctor Reviews",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/Ratings/Doctor-rating",
  //     },
  //     {
  //       id: "pharma reviews",
  //       title: "Pharma Reviews",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/Ratings/Pharma-rating",
  //     },
  //     {
  //       id: "diagnostics reviews",
  //       title: "Diagnostics Reviews",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/Ratings/diagnostics-rating",
  //     },
  //   ],
  // },


  // {
  //   id: "blogmanagement",
  //   title: "Blog Management",
  //   type: "collapse",
  //   icon: <Icon.Box size={20} />,
  //   children: [
  //     {
  //       id: "categorylist",
  //       title: "Category List",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/Blogmanagement/Category-list",
  //     },
  //     {
  //       id: "add blogs ",
  //       title: "Add Blogs List",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/Blogmanagement/Add-blog-list",
  //     },
  //     {
  //       id: "comments ",
  //       title: "Comments List",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/Blogmanagement/Comments-list",
  //     },
  //   ],
  // },

  // {
  //   id: "couponlist",
  //   title: "Coupon and offer management",
  //   type: "collapse",
  //   icon: <Icon.List color="green" size={20} />,
  //   children: [
  //     {
  //       id: "coupons",
  //       title: "Coupons",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/Astrologer/Earningreport",
  //     },
  //     {
  //       id: "user offer",
  //       title: "User Offer",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/Astrologer/Earningreport",
  //     },
  //   ],
  // },

  // {
  //   id: "packagemanagement",
  //   title: "Packages Management",
  //   type: "collapse",
  //   icon: <Icon.Compass color="green" size={20} />,
  //   children: [
  //     {
  //       id: "packagelist",
  //       title: "Package List",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/poojapackage/packageList",
  //     },
  //     {
  //       id: "refer",
  //       title: "Referral",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/Astrologer/Earningreport",
  //     },
  //   ],
  // },
  // {
  //   id: "finance",
  //   title: "Finance Management",
  //   type: "collapse",
  //   icon: <Icon.List color="green" size={20} />,
  //   children: [
  //     {
  //       id: "doctor earning",
  //       title: "Doctor Earning List",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/Financemanagement/Doctor-earning",
  //     },
  //     {
  //       id: "pharma earning",
  //       title: "Pharma Earning",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/Financemanagement/Pharma-earning",
  //     },
  //     {
  //       id: "diagonistic earning",
  //       title: "Diagonistic Earning",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/Financemanagement/Diagnostic-earning",
  //     },
  //     {
  //       id: "admin earning",
  //       title: "Admin Earning",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/Financemanagement/Admin-earning",
  //     },
  //   ],
  // },

  // {
  //   id: "Commissionmanagement",
  //   title: "Commission Management",
  //   type: "collapse",
  //   icon: <FcMoneyTransfer color="" size={20} />,
  //   children: [
  //     {
  //       id: "doctor commision",
  //       title: "Doctor Commision",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/Astrologer/Earningreport",
  //     },
  //     {
  //       id: "medicine commision",
  //       title: "Medicine Commision",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/Astrologer/Earningreport",
  //     },
  //     {
  //       id: "diagonistic commision",
  //       title: "Diagonistic Commision",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/Astrologer/Earningreport",
  //     },
  //   ],
  // },


  // {
  //   id: "Withdrawmanagement ",
  //   title: "Withdraw Management ",
  //   type: "collapse",
  //   icon: <Icon.List color="green" size={20} />,
  //   children: [
  //     {
  //       id: "userwithdraw",
  //       title: "User Withdraw",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/Withdraw/User-withdraw",
  //     },
  //     {
  //       id: "doctorwithdraw",
  //       title: "Doctor Withdraw",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/Withdraw/Doctor-withdraw",
  //     },
  //     {
  //       id: "pharmawithdraw",
  //       title: "Pharma Withdraw",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/withdraw/Pharma-withdraw",
  //     },
  //     {
  //       id: "diagnosticwithdraw",
  //       title: "Diagnostic Withdraw",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/withdraw/Diagnostics-withdraw",
  //     },
  //   ],
  // },


  // {
  //   id: "Businessmanagement",
  //   title: "Business management",
  //   type: "collapse",
  //   icon: <Icon.Package size={20} />,
  //   children: [
  //     {
  //       id: "subscription plans",
  //       title: "Subscription Plans",
  //       type: "item",
  //       icon: <Icon.Circle fill="green" size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/pagesetup/contactus/contactUsList",
  //     },
  //     {
  //       id: "callComplete",
  //       title: "Call History",
  //       type: "item",
  //       icon: <Icon.PhoneIncoming size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/Businessmanagement/Call-history",
  //     },
  //     {
  //       id: "callreject",
  //       title: "Videocall History",
  //       type: "item",
  //       icon: <Icon.VideoOff size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/callmanagement/videocall",
  //     },
  //     {
  //       id: "chatreport",
  //       title: "Chat History",
  //       type: "item",
  //       icon: <Icon.List size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/callmanagement/chatreport",
  //     },
  //     {
  //       id: "live broadcasting history",
  //       title: "Live Broadcasting History ",
  //       type: "item",
  //       icon: <Icon.Circle fill="red" color="red" size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/pagesetup/faq/faqList",
  //     },
  //     {
  //       id: "offlinevisithistory",
  //       title: "Offline Visit History",
  //       type: "item",
  //       icon: <Icon.Circle fill="red" color="red" size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/pagesetup/faq/faqList",
  //     },
  //     {
  //       id: "user wallet history",
  //       title: "User wallet history",
  //       type: "item",
  //       icon: <Icon.Circle fill="red" color="red" size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/pagesetup/faq/faqList",
  //     },
  //     {
  //       id: "doctorwallet history",
  //       title: "Doctor wallet history",
  //       type: "item",
  //       icon: <Icon.Circle fill="red" color="red" size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/pagesetup/faq/faqList",
  //     },
  //     {
  //       id: "pharma wallet history",
  //       title: "Pharma wallet history",
  //       type: "item",
  //       icon: <Icon.Circle fill="red" color="red" size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/pagesetup/faq/faqList",
  //     },
  //     {
  //       id: "diagonisticswallet history",
  //       title: "Diagonistics wallet history",
  //       type: "item",
  //       icon: <Icon.Circle fill="red" color="red" size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/pagesetup/faq/faqList",
  //     },
  //     {
  //       id: "notifiList",
  //       title: "Notification",
  //       type: "item",
  //       icon: <Icon.List fill="red" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/pagesetup/notification/notifiList",
  //     },
  //     // {
  //     //   id: "chatlist",
  //     //   title: "All Chats",
  //     //   type: "item",
  //     //   icon: <Icon.List color="green" size={20} />,
  //     //   permissions: ["admin", "editor"],
  //     //   navLink: "/app/chat/chatList",
  //     // },
  //      {
  //       id: "faqList",
  //       title: "FAQ",
  //       type: "item",
  //       icon: <Icon.Circle fill="red" color="red" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/pagesetup/faq/faqList",
  //     },
  //     {
  //         id: "patienttickets",
  //         title: "Patient Tickets",
  //         type: "item",
  //         icon: <Icon.MessageCircle color="red" size={12} />,
  //         permissions: ["admin", "editor"],
  //         // navLink: "/app/askQuestionList",
  //       },
  //   ],
  // },

  // {
  //   id: "chatintakelist",
  //   title: "Conversion take List",
  //   type: "item",
  //   icon: <Icon.MessageCircle size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/chatintakeform/chatintakelist",
  // },

  // {
  //   id: "rechargepackage",
  //   title: "Recharge Package",
  //   type: "collapse",
  //   icon: <Icon.Package size={20} />,
  //   children: [
  //     {
  //       id: "allPlan",
  //       title: "All Plan List",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/packagemanager/allPlan",
  //     },
  //     {
  //       id: "userrecharge",
  //       title: "Patient Recharge",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/packagemanager/userrecharge",
  //     },
  //     {
  //       id: "packageoffer",
  //       title: "Package Offer",
  //       type: "item",
  //       icon: <Icon.List color="blue" size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/packagemanager/packageoffer",
  //     },
  //     {
  //       id: "packageoffer",
  //       title: "Subscription",
  //       type: "item",
  //       icon: <Icon.List color="blue" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/packagemanager/packageoffer",
  //     },
  //   ],
  // },

  // {
  //   id: "packageList",
  //   title: "Package List ",
  //   type: "item",
  //   icon: <Icon.Compass color="green" size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/poojapackage/packageList",
  // },

  // {
  //   id: "discount",
  //   title: "Discount/offer",
  //   type: "item",
  //   icon: <Icon.Percent size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/coupons/couponslist",
  // },

//   {
//     id: "withdrawrequest",
//     title: "Withdraw Request ",
//     type: "item",
//     icon: <GrTransaction color="red" size={20} />,
//     permissions: ["admin", "editor"],
//     navLink: "/app/withdraw/WithdrawRequest",
//   },
//   {
//     id: "blogmngment",
//     title: "Blog Management",
//     type: "collapse",
//     icon: <Icon.Package color="blue" size={20} />,
//     children: [
//       {
//         id: "blogList",
//         title: "Blog list",
//         type: "item",
//         icon: <Icon.Image size={20} />,
//         permissions: ["admin", "editor"],
//         // navLink: "/app/blogmngment/blog/blogList",
//       },
//       {
//         id: "blogCateList",
//         title: "Blog Category",
//         type: "item",
//         icon: <Icon.Image size={20} />,
//         permissions: ["admin", "editor"],
//         // navLink: "/app/blogmngment/blogCategory/blogCateList",
//       },
//     ],
//   },

//   {
//     id: "commissionset",
//     title: "Commission Set",
//     type: "item",
//     // icon: <Icon.DollarSign size={20} />,
//     icon: <FcMoneyTransfer color="" size={20} />,
//     permissions: ["admin", "editor"],
//     // navLink: "/app/packagemanager/commission",
//   },
//   {
//     id: "commissionforall",
//     title: "My Commission ",
//     type: "item",
//     // icon: <Icon.DollarSign size={20} />,
//     icon: <FcMoneyTransfer color="" size={20} />,
//     permissions: ["admin", "editor"],
//     navLink: "/app/packagemanager/commissioncall",
//   },
//   {
//     id: "payouts",
//     title: "Payouts",
//     type: "item",
//     icon: <GiPayMoney color="green" size={20} />,
//     permissions: ["admin", "editor"],
//     navLink: "/app/report/payoutlist",
//   },

//   {
//     id: "transaction",
//     title: "All Transaction",
//     type: "item",
//     icon: <FaRupeeSign color="blue" size={20} />,
//     permissions: ["admin", "editor"],
//     navLink: "/app/transaction/transactionHistory",
//   },

//   // {
//   //   id: "ratinglist",
//   //   title: "Doctor Rating and Review",
//   //   type: "item",
//   //   icon: <Icon.Star fill="yellow" size={20} />,
//   //   permissions: ["admin", "editor"],
//   //   navLink: "/app/reviewrating/ratinglist",
//   // },

//   {
//     type: "groupHeader",
//     groupTitle: "Add Videos",
//   },
//   {
//     id: "videoonweb",
//     title: "Add Youtube video",
//     type: "item",
//     icon: <Icon.Video fill="red" color="red" size={20} />,
//     permissions: ["admin", "editor"],
//     navLink: "/app/youtubevideoadd",
//   },
//   // {
//   //   type: "groupHeader",
//   //   groupTitle: "Add Question Package",
//   // },
//   // {
//   //   id: "Addpackage",
//   //   title: "Add Question Package",
//   //   type: "item",
//   //   icon: <Icon.ArrowDownCircle size={20} />,
//   //   permissions: ["admin", "editor"],
//   //   navLink: "/app/user/addpackage",
//   // },
//   // {
//   //   id: "walletcustom",
//   //   title: "Customer Wallet",
//   //   type: "item",
//   //   icon: <Icon.DollarSign size={20} />,
//   //   permissions: ["admin", "editor"],
//   //   navLink: "/app/wallet/walletcustom",
//   // },
//   // {
//   //   id: "wallettansaction",
//   //   title: "Wallet Transaction",
//   //   type: "item",
//   //   icon: <Icon.DollarSign size={20} />,
//   //   permissions: ["admin", "editor"],
//   //   navLink: "/app/wallet/wallettransaction",
//   // },

//   {
//     type: "groupHeader",
//     groupTitle: "CMS",
//   },

  // {
  //   id: "pagesetup",
  //   title: "Page Setup ",
  //   type: "collapse",
  //   icon: <Icon.Settings color="green" size={20} />,
  //   children: [
  //     {
  //       id: "bannerList",
  //       title: "Banner List",
  //       type: "item",
  //       icon: <Icon.List fill="red" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/pagesetup/banner/bannerList",
  //     },
  //     // {
  //     //   id: "notifiList",
  //     //   title: "Notification List",
  //     //   type: "item",
  //     //   icon: <Icon.List fill="red" size={12} />,
  //     //   permissions: ["admin", "editor"],
  //     //   navLink: "/app/pagesetup/notification/notifiList",
  //     // },
  //     // {
  //     //   id: "contactus",
  //     //   title: "Contact Us",
  //     //   type: "item",
  //     //   icon: <Icon.Circle fill="green" size={12} />,
  //     //   permissions: ["admin", "editor"],
  //     //   navLink: "/app/pagesetup/contactus/contactUsList",
  //     // },
  //     {
  //       id: "aboutUsList",
  //       title: "About Us",
  //       type: "item",
  //       icon: <Icon.Circle fill="green" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/pagesetup/aboutus/aboutUsList",
  //     },
  //     {
  //       id: "termsandcondition",
  //       title: "Terms And Conditions",
  //       type: "item",
  //       icon: <Icon.Circle fill="red" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/pagesetup/termscondition/termConditionList",
  //     },
  //     // {
  //     //   id: "faqList",
  //     //   title: "FAQ List",
  //     //   type: "item",
  //     //   icon: <Icon.Circle fill="red" color="red" size={12} />,
  //     //   permissions: ["admin", "editor"],
  //     //   navLink: "/app/pagesetup/faq/faqList",
  //     // },
  //     {
  //       id: "privacyPolicyList",
  //       title: "Privacy Policy",
  //       type: "item",
  //       icon: <Icon.Circle fill="red" color="red" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/pagesetup/privacypolicy/privacyPolicyList",
  //     },
  //     {
  //       id: "advertisement",
  //       title: "Advertisement",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/helpUs/HelpUs",
  //     },
  //   ],
  // },
];
export default navigationConfig;
