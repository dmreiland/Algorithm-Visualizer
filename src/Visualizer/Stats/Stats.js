import React from "react";
import { Table } from "react-bootstrap";
import "./Stats.css";

const Stats = (props) => {
  const { runtime, nodesProccessed, fastestPath, algorithmRan } = props;

  return (
    <Table striped bordered hover variant="dark" size="sm">
      <tbody>
        <tr>
          <th>Algorithm</th>
          <th>Runtime (Microseconds)</th>
          <th>Nodes Processed</th>
          <th>Fastest Path Total</th>
        </tr>
        <tr>
          <td>{algorithmRan}</td>
          <td>{runtime}</td>
          <td>{nodesProccessed}</td>
          <td>{fastestPath}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Stats;
