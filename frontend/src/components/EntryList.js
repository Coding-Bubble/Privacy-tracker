import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EntryList = () => {
  const [entries, setEntry] = useState([]);

  useEffect(() => {
    getEntries();
  }, []);

  const getEntries = async () => {
    const response = await axios.get("http://localhost:5000/entries");
    setEntry(response.data);
  };

  const deleteEntry = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/entries/${id}`);
      getEntries();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-auto">
      <div className="column is-full">
        <Link to="add" className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth mt-3">
          <thead>
            <tr>
              <th>No</th>
              <th>Name of Organisation</th>
              <th>Details shared </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={entry._id}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.details}</td>
                <td>
                  <Link
                    to={`edit/${entry._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteEntry(entry._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EntryList;
