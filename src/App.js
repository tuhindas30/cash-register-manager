import { useState } from "react";
function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [cashAmount, setCashAmount] = useState(0);
  let [returnBalance, setReturnBalance] = useState(0);
  const [requiredNote, setRequiredNote] = useState({});

  const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

  function handleInputBillAmount(e) {
    setBillAmount(e.target.value);
  }

  function handleInputCashAmount(e) {
    setCashAmount(e.target.value);
  }

  function submitForm(e) {
    return e.preventDefault();
  }

  function handlePay() {
    let balanceAmount = cashAmount - billAmount;
    setReturnBalance(balanceAmount);
    let cashDrawer = {};
    notes.forEach((note) => {
      if (returnBalance < note) return;
      cashDrawer[note] = Math.floor(returnBalance / note);
      returnBalance = returnBalance % note;
    });
    setRequiredNote(cashDrawer);
  }
  let noteValue = Object.keys(requiredNote);
  console.log(noteValue);

  return (
    <div className="App">
      <p>Enter the Bill Amount</p>
      <form onSubmit={submitForm}>
        <input type="number" onChange={handleInputBillAmount}></input>
        <div>
          <p>Enter the Cash Amount</p>
          <input type="number" onChange={handleInputCashAmount}></input>
          <button onClick={handlePay}>Pay</button>
        </div>
      </form>
      <h1>Return Balance : {returnBalance}</h1>
      <div>
        {noteValue.map((value) => (
          <p key={value}>
            No. of {value} notes : {requiredNote[value]}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
