
import React from 'react';

const VendasSection = () => {
  const chartData = [
    { name: "Seg", value: 65 },
    { name: "Ter", value: 78 },
    { name: "Qua", value: 84 },
    { name: "Qui", value: 72 },
    { name: "Sex", value: 90 },
    { name: "Sab", value: 100 },
    { name: "Dom", value: 55 },
  ];

  const topProducts = [
    { nome: "Leite Integral 1L", quantidade: 452, valor: "R$ 5.790,00" },
    { nome: "Arroz 5kg", quantidade: 384, valor: "R$ 8.448,00" },
    { nome: "Frango Congelado kg", quantidade: 327, valor: "R$ 4.578,00" },
    { nome: "Banana Prata kg", quantidade: 302, valor: "R$ 1.812,00" },
    { nome: "Queijo Mussarela kg", quantidade: 278, valor: "R$ 8.340,00" }
  ];

  return (
    <section id="vendas" className="py-8">
      <h2 className="text-xl font-semibold mb-6">Vendas</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border">
          <h3 className="text-lg font-medium mb-4">Faturamento dos Últimos 7 Dias</h3>
          
          {/* CSS-only Bar Chart */}
          <div className="bar-chart">
            {chartData.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="bar"
                  style={{ height: `${item.value}%` }}
                >
                  <span className="bar-value">R$ {item.value * 100}</span>
                  <span className="bar-label">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border overflow-hidden">
          <h3 className="text-lg font-medium p-6 pb-4">Produtos Mais Vendidos</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Produto</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Quantidade</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {topProducts.map((product, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{product.nome}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{product.quantidade}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{product.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendasSection;
