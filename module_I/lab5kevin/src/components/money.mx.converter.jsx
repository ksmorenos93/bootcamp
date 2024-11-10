export default function MoneyMxConverter({value}) {
    return (
        <h5>El valor en pesos  mexicanos es: ${value && parseFloat(value) * 19.30} MOP</h5>

    )
};