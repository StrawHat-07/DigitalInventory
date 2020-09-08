import React from "react";
import { capitalize } from "./Helpers/HelperFunctions";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Link } from "react-router-dom";
import { FULL_STATISTICS, TABLE_STATISTICS } from "./Helpers/Constants";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./Table.css";

const Table = ({ server, loading, currentPage, goHit }) => {
  if (loading) return <h1>Loading ....</h1>;
  if (!goHit)
    return (
      // <div className="text-center text-dark bold">
      //   {" "}
      //   Enter Lob and Module then hit GO. You can leave lob and module empty to
      //   view all records.
      // </div>
      <div class="card mt-5">
        <div class="card-header">Note</div>
        <div class="card-body text-center">
          <h5 class="card-title">Enter Lob and Module then hit Go 🚀</h5>
          <div class="card-text">
            <strong>
              <h5>
                {" "}
                You can leave lob and module empty to view all records 😄{" "}
              </h5>
            </strong>
          </div>
        </div>
      </div>
    );
  // console.log("Current Page: ", currentPage);
  return (
    <table class="table border shadow table-hover table-sm table-responsive{-sm|-md|-lg|-xl} text-center table-striped mt-5">
      <thead class="thead-dark">
        {/* Header Cell */}
        <th scope="col">#</th>
        {TABLE_STATISTICS.map((server, index) => (
          <th scope="col">{capitalize(server)}</th>
        ))}
        <th></th>
      </thead>
      <tbody>
        {server.map((unit, index) => (
          <tr>
            <th scope="row">{index + 1 + (currentPage - 1) * 100}</th>
            {TABLE_STATISTICS.map((server, index) => {
              // console.log(unit["ip"]);
              return <td>{unit[server]}</td>;
            })}
            <td>
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{"View"}</strong>
                  </Tooltip>
                }
              >
                <Link to={`/viewServer/${unit["id"]}`}>
                  <Button size="small">
                    <VisibilityIcon color="primary" />
                  </Button>
                </Link>
              </OverlayTrigger>

              <OverlayTrigger
                key="top"
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{"Edit"}</strong>
                  </Tooltip>
                }
              >
                <Link to={`/editServer/${unit["id"]}`}>
                  <Button size="small">
                    <EditIcon color="action" />
                  </Button>
                </Link>
              </OverlayTrigger>

              {/* <Button size="small">
                  <DeleteOutlineIcon color="secondary" />
                </Button> */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
