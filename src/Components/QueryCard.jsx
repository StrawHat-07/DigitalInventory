import React, { useState, useEffect } from "react";
import QuerySearch from "./QuerySearch";
import SearchbarDropdown from "./SearchbarDropdown";

const QueryCard = (props) => {
  const {
    lobModulate,
    lobinate,
    modulate,
    paginate,
    defaultlobs,
    defaultmodules,
  } = props;

  const [lobs, setLobs] = useState([]);

  const [modules, setModules] = useState(
    // "zk-auditlogging",
    // "es-auditlogging",
    // "badges",
    // "at_backend",
    defaultmodules
  );
  useEffect(() => {
    setModules(defaultmodules);
    setLobs(defaultlobs);
  }, [defaultmodules, defaultlobs]);

  // console.log("Lobs : ", lobs);
  // console.log("Modules : ", modules);

  const [lob, setLob] = useState("");
  const [module, setModule] = useState("");
  // console.log("lobs", lobs);
  // console.log("Lob", lob);
  // console.log("Module", module);
  const onGo = () => {
    lobModulate(true);
    lobinate(lob);
    modulate(module);
    paginate(1);
  };
  const lober = (s) => {
    setLob(s);
    // console.log("Lob", s);
  };
  const moduler = (s) => {
    setModule(s);
    // console.log("Module", module);
  };
  return (
    <div class="card text-center">
      <div class="card-header dark">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Query 1
            </a>
          </li>
          <li class="nav-item">
            <div class="nav-link">Query 2</div>
          </li>
          <li class="nav-item">
            <div class="nav-link">Query 3</div>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h4 class="card-title">
          <strong>Find Servers by Lob and Module</strong>
        </h4>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ display: "flex", padding: "10px 0px" }}>
            <p class="card-text" style={{ padding: "15px 15px" }}>
              {/* <QuerySearch values={lobs} /> */}
              <h5>
                <strong>Lob:</strong>{" "}
              </h5>
            </p>
            <div style={{ flex: 5 }}>
              <SearchbarDropdown values={lobs} set={lober} />
            </div>
          </div>

          <div style={{ display: "flex", padding: "10px 20px" }}>
            <p class="card-text" style={{ padding: "15px 15px" }}>
              {/* <QuerySearch values={lobs} /> */}
              <h5>
                <strong>Module: </strong>
              </h5>
            </p>
            <div style={{ flex: 5 }}>
              <SearchbarDropdown values={modules} set={moduler} />
            </div>
          </div>
        </div>
        <button class="btn btn-dark" onClick={onGo}>
          Go
        </button>
      </div>
    </div>
  );
};

export default QueryCard;
