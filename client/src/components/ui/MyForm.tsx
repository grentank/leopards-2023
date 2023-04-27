import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import type { SubmitHandlerType } from '../../types/submitFormTypes';

type MyFormProps = {
  submitHandler: SubmitHandlerType;
};

export default function MyForm({ submitHandler }: MyFormProps): JSX.Element {
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Label for="exampleIdl">Enter characters` ids:</Label>
        <Input id="exampleIdl" name="idtext" placeholder="1,2,3" type="text" />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
