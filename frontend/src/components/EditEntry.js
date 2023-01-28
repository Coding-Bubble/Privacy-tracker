import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditEntry = () => {
  const [name, setName] = useState("");
  const [details, setDetail] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getEntryById();
  }, []);

  const getEntryById = async () => {
    const response = await axios.get(`http://localhost:5000/entries/${id}`);
    setName(response.data.name);
    setDetail(response.data.details);
  };

  const updateEntry = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/entries/${id}`, {
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
        <form onSubmit={updateEntry}>
          <div className="field">
            <label className="label">Organisation Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name of Company"
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
                placeholder="Enter details shared"
              />
            </div>
          </div>
          
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEntry;
