import useForm from "../hooks/useForm";

export default function MessageForm(props) {
  const initialFormData = {
    content: "",
  };

  const { formData, handleChange, handleSubmit } = useForm(
    props.onSubmit,
    initialFormData
  );

  return (
    <form className="MessageForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="content"
        placeholder="Enter your message"
        value={formData.content}
        onChange={handleChange}
      />
      <button>Send</button>
    </form>
  );
}
