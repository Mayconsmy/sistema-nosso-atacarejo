
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { PackageOpenIcon, TrashIcon } from 'lucide-react';

const DesperdicioSection = () => {
  // Dados realistas sobre causas de desperdício em supermercados
  const pieChartData = [
    { name: "Vencimento", value: 38, color: "#135b9e" },
    { name: "Danos no transporte/manuseio", value: 27, color: "#f1c900" },
    { name: "Perda de qualidade", value: 21, color: "#9ca3af" },
    { name: "Armazenamento inadequado", value: 14, color: "#64748b" }
  ];

  // Dados de desperdício de produtos específicos (baseados em padrões típicos)
  const desperdicioData = [
    { produto: "Morango", lote: "MO2023-14", quantidade: 24, motivo: "Maturação excessiva" },
    { produto: "Iogurte Natural", lote: "IN2023-05", quantidade: 16, motivo: "Vencimento" },
    { produto: "Alface Americana", lote: "AA2023-12", quantidade: 12, motivo: "Perda de qualidade" },
    { produto: "Carne Moída", lote: "CM2023-14", quantidade: 8, motivo: "Temperatura inadequada" },
    { produto: "Queijo Minas", lote: "QM2023-09", quantidade: 7, motivo: "Vencimento" }
  ];

  return (
    <section id="desperdicio" className="py-8 pb-16">
      <h2 className="text-xl font-semibold mb-6">Desperdício</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border">
          <h3 className="text-lg font-medium mb-4 text-center flex items-center justify-center gap-2">
            <PackageOpenIcon className="h-5 w-5 text-red-500" />
            <span>Motivos de Desperdício</span>
          </h3>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border overflow-hidden">
          <h3 className="text-lg font-medium p-6 pb-4 flex items-center gap-2">
            <TrashIcon className="h-5 w-5 text-red-500" />
            <span>Últimos Registros de Perdas</span>
          </h3>
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
