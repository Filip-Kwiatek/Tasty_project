import { Form } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <>
      <Form>
        <ul className={classes.newsletter}>
          <li>
            <header className={classes.header}>Newsletter from Szama</header>
          </li>
          <ul className={classes.wrapper}>
            <li>
              <input
                type="text"
                name="newsletter"
                placeholder="Your e-mail adress"
              />
            </li>
            <li>
              <Button>Subscribe</Button>
            </li>
          </ul>
          <li>
            <strong>Register and educate with shama -</strong> only serious
            notifications about promotions, discount codes and news on the
            platform. Interesting recipes and tips. No spam.
          </li>
        </ul>
      </Form>
    </>
  );
};

export default Newsletter;
