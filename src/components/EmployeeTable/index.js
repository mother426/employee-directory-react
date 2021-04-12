import React, { useContext } from "react";
import DataBody from "../DataBody";
import DataAreaContext from "../../utils/DataAreaContext";

const EmployeeTable = () => {
  const context = useContext(DataAreaContext);

  return (
    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed mx-auto"
      >
        <thead>
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col pointer"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    context.handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                  <span></span>
                </th>
              );
            })}
          </tr>
        </thead>
        <DataBody />
      </table>
    </div>
  );
};

export default EmployeeTable;
