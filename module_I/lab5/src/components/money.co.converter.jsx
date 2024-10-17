export default function MoneyCoConverter ({ value }) {
  return (
    <h5>El valor en pesos Colombianos es: $ {value && parseFloat(value) * 4214} COP</h5>
)
};