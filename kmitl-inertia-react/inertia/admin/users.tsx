import {
  Create,
  Datagrid,
  DateField,
  Edit,
  EmailField,
  List,
  PasswordInput,
  SelectInput,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  required,
} from 'react-admin'

const roleChoices = [
  { id: 'admin', name: 'admin' },
  { id: 'user', name: 'user' },
]

export const UserList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="fullName" />
      <EmailField source="email" />
      <TextField source="role" />
      <DateField source="createdAt" showTime />
    </Datagrid>
  </List>
)

export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="fullName" />
      <EmailField source="email" />
      <TextField source="role" />
      <DateField source="createdAt" showTime />
      <DateField source="updatedAt" showTime />
    </SimpleShowLayout>
  </Show>
)

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="fullName" />
      <TextInput source="email" type="email" validate={required()} />
      <PasswordInput source="password" validate={required()} />
      <SelectInput source="role" choices={roleChoices} defaultValue="user" validate={required()} />
    </SimpleForm>
  </Create>
)

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="fullName" />
      <TextInput source="email" type="email" validate={required()} />
      <PasswordInput source="password" helperText="Leave blank to keep current password" />
      <SelectInput source="role" choices={roleChoices} validate={required()} />
    </SimpleForm>
  </Edit>
)
