import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AmbassadorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="document" source="document" />
        <TextInput label="email" source="email" type="email" />
      </SimpleForm>
    </Edit>
  );
};
