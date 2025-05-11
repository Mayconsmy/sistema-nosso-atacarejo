
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import { ShoppingCartIcon } from 'lucide-react';

const VendasSection = () => {
  // Dados realistas de vendas diárias para um supermercado médio
  const chartData = [
    { name: "Seg", value: 28750 },
    { name: "Ter", value: 23450 },
    { name: "Qua", value: 31200 },
    { name: "Qui", value: 26800 },
    { name: "Sex", value: 38500 },
    { name: "Sab", value: 47200 },
    { name: "Dom", value: 19800 },
  ];

  // Produtos mais vendidos em um atacarejo (baseado em estatísticas de mercado)
  const topProducts = [
    { nome: "Arroz Branco 5kg", quantidade: 842, valor: "R$ 18.524,00" },
    { nome: "Feijão Carioca 1kg", quantidade: 765, valor: "R$ 9.180,00" },
    { nome: "Açúcar Cristal 5kg", quantidade: 632, valor: "R$ 7.584,00" },
    { nome: "Óleo de Soja 900ml", quantidade: 598, valor: "R$ 5.382,00" },
    { nome: "Café Torrado 500g", quantidade: 523, valor: "R$ 9.414,00" }
  ];

  return (
    <section id="vendas" className="py-8">
      <h2 className="text-xl font-semibold mb-6">Vendas</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border">
          <h3 className="text-lg font-medium mb-4">Faturamento dos Últimos 7 Dias</h3>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `R$ ${value/1000}k`} />
                <Tooltip 
                  formatter={(value) => [`R$ ${value.toLocaleString()}`, "Faturamento"]} 
                  labelFormatter={(label) => `${label}-feira`}
                />
                <Bar dataKey="value" fill="#135b9e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border overflow-hidden">
          <h3 className="text-lg font-medium p-6 pb-4 flex items-center gap-2">
            <ShoppingCartIcon className="h-5 w-5 text-primary" />
            Produtos Mais Vendidos
          </h3>
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
