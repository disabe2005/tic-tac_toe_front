import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const GameForm = (props) => {
    const validationSchema = Yup.object().shape({
        playerNameOne: Yup.string().required("Required"),
        playerNameTwo: Yup.string().required("Required"),
    });
    console.log(props);
    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <Field label="1rst player's 'Name" name="playerNameOne" type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="playerNameOne"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Field label="2nd player's 'Name" name="playerNameTwo" type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="playerNameTwo"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>

                    <Button variant="danger" size="lg"
                        block="block" type="submit">
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default GameForm;