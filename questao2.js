function questao2(salario){
    var aumento;
    var salarioAntes;
    var valorAumento;
    var salarioNovo;
    if (salario <= 280.00){
      aumento = 0.2;
      valorAumento = salario * 0.2;
      salarioNovo = salario + valorAumento;
      console.log("salário antes do reajuste: " + salario + "\n O percentual de aumento aplicado: 20% " + "\n O valor do aumento: " + valorAumento + "\n O novo salário, após o aumento: " + salarioNovo);
    }
    else if (salario >= 280.00 && salario <= 700.00){
      aumento = 0.15;
      valorAumento = salario * 0.15;
      salarioNovo = salario + valorAumento;
      console.log(`salário antes do reajuste: ${salario} \n O percentual de aumento aplicado: 15% \n O valor do aumento: ${valorAumento} \n O novo salário, após o aumento: ${salarioNovo}`);
    }
    else if (salario >= 700.00 && salario <= 1500.00){
     aumento = 0.10;
     valorAumento = salario * 0.10;
     salarioNovo = salario + valorAumento;
     console.log(`salário antes do reajuste: ${salario} \n O percentual de aumento aplicado: 10% \n O valor do aumento: ${valorAumento} \n O novo salário, após o aumento: ${salarioNovo}`);
    }
    else if (salario >= 1500.00){
     aumento = 0.5;
     valorAumento = salario * 0.5;
     salarioNovo = salario + valorAumento;
     console.log(`salário antes do reajuste: ${salario} \n O percentual de aumento aplicado: 5% \n O valor do aumento: ${valorAumento} \n O novo salário, após o aumento: ${salarioNovo}`);
    }
  }