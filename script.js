// script.js

function calcularPaineis() {
    // Obter valores dos campos de entrada
    const contaMensal = parseFloat(document.getElementById("contaMensal").value.replace(',', '.'));
    const custoKwh = parseFloat(document.getElementById("custoKwh").value.replace(',', '.'));
    const potenciaPainel = parseFloat(document.getElementById("potenciaPainel").value);
    const eficienciaPainel = parseFloat(document.getElementById("eficienciaPainel").value);
    const incidenciaSolar = parseFloat(document.getElementById("incidenciaSolar").value.replace(',', '.'));

    // Verificar se todos os campos foram preenchidos corretamente
    if (isNaN(contaMensal) || isNaN(custoKwh) || isNaN(potenciaPainel) || isNaN(eficienciaPainel) || isNaN(incidenciaSolar)) {
        document.getElementById("resultado").textContent = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    // Calcular consumo mensal em kWh
    const consumoMensal = contaMensal / custoKwh;

    // Calcular a produção de energia de um painel em kWh/mês
    const producaoPorPainelDia = (potenciaPainel * incidenciaSolar * eficienciaPainel) / 1000;
    const producaoPorPainelMes = producaoPorPainelDia * 30;

    // Calcular a quantidade de painéis necessários
    const quantidadePaineis = consumoMensal / producaoPorPainelMes;

    // Exibir resultado
    document.getElementById("resultado").textContent = `Você precisará de aproximadamente ${Math.ceil(quantidadePaineis)} painéis solares.`;
}
