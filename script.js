function calcularPaineis() {
    const consumoMensal = parseFloat(document.getElementById('consumo').value);
    const potenciaPainel = parseFloat(document.getElementById('potencia').value);
    const irradiacaoDiaria = parseFloat(document.getElementById('irradiacao').value);
    const eficienciaPainel = parseFloat(document.getElementById('eficiencia').value) / 100;

    // Verificando se os valores são válidos
    if (isNaN(consumoMensal) || isNaN(potenciaPainel) || isNaN(irradiacaoDiaria) || isNaN(eficienciaPainel)) {
        document.getElementById('resultado').innerHTML = "Por favor, preencha todos os campos.";
        return;
    }

    // Cálculo da energia gerada por painel em um mês
    const geracaoPainelMensal = (potenciaPainel / 1000) * irradiacaoDiaria * 30 * eficienciaPainel;

    // Cálculo do número de painéis necessários (arredondando para cima)
    const numPaineis = Math.ceil(consumoMensal / geracaoPainelMensal);

    // Mensagem de saída
    let mensagem = `
        Você precisará de aproximadamente <strong>${numPaineis}</strong> painéis solares para cobrir seu consumo mensal de ${consumoMensal} kWh.
    `;

    document.getElementById('resultado').innerHTML = mensagem;
}