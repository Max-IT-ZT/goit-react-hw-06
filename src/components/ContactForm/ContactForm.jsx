import { IoPersonAddSharp } from "react-icons/io5";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";

export default function ContactForm({ onAdd }) {
  const nameId = useId();
  const numberId = useId();
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <span className={css.fieldSpan}>
          <label className={css.fieldLabel} htmlFor={nameId}>
            Name ;
          </label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameId}
            placeholder="Enter name"
          />
        </span>
        <ErrorMessage className={css.fieldError} name="name" component="span" />
        <span className={css.fieldSpan}>
          <label className={css.fieldLabel} htmlFor={numberId}>
            Number ;
          </label>
          <Field
            className={css.field}
            type="text"
            name="number"
            id={numberId}
            placeholder="Enter phone number"
          />
        </span>
        <ErrorMessage
          className={css.fieldError}
          name="number"
          component="span"
        />
        <button className={css.btn} type="submit">
          <IoPersonAddSharp /> Add contact
        </button>
      </Form>
    </Formik>
  );
}
