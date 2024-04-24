import { useState } from "react";

export default function useForm(onSubmit, initialFormData) {
  // const [content, setContent] = useState("");
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { value, name } = event.target;

    const updatedFormData = { ...formData };
    updatedFormData[name] = value;

    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);

    setFormData(initialFormData);
  };

  return { formData, handleChange, handleSubmit };
}
