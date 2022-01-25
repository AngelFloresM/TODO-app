import React, { ChangeEvent, FormEvent, useState } from "react";

import notesAPI from "../api/NoteAPI";
import "./Form.css";

interface FormInputs {
  title: string;
  description: string;
}

function Form() {
  const [formData, setFormData] = useState<FormInputs>({
    title: "",
    description: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await notesAPI.postTODO(formData);
    const { message } = await data.json();
    console.log(message);
  };

  return (
    <div className="form-container">
      <form className="note-form" onSubmit={handleSubmitForm}>
        <label htmlFor="title">New note:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
          autoComplete="off"
          placeholder="Title"
        />
        <textarea
          name="description"
          onChange={handleInputChange}
          value={formData.description}
          placeholder="Type a description"
          rows={1}
        />
        <button value="Click me" className="submit-button">
          Save
        </button>
      </form>
    </div>
  );
}

export default Form;
