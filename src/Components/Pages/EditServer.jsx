import React, { useState, useEffect } from "react";
import { FULL_STATISTICS } from "../Helpers/Constants";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import Modal from "react-modal";
import { Modal, Button } from "react-bootstrap";
import PrimarySearchAppBar from "../Layout/PrimaryNavbar";
import { useParams } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { capitalize } from "../Helpers/HelperFunctions";

const EditServer = (props) => {
  let history = useHistory();
  const { id } = useParams();
  //   alert(ip);
  const [server, setServer] = useState({
    id: "",
    cpu: "",
    dc: "",
    disk: "",
    env: "",
    health_check_url: "",
    hostname: "",
    id: "",
    ip: "",
    jmx_port: "",
    jmx_status: "",
    lb_ip: "",
    lob: "",
    memory: "",
    module: "",
    os_version: "",
    port: "",
    public_ip: "",
    server_status: "",
    server_type: "",
    service_type: "",
    technology: "",
    tier_level: "",
    update_date: "",
    zone: "",
  });

  useEffect(() => {
    // Hook();
    LoadServer();
  }, []);
  const [modelIsOpen, setModalIsOpen] = useState(false);
  const handleClose = () => setModalIsOpen(false);
  const handleShow = () => setModalIsOpen(true);

  const onInputChange = (e) => {
    console.log(e.target.value);
    setServer({ ...server, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // await axios.put(`http://localhost:8081/inventory/`, server);
  };

  const onPut = async () => {
    await axios.put(`http://localhost:8081/inventory/?id=${id}`, server);
    history.push("/Home");
  };
  const LoadServer = async () => {
    const result = await axios.get(
      `http://localhost:8081/inventory/id?id=${id}`
    );
    // for (var prop in result.data) {
    //   console.log(prop);
    //   console.log(result.data[prop]);
    //   setServer({ ...server, prop: result.data[prop] });
    // }
    setServer(result.data);
    console.log(result.data.ip);
    // setServer(result.data);
    console.log("Server", server);
  };
  return (
    <>
      <PrimarySearchAppBar />
      <div className="container mt-5">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">
            {" "}
            Edit Server Details for <strong>{server["ip"]}</strong>
          </h2>
          {/* onSubmit={(e) => onSubmit(e) */}
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              {FULL_STATISTICS.map((unit, index) => (
                <>
                  <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-top`}>
                        <strong>{capitalize(unit)}</strong>
                      </Tooltip>
                    }
                  >
                    <input
                      readOnly={unit === "ip" ? true : false}
                      type="text"
                      className="form-control form-control-md"
                      placeholder={`---`}
                      name={unit}
                      value={server[unit]}
                      onChange={onInputChange}
                      required={unit === "ip" ? "required" : null}
                      style={{ fontWeight: "bold" }}
                    />
                  </OverlayTrigger>
                </>
              ))}
              <div className="text-center">
                <button
                  onClick={handleShow}
                  type="submit"
                  class="btn btn-dark ml-5 mt-5"
                >
                  Edit
                </button>
              </div>
              {/* <Modal isOpen={modelIsOpen}> */}
              {/* Modal */}
              <Modal
                show={modelIsOpen}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Edit Changes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  This will completely edit the server details. If you wish to
                  edit save changes.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button onClick={onPut} variant="dark">
                    Save Changes
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

export default EditServer;
