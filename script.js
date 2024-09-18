document.getElementById('gerarPDF').addEventListener('click', function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Coletar os valores do formulário
  const numeroOS = document.getElementById('numeroOS').value;
  const dataEmissao = document.getElementById('dataEmissao').value;
  const dataConclusao = document.getElementById('dataConclusao').value;
  const nomeCliente = document.getElementById('nomeCliente').value;
  const endereco = document.getElementById('endereco').value;
  const telefone = document.getElementById('telefone').value;
  const descricaoServico = document.getElementById('descricaoServico').value;
  const marcaEquipamento = document.getElementById('marcaEquipamento').value;
  const modeloEquipamento = document.getElementById('modeloEquipamento').value;
  const dataGarantia = document.getElementById('dataGarantia').value;
  const valorServico = document.getElementById('valorServico').value;
  const nomeLoja = document.getElementById('nomeLoja').value;
  const enderecoLoja = document.getElementById('enderecoLoja').value; // Novo campo
  const telefoneLoja = document.getElementById('telefoneLoja').value; // Novo campo
  const cnpj = document.getElementById('cnpj').value;
  const nomeTecnico = document.getElementById('nomeTecnico').value;

  // Título
  doc.setFontSize(14);
  doc.text('Ordem de Serviço', 14, 15);

  // Cabeçalho da tabela
  const headers = [
    ['Campo', 'Informação']
  ];

  // Dados organizados como linhas de planilha
  const rows = [
    ['Número da OS', numeroOS],
    ['Data de Emissão', dataEmissao],
    ['Data de Conclusão', dataConclusao],
    ['Nome do Cliente', nomeCliente],
    ['Endereço', endereco],
    ['Telefone de Contato', telefone],
    ['Descrição do Serviço', descricaoServico],
    ['Marca do Equipamento', marcaEquipamento],
    ['Modelo e Número de Série', modeloEquipamento],
    ['Data de Garantia', dataGarantia],
    ['Valor do Serviço (R$)', valorServico],
    ['Nome da Loja', nomeLoja],
    ['Endereço da Loja', enderecoLoja], // Novo campo
    ['Telefone da Loja', telefoneLoja], // Novo campo
    ['CNPJ', cnpj],
    ['Nome do Técnico', nomeTecnico]
  ];

  // Adicionando tabela ao PDF usando autoTable
  doc.autoTable({
    head: headers,
    body: rows,
    startY: 25,
    theme: 'grid',
    headStyles: { fillColor: [255, 165, 0] }, // Cor de fundo para o cabeçalho (laranja)
    margin: { top: 25 }
  });

  // Gerar o PDF
  doc.save(`ordem_servico_${numeroOS}.pdf`);
});
