import Navbar from "./components/Navbar";
import Form from "./components/Form";
import CashDrawer from "./components/CashDrawer";
import useCashRegister from "./hooks/useCashRegister";

const NOTES = [2000, 500, 100, 20, 10, 5, 1];

const App = () => {
  const {
    returnBalance,
    requiredNote,
    isReturnBalance,
    handlePay,
  } = useCashRegister(NOTES);

  return (
    <>
      <Navbar />
      <div className="form-container">
        <Form onFormSubmit={handlePay} />

        <CashDrawer requiredNote={requiredNote} />
      </div>
      <div className="return-balance">
        {isReturnBalance ? (
          returnBalance < 0 ? (
            <h1>
              Please pay Rs.{" "}
              <span style={{ color: "var(--primary-color)" }}>
                {" "}
                {-returnBalance}{" "}
              </span>
              more
            </h1>
          ) : returnBalance === 0 ? (
            <h1>No need to Pay!</h1>
          ) : (
            <h1>
              Return Balance :{" "}
              <span style={{ color: "var(--primary-color" }}>
                {" "}
                {returnBalance}
              </span>
            </h1>
          )
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default App;
