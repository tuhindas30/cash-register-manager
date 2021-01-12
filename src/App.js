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
      <div className="flex-container">
        <Form onFormSubmit={handlePay} />

        <CashDrawer requiredNote={requiredNote} />
      </div>
      <div className="return-balance">
        {isReturnBalance ? (
          returnBalance < 0 ? (
            <h2>
              Please pay Rs.{" "}
              <span style={{ color: "var(--primary-color)" }}>
                {" "}
                {-returnBalance}{" "}
              </span>
              more
            </h2>
          ) : returnBalance === 0 ? (
            <h2>No need to Pay!</h2>
          ) : (
            <h2>
              Return Balance:{" "}
              <span style={{ color: "var(--primary-color" }}>
                {" "}
                {returnBalance}
              </span>
            </h2>
          )
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default App;
