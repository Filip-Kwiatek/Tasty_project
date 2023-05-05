import { Form } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import Navbar from "../components/Navbar/Navbar";
import Button from "../components/UI/Button";

import classes from "./NewAccount.module.css";

const Account = () => {
  return (
    <>
      <SearchBar />
      <Navbar />
      <Form method="post"  className={classes.forms}>
        <ul>
          <li>
            <label>Login:</label>
            <input type="text" name="login" />
          </li>
          <li>
            <label>Email:</label>
            <input type="text" name="email" />
          </li>
          <li>
            <label>Password:</label>
            <input type="text" name="password" />
          </li>
          <li>
            <label>Repeat password:</label>
            <input type="text" name="repeat-password" />
          </li>
          <li>
            <Button type="submit">Register</Button>
          </li>
        </ul>
      </Form>
    </>
  );
};

export default Account;
