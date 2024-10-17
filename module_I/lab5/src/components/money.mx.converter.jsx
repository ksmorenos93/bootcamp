export default function MoneyMxConverter ({ value }) {
  return (
    <h5>El valor en pesos Mexicano es: $ {value && parseFloat(value) * 19.30} MXN</h5>
  )
};