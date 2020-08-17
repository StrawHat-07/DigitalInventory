import React, { useState } from "react";
import { FULL_STATISTICS } from "../Helpers/Constants";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import PrimarySearchAppBar from "../Layout/PrimaryNavbar";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { capitalize } from "../Helpers/HelperFunctions";

const AddServer = () => {
  const [server, setServer] = useState({
    ip: "",
    lob: "",
    module: "",
    service_type: "",
    hostname: "",
    zone: "",
    env: "",
    tier_level: "",
    os_version: "",
    dc: "",
    server_type: "",
    memory: "",
    disk: "",
    cpu: "",
    port: "",
    health_check_url: "",
    lb_ip: "",
    public_ip: "",
    technology: "",
    server_status: "",
    jmx_port: "",
    jmx_status: "",
  });

  const [modelIsOpen, setModalIsOpen] = useState(false);
  const handleClose = () => setModalIsOpen(false);
  const handleShow = () => setModalIsOpen(true);

  const onInputChange = (e) => {
    console.log(e.target.value);
    setServer({ ...server, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8081/inventory/`, server);
  };
  return (
    <>
      <PrimarySearchAppBar />
      <div className="container mt-5">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4"> Add Server Details</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              {FULL_STATISTICS.map((unit, index) => (
                <>
                  <div style={{ display: "flex" }}>
                    <div
                      className=" h6  mt-2 pt-1 text-left"
                      style={{ flex: "2" }}
                    >
                      <strong>{capitalize(unit) + " :"} </strong>
                    </div>
                    <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id={`tooltip-top`}>
                          <strong>{capitalize(unit)}</strong>
                        </Tooltip>
                      }
                    >
                      <div style={{ flex: "8" }}>
                        {/* <div className=" h5  mt-2">
                        {" "}
                        {capitalize(unit) + " :"}
                      </div> */}

                        <input
                          type="text"
                          className="form-control form-control-md"
                          placeholder={`Enter ${unit}`}
                          name={unit}
                          value={server.unit}
                          onChange={onInputChange}
                          required={unit === "ip" ? "required" : null}
                          style={{ fontWeight: "bold" }}
                        />
                      </div>
                    </OverlayTrigger>
                  </div>
                </>
              ))}
              <div className="text-center">
                <button
                  //   onClick={handleShow}
                  type="submit"
                  class="btn btn-dark ml-5 mt-5"
                >
                  Submit
                </button>
              </div>
              <Modal
                show={modelIsOpen}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Add Server</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  This will add a new server to Server Database. If you wish to
                  add details click add server.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="dark" onSubmit>
                    Add Server
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddServer;
