// import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
// import { useDemoData } from '@material-ui/x-grid-data-generator';
// import { RowingSharp } from '@material-ui/icons';

import { makeStyles } from "@material-ui/core/styles";

export default function DataTable(props) {

  let {rows, selectionModel, setSelectionModel} = props;

  const useStyles = makeStyles((theme) => ({
    table: {
      marginTop: theme.spacing(2),

    }
  }))

  let classes = useStyles()
  
  const columns = [
  {
    field: "id",
    headerName: "Маршрут",
    width: 120,
    //editable: false,
    flex: 0.5
  },
  {
    field: "length",
    headerName: "Длина, км",
    type: "number",
    width: 120,
    editable: false,
    flex: 0.5
  }
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, "firstName") || ""} ${
  //       params.getValue(params.id, "lastName") || ""
  //     }`,
  // },
];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 10, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 11, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 12, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 13, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 14, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 15, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 16, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 17, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 18, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 19, lastName: "Lannister", firstName: "Jaime", age: 45 },
// ]
  const data = {
      columns: columns,
      rows: rows
  }
  // const {data} = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 10,
  //   maxColumns: 6,
  // });

  //const [selectionModel, setSelectionModel] = React.useState([]);

  return (
    <div style={{ height: 560, width: '100%'}} className={classes.table}>
      <DataGrid
      style={{padding: 1}}
        checkboxSelection
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
          //console.log(selectionModel)        
          //funct(func, newSelectionMode l)
        }}
        selectionModel={selectionModel}
        {...data}
      />
    </div>
  );
}

