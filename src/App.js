import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import Search from "./components/Search";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Search />
      </div>
    );
  }
}

// class Header extends Component {
//   render() {
//     let textStyle = {
//       color: "#ffffff"
//     };
//     let headerStyle = {
//       background: "#101010",
//       padding: 30
//     };
//     return (
//       <div style={headerStyle}>
//         <h1 style={textStyle}>Hello World</h1>
//         <p style={textStyle}>Welcome to React 101</p>
//         <button>Click Me!</button>
//       </div>
//     );
//   }
// }

// class Table extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [
//         {
//           id: 1,
//           name: "Eren Jaeger",
//           address: "Shiganshina District"
//         },
//         {
//           id: 2,
//           name: "Mikasa Ackermann",
//           address: "Shiganshina District"
//         },
//         {
//           id: 3,
//           name: "Levi Ackermann",
//           address: "Trost District"
//         }
//       ]
//     };
//   }
//   render() {
//     let containerStyle = {
//       margin: 20
//     };
//     return (
//       <div style={containerStyle}>
//         <table>
//           <thead>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Address</th>
//           </thead>
//           <tbody>
//             {this.state.data.map((person, i) => (
//               <TableRow key={i} data={person} />
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// class TableRow extends Component {
//   render() {
//     return (
//       <tr>
//         <td>{this.props.data.id}</td>
//         <td>{this.props.data.name}</td>
//         <td>{this.props.data.address}</td>
//       </tr>
//     );
//   }
// }

export default App;
