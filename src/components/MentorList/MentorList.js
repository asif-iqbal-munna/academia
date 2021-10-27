import React from "react";
import { Tab, Table } from "react-bootstrap";

const MentorList = () => {
  return (
    <Tab.Pane eventKey="first">
      <h2>First Something</h2>
      <div className="p-4 bg-light rounded-3">
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>date</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Tab.Pane>
  );
};

export default MentorList;
