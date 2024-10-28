function calcularPaineis() {
    // Obter valores dos campos de entrada
    const valorConta = parseFloat(document.getElementById("valorConta").value.replace(',', '.'));
    const custoKwh = parseFloat(document.getElementById("custoKwh").value.replace(',', '.'));
    const potenciaPainel = parseFloat(document.getElementById("potenciaPainel").value);
    const incidenciaSolar = parseFloat(document.getElementById("incidenciaSolar").value);
    const eficienciaPainel = parseFloat(document.getElementById("eficienciaPainel").value) / 100; // Converter para decimal

    // Verificar se todos os campos foram preenchidos corretamente
    if (isNaN(valorConta) || isNaN(custoKwh) || isNaN(potenciaPainel) || isNaN(incidenciaSolar) || isNaN(eficienciaPainel)) {
        document.getElementById("resultado").textContent = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    // Calcular consumo mensal em kWh a partir do valor da conta
    const consumoMensal = valorConta / custoKwh;

    // Calcular a produção de energia de um painel em kWh/mês
    const producaoPorPainelDia = (potenciaPainel * incidenciaSolar * eficienciaPainel) / 1000; // kWh/dia
    const producaoPorPainelMes = producaoPorPainelDia * 30; // kWh/mês

    // Calcular a quantidade de painéis necessários
    const quantidadePaineis = consumoMensal / producaoPorPainelMes;

    // Exibir resultado
    document.getElementById("resultado").textContent = `Você precisará de aproximadamente ${Math.ceil(quantidadePaineis)} painel(is) solar(es).`;
}
