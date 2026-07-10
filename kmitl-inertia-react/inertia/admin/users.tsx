import {
  Create,
  Datagrid,
  DateField,
  Edit,
  EmailField,
  List,
  PasswordInput,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  required,
} from 'react-admin'

export const UserList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="fullName" label="Full name" />
      <EmailField source="email" />
      <DateField source="createdAt" label="Created" showTime />
    </Datagrid>
  </List>
)

export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="fullName" label="Full name" />
      <EmailField source="email" />
      <DateField source="createdAt" label="Created" showTime />
      <DateField source="updatedAt" label="Updated" showTime />
    </SimpleShowLayout>
  </Show>
)

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="fullName" label="Full name" />
      <TextInput source="email" type="email" validate={required()} />
      <PasswordInput source="password" validate={required()} />
    </SimpleForm>
  </Create>
)

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="fullName" label="Full name" />
      <TextInput source="email" type="email" validate={required()} />
      <PasswordInput source="password" helperText="Leave blank to keep current password" />
    </SimpleForm>
  </Edit>
)
