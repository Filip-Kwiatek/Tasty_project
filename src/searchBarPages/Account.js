import { Form, Link } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import Navbar from "../components/Navbar/Navbar";
import Button from "../components/UI/Button";

import "./Account.css";

const Account = () => {
  return (
    <>
      <SearchBar />
      <Navbar />
      <Form method="post" action="/events" className={`forms`}>
        <ul>
          <li>
            <label>Login:</label>
            <input type="text" name="login" />
          </li>
          <li>
            <label>Register:</label>
            <input type="text" name="password" />
          </li>
          <li>
            <Button>Login</Button>
          </li>
          <li>
            <Link to="/account:register">New Account</Link>
          </li>
        </ul>
      </Form>
    </>
  );
};

export default Account;
