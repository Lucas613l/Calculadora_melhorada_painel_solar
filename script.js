function calcularPaineis() {
    const valorConta = parseFloat(document.getElementById("valorConta").value.replace(',', '.'));
    const custoKwh = parseFloat(document.getElementById("custoKwh").value.replace(',', '.'));
    const potenciaPainel = parseFloat(document.getElementById("potenciaPainel").value);
    const incidenciaSolar = parseFloat(document.getElementById("incidenciaSolar").value);
    const eficienciaPainel = parseFloat(document.getElementById("eficienciaPainel").value) / 100; // Converter para decimal

    if (isNaN(valorConta) || isNaN(custoKwh) || isNaN(potenciaPainel) || isNaN(incidenciaSolar) || isNaN(eficienciaPainel)) {
        document.getElementById("resultado").textContent = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    const consumoMensal = valorConta / custoKwh;

    // Corrigido o cálculo da produção de um painel
    const producaoPorPainelDia = (potenciaPainel * incidenciaSolar * eficienciaPainel) / 1000; // kWh/dia
    const producaoPorPainelMes = producaoPorPainelDia * 30; // kWh/mês

    const quantidadePaineis = consumoMensal / producaoPorPainelMes;

    document.getElementById("resultado").textContent = `Você precisará de aproximadamente ${Math.ceil(quantidadePaineis)} painel(is) solar(es).`;
}
