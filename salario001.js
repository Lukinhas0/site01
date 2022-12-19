function calcular(){
    var nome = window.document.getElementById('Nome').value
    var horas = window.document.getElementById('num1')
    var vlhoras = window.document.getElementById('num2')
    var res = window.document.getElementById('res')
    var horas1 = Number(horas.value)
    var vlhoras1 = Number(vlhoras.value)
    var salariobt = horas1 * vlhoras1
    var inss1 = salariobt * 0.085
    var ir = salariobt * 0.05
    var descott = inss1 + ir
    var salariolq = salariobt - descott
    res.innerHTML = `<u><p>Seu Nome é: <strong>R$${nome}</strong></p></u>`
    res.innerHTML += `<u><p>Seu Salário Bruto é: <strong>R$${salariobt}</strong></p></u>`
    res.innerHTML += `<u><p>Seu Desconto de INSS é: <strong>R$${inss1}</strong></p></u>`
    res.innerHTML += `<u><p>Seu Desconto IR é: <strong>R$${ir}</strong></p></u>`
    res.innerHTML += `<u><p>Seu Desconto Total é: <strong>R$${descott}</strong></p></u>`
    res.innerHTML += `<u><p>Seu Salário Líquido é: <strong>R$${salariolq}</strong></p></u>`
}