
import React from 'react';

const DesperdicioSection = () => {
  const pieChartData = [
    { categoria: "Vencimento", percentual: 30, color: "bg-primary" },
    { categoria: "Danos", percentual: 20, color: "bg-secondary" },
    { categoria: "Perda de qualidade", percentual: 20, color: "bg-gray-300" },
    { categoria: "Outros", percentual: 30, color: "bg-slate-400" }
  ];

  const desperdicioData = [
    { produto: "Tomate", lote: "TM2023-07", quantidade: 18, motivo: "Maturação excessiva" },
    { produto: "Iogurte Natural", lote: "IN2023-05", quantidade: 12, motivo: "Vencimento" },
    { produto: "Alface Americana", lote: "AA2023-12", quantidade: 8, motivo: "Perda de qualidade" },
    { produto: "Carne Moída", lote: "CM2023-14", quantidade: 5, motivo: "Temperatura inadequada" },
    { produto: "Queijo Minas", lote: "QM2023-09", quantidade: 4, motivo: "Vencimento" }
  ];

  return (
    <section id="desperdicio" className="py-8 pb-16">
      <h2 className="text-xl font-semibold mb-6">Desperdício</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border">
          <h3 className="text-lg font-medium mb-4 text-center">Motivos de Desperdício</h3>
          
          {/* CSS-Only Pie Chart */}
          <div className="pie-chart"></div>
          
          <div className="pie-chart-legend">
            {pieChartData.map((item, index) => (
              <div key={index} className="legend-item">
                <span className={`legend-color ${item.color}`}></span>
                <span>{item.categoria} ({item.percentual}%)</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border overflow-hidden">
          <h3 className="text-lg font-medium p-6 pb-4">Últimos Registros de Perdas</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Produto</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Lote</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Quantidade</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Motivo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {desperdicioData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{item.produto}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.lote}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.quantidade}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.motivo}</td>
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

export default DesperdicioSection;
