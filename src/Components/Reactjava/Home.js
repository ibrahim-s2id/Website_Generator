import React from "react";
import Header from "./Header";
import '../css/style.css';

class Home extends React.Component {
  render() {
    return (
      <div className="body">
        <Header />
      </div>
    );
  }
}

export default Home;