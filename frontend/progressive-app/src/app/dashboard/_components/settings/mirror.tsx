import { Formik, Field, Form } from "formik";
import React from "react";

type Props = {};

export default function Mirror({}: Props) {
  return (
    <>
      <h2 className="my-8 font-bold">Mirror</h2>
      <Formik initialValues={{ alwaysAwakeToggle: false }} onSubmit={() => {}}>
        {({ values, errors }) => (
          <Form>
            <label>
              <Field
                type="checkbox"
                name="alwaysAwakeToggle"
                className="peer mr-2 h-4 w-4 appearance-none rounded-sm border-2 border-primary bg-secondary checked:border-0 checked:bg-primary"
              ></Field>
              Keep mirror on during periods of inactivity.
            </label>
          </Form>
        )}
      </Formik>
    </>
  );
}
