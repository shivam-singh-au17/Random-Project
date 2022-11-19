import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";

const Blogsdata = (props) => (
  <tr>
    <td>{props.blogsdata.person_name}</td>
    <td>{props.blogsdata.person_position}</td>
    <td>{props.blogsdata.person_level}</td>
    <td>{props.blogsdata.person_age}</td>
    <td>
      <Link to={"/edit/" + props.blogsdata._id}>Edit</Link> |
      <a
        href="/"
        onClick={() => {
          props.deleteBlogsdata(props.blogsdata._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default class BlogsdataList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteBlogsdata = this.deleteBlogsdata.bind(this);
    this.state = { blogsdatas: [] };
  }

  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/blogsdata/")
      .then((response) => {
        this.setState({ blogsdatas: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This method will delete a blogsdata based on the method
  deleteBlogsdata(id) {
    axios.delete("http://localhost:5000/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      blogsdata: this.state.blogsdatas.filter((el) => el._id !== id),
    });
  }

  // This method will map out the users on the table
  blogsdataList() {
    return this.state.blogsdatas.map((currentblogsdata) => {
      return (
        <Blogsdata
          blogsdata={currentblogsdata}
          deleteBlogsdata={this.deleteBlogsdata}
          key={currentblogsdata._id}
        />
      );
    });
  }

  // This following section will display the table with the blogsdatas of individuals.
  render() {
    return (
      <div>
        <h3>Blogsdata List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Level</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.blogsdataList()}</tbody>
        </table>
      </div>
    );
  }
}
