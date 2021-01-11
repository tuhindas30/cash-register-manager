import { useState } from "react";

function useCashRegister(notes) {
  const [returnBalance, setReturnBalance] = useState(0);
  const [requiredNote, setRequiredNote] = useState({});
  const [isReturnBalance, setIsReturnBalance] = useState(false);

  // This function handles the Pay button click which calculates the return balance and number of notes.
  function handlePay({ cashAmount, billAmount }) {
    let balanceAmount = cashAmount - billAmount;
    setReturnBalance(balanceAmount);
    setIsReturnBalance(true);
    let cashDrawer = {};
    notes.forEach((note) => {
      if (balanceAmount < note) return;
      cashDrawer[note] = Math.floor(balanceAmount / note);
      balanceAmount = balanceAmount % note;
    });
    setRequiredNote(cashDrawer);
  }

  return {
    returnBalance,
    requiredNote,
    isReturnBalance,
    handlePay,
  };
}

export default useCashRegister;
