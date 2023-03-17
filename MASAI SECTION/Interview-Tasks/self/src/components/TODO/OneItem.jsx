import React from 'react'

const OneItem = (props) => {
    return (
      <>
        <tr key={props.item.id}>
          <td>{props.item.id}</td>
          <td>{props.item.taskName}</td>
          <td>{`${props.item.taskStatus === true ? "Done" : "Not Done"}`}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => props.handleChangeStatus(props.item)}
            >
              {props.item.taskStatus === true ? "Mark Not Done" : "Mark Done"}
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => props.handleChangeDelete(props.item.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      </>
    );
}

export default OneItem
