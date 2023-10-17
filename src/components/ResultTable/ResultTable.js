export const ResultTable = (props) => {
  return (
    <table className="result">
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
        {props.data.map((yearData) => (
      <tr  key={yearData.year}>
        <td>{yearData.year}</td>
        <td>{yearData.savingsEndOfYear}</td>
        <td>{yearData.yearlyIntrest}</td>
        <td>{yearData.savingsEndOfYear - props.initialinvestment - yearData.yealyContribution * yearData.year}</td>
        <td>{ props.initialinvestment + yearData.yealyContribution * yearData.year}</td>
      </tr>
        ))}
    </tbody>
  </table>

  )
}
