import { React, useState } from "react";

export const Form = ({ addValue }) => {
  const [formData, setFormData] = useState({
    description: "",
    value: "",
    type: "Entrada",
  });

  function submit(event) {
    event.preventDefault();
    addValue(formData);
  }

  return (
    <form onSubmit={submit}>
      <div className="description-container">
        <label htmlFor="description" className="form-label">
          Descrição
        </label>
        <input
          required
          placeholder="Digit aqui sua descrição"
          type="text"
          id="description"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <p className="description-instruction">Ex: Compra de roupas</p>
      </div>
      <div className="inputs-container">
        <div className="value-container">
          <label htmlFor="value" className="form-label">
            Valor
          </label>
          <input
            required
            placeholder="1"
            type="number"
            id="value"
            onChange={(e) =>
              setFormData({ ...formData, value: +e.target.value })
            }
          />
        </div>
        <div className="type-container">
          <label htmlFor="type" className="form-label">
            Tipo de valor
          </label>
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
        </div>
      </div>
      <button type="submit" className="submit-value">
        Enviar valor
      </button>
    </form>
  );
};
