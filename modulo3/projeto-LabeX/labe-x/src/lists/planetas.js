export const listaPlanetas = (form, digitandoInputs) => {
    return (
        <select
        name={'planet'}
        value={form.planet}
        onChange={digitandoInputs}
        >
            <option> Selecionar planeta </option>
            <option value={'Mercúrio'}> Mercúrio </option>
            <option value={'Vênus'}> Vênus </option>
            <option value={'Terra'}> Terra </option>
            <option value={'Marte'}> Marte </option>
            <option value={'Júpiter'}> Júpiter </option>
            <option value={"Saturno"}> Saturno </option>
            <option value={'Urano'}> Urano </option>
            <option value={'Netuno'}> Netuno </option>
            <option value={'outro'}> Desvendar novas galáxias </option>
        </select>
    )
}