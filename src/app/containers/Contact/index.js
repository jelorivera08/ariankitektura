import React, { useState, useContext, useEffect } from "react";
import { Divider, Icon } from "semantic-ui-react";
import cs from "classnames";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";
import logo from "../../../assets/images/logo.png";

import { Button, Checkbox, Form } from "semantic-ui-react";

const ImageContainer = styled.div`
  animation: fadeIn 5s infinite;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const getRandomProjectImage = (appProjects) => {
  if (appProjects.length <= 0) return "static/media/2019-AVIDA-1.d99f92a6.jpg";

  try {
    const randomProjectIndex = Math.round(
      Math.random() * appProjects.length - 1
    );

    const randomImageIndex = Math.round(
      Math.random() * appProjects[randomProjectIndex].images.length - 1
    );
    return appProjects[randomProjectIndex].images[randomImageIndex];
  } catch (err) {
    return "static/media/2019-AVIDA-1.d99f92a6.jpg";
  }
};

export default () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    email: "",
    address: "",
    contactNumber: "",
    comments: "",
  });

  function sendEmail() {
    emailjs
      .send("jelo", "ariankitektura", formValues, "user_vjf5yGARToUOHKDcBHO3J")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div>
      <div className="flex justify-center items-center pt-12">
        <div>
          <img
            onClick={() => history.push("/")}
            className="cursor-pointer"
            style={{
              height: "7rem",
            }}
            src={logo}
            alt="logo"
          />
        </div>

        <div className="text-center">
          <div>Contact Information</div>
          <div>
            Office Address: 2030B Ilustre St., Sta. Cruz, Manila City,
            Philippines{" "}
          </div>
          <div> Telephone: (02) 8253 6066</div>
          <div>Cellphone: (+63) 977 1184447 | (+63) 928 1686743</div>
          <div> E-mail: info.ariankitektura@gmail.com</div>
        </div>
      </div>

      <div className="px-24">
        <Divider />
      </div>

      <div className="px-24 py-12">
        <Form onSubmit={sendEmail}>
          <Form.Field>
            <label>First Name</label>
            <input
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  firstName: e.target.value,
                })
              }
              placeholder="First Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  lastName: e.target.value,
                })
              }
              placeholder="Last Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Organization</label>
            <input
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  organization: e.target.value,
                })
              }
              placeholder="Organization"
            />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <input
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  address: e.target.value,
                })
              }
              placeholder="Address"
            />
          </Form.Field>
          <Form.Field>
            <label>Contact Number</label>
            <input
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  contactNumber: e.target.value,
                })
              }
              placeholder="Contact Number"
            />
          </Form.Field>
          <Form.Field>
            <label>E-mail address</label>
            <input
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  email: e.target.value,
                })
              }
              placeholder="E-mail address"
            />
          </Form.Field>
          <Form.Field>
            <label>Questions & Comments</label>
            <input
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  comments: e.target.value,
                })
              }
              placeholder="Questions & Comments"
            />
          </Form.Field>

          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
};
