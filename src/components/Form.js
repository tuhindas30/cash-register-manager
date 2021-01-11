import { useState } from "react";

const Form = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    billAmount: "",
    cashAmount: "",
  });

  // This function handles form submission.
  function handleSubmit(e) {
    e.preventDefault();
    if (typeof onFormSubmit !== "function") return;
    onFormSubmit(formData);
  }

  // This function sets the object on input.
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h2>Enter the Bill Amount</h2>
        <input
          name="billAmount"
          type="number"
          onChange={handleChange}
          value={formData.billAmount}
          placeholder="Amount needs to be paid"
        ></input>
        {!!formData.billAmount && (
          <div>
            <h2>Enter the Cash Amount</h2>
            <input
              name="cashAmount"
              type="number"
              onChange={handleChange}
              value={formData.cashAmount}
              placeholder="Cash amount paid"
            ></input>
            {!!formData.cashAmount && <button type="submit">Pay</button>}
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
