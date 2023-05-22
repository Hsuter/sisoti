import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import BottomNav from "./components/BottomNav";
import CryproCurrencies from "./pages/CryproCurrencies";
import News from "./pages/News";
import CryptoDetails from "./pages/CryptoDetails";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPass from "./pages/ResetPass";
import ReqResPass from "./pages/ReqResPass";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Wallet from "./pages/Wallet";
import Feedback from "./pages/Feedback";
import Support from "./pages/Support";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetStarted from "./pages/GetStarted";
import RechargeRecords from "./Records/LiveRecords";

function App() {
  return (
    <div className="App flex-1 overflow-x-hidden h-[100vh] hide-scrollbar flex-col-reverse  bg-brown font-serif">
      <ToastContainer />
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Menu />
              <Home />
              <BottomNav />
            </>
          }
        />
        <Route
          path="/cryprocurrencies"
          element={
            <>
              <Menu />
              <CryproCurrencies />
              <BottomNav />
            </>
          }
        />
        <Route
          path="/news"
          element={
            <>
              <Menu />
              <News />
              <BottomNav />
            </>
          }
        />
        <Route
          path="/crypto/:coinId"
          element={
            <>
              <Menu />
              <CryptoDetails />
              <BottomNav />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Menu />
              <Login />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Menu />
              <SignUp />
            </>
          }
        />
        <Route
          path="/reset-password-confirmation"
          element={
            <>
              <Menu />
              <ResetPass />
            </>
          }
        />
        <Route
          path="/reqrespass"
          element={
            <>
              <Menu />
              <ReqResPass />
            </>
          }
        />
        <Route
          path="/deposit"
          element={
            <>
              <Menu />
              <Deposit />
              <BottomNav />
            </>
          }
        />
        <Route
          path="/withdraw"
          element={
            <>
              <Menu />
              <Withdraw />
              <BottomNav />
            </>
          }
        />
        <Route
          path="/wallet"
          element={
            <>
              <Menu />
              <Wallet />
              <BottomNav />
            </>
          }
        />
        <Route
          path="/feedback"
          element={
            <>
              <Menu />
              <Feedback />
              <BottomNav />
            </>
          }
        />
        <Route
          path="/support"
          element={
            <>
              <Menu />
              <Support />
              <BottomNav />
            </>
          }
        />

        <Route path="/" element={<GetStarted />} />
      </Routes>
    </div>
  );
}

export default App;
