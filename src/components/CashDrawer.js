const CashDrawer = ({ requiredNote }) => {
  const noteValue = Object.keys(requiredNote);
  const count = Object.values(requiredNote);

  if (noteValue.length < 1) return <></>;

  return (
    <div className="cash-drawer form-container">
      <table>
        <thead>
          <tr>
            <th>Note Value</th>
            <th>Number of notes</th>
          </tr>
        </thead>
        <tbody>
          {noteValue.map((value) => (
            <tr key={value}>
              <td>{value}</td>
              <td>{requiredNote[value]}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="2">Total notes : {count.reduce((a, b) => a + b)}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CashDrawer;
