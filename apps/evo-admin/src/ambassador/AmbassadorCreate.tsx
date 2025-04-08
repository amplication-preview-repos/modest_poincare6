import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AmbassadorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="document" source="document" />
        <TextInput label="email" source="email" type="email" />
      </SimpleForm>
    </Create>
  );
};
