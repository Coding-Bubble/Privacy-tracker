import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEntry = () => {
  const [name, setName] = useState("");
  const [details, setDetail] = useState("");
  const navigate = useNavigate();

  const saveEntry = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/entries", {
        name,
        details,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveEntry}>
          <div className="field">
            <label className="label">Organisation Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name of company"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Details shared with the Organisation</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={details}
                onChange={(e) => setDetail(e.target.value)}
                placeholder=" Enter Details shared"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEntry;
