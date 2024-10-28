// script.js

function calcularPaineis() {
    // Obter valores dos campos de entrada
    const consumoMensal = parseFloat(document.getElementById("consumoMensal").value);
    const potenciaPainel = parseFloat(document.getElementById("potenciaPainel").value);
    const incidenciaSolar = parseFloat(document.getElementById("incidenciaSolar").value);
    const eficienciaPainel = parseFloat(document.getElementById("eficienciaPainel").value) / 100; // Converter para decimal

    // Verificar se todos os campos foram preenchidos corretamente
    if (isNaN(consumoMensal) || isNaN(potenciaPainel) || isNaN(incidenciaSolar) || isNaN(eficienciaPainel)) {
        document.getElementById("resultado").textContent = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    // Calcular a produção de energia de um painel em kWh/mês
    const producaoPorPainelDia = (potenciaPainel * incidenciaSolar * eficienciaPainel) / 1000; // kWh/dia
    const producaoPorPainelMes = producaoPorPainelDia * 30; // kWh/mês

    // Calcular a quantidade de painéis necessários
    const quantidadePaineis = consumoMensal / producaoPorPainelMes;

    // Exibir resultado
    document.getElementById("resultado").textContent = `Você precisará de aproximadamente ${Math.ceil(quantidadePaineis)} painel(is) solar(es).`;
}
