import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slices/counter";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="container my-5">
       <h1> Redux ToolKit ... </h1>
       <hr/>
      <div>
      <Badge badgeContent={count} color="primary">
       <MailIcon />
      </Badge>
        <Button
          variant="contained"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className="mx-3"
        >
          Increment
        </Button>

        <Button
          variant="outlined"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
}

export default App;
