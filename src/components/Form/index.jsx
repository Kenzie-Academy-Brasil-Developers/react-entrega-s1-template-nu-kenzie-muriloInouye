import { React, useState } from "react";

export const Form = ({ addValue }) => {
  const [formData, setFormData] = useState({
    description: "",
    value: "",
    type: "",
  });

  function submit(event) {
    event.preventDefault();
    addValue(formData);
    setFormData({
      description: "",
      value: "",
      type: "",
    });
  }

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        id="description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <input
        type="number"
        id="value"
        value={formData.value}
        onChange={(e) => setFormData({ ...formData, value: e.target.value })}
      />
      <select
        name=""
        id="type"
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
      >
        <option value="Entrada" selected>
          Entrada
        </option>
        <option value="Saida">Saida</option>
      </select>
      <button type="submit">Enviar valor</button>
    </form>
  );
};
