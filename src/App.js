import React, { Component } from "react";
import styled from "styled-components";
import AppNavbar from "./components/AppNavbar";
import Search from "./components/Search";
import Footer from "./components/Footer";
import "./App.css";

const BodyBackground = styled.div`
  background: url("https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c01f6c0f0a1c52124328f02c5c763cf5&auto=format&fit=crop&w=1489&q=80");
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
`;

class App extends Component {
  render() {
    return (
      <div>
        <BodyBackground>
          <AppNavbar />
          <Search />
          <Footer />
        </BodyBackground>
      </div>
    );
  }
}

export default App;
