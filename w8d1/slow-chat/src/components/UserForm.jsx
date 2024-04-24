import useForm from "../hooks/useForm";

export default function UserForm(props) {
  const { users, onSubmit } = props;

  const parsedOptions = users && Object.values(users).map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const initialFormData = { userId: "" };

  const { formData, handleChange, handleSubmit } = useForm(onSubmit, initialFormData);

  return (
    <form className="UserForm" onSubmit={handleSubmit}>
      <select name="userId" value={formData.userId} onChange={handleChange}>
        <option value="">Please select a user</option>
        {parsedOptions}
      </select>
      <button>Select</button>
    </form>
  );
}
