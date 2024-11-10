export default function MoneyCoConverter({value}) {
    return (
        <h5>El valor en pesos  colombianos es: ${value && parseFloat(value) * 4214} COP</h5>
    )
};

