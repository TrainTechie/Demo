import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./project/AboutUs";
import ContactUs from "./project/ContactUs";
import Home from "./project/Home";
import Login from "./project/Login";
import Navbar from "./project/Navbar";

export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar />}>
      <Route  path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />}/>
          <Route path="contactus" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          </Route>
      </Routes>
    </BrowserRouter>
      </>
    );
  }
}
