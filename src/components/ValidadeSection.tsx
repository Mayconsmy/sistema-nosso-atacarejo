
import React from 'react';
import { Check, AlertTriangle, X } from 'lucide-react';

const ValidadeSection = () => {
  const tableData = [
    { 
      produto: "Maçã Fuji", 
      lote: "LT2023-05", 
      validade: "2025-05-14", 
      quantidade: 84, 
      status: "green" 
    },
    { 
      produto: "Queijo Minas", 
      lote: "QM2023-15", 
      validade: "2025-05-14", 
      quantidade: 22, 
      status: "green" 
    },
    { 
      produto: "Iogurte Natural", 
      lote: "IN2023-08", 
      validade: "2025-05-13", 
      quantidade: 45, 
      status: "yellow" 
    },
    { 
      produto: "Mamão Papaia", 
      lote: "MP2023-04", 
      validade: "2025-05-12", 
      quantidade: 18, 
      status: "yellow" 
    },
    { 
      produto: "Frango Resfriado", 
      lote: "FR2023-22", 
      validade: "2025-05-12", 
      quantidade: 12, 
      status: "yellow" 
    },
    { 
      produto: "Carne Moída", 
      lote: "CM2023-18", 
      validade: "2025-05-11", 
      quantidade: 8, 
      status: "red" 
    }
  ];

  const renderStatusIcon = (status: string) => {
    switch(status) {
      case 'green':
        return <Check className="w-5 h-5 text-green-600" />;
      case 'yellow':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'red':
        return <X className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'green':
        return <span className="text-xs text-green-600">Normal</span>;
      case 'yellow':
        return <span className="text-xs text-yellow-500">Atenção</span>;
      case 'red':
        return <span className="text-xs text-red-500">Crítico</span>;
      default:
        return null;
    }
  };

  return (
    <section id="validade" className="py-8">
      <h2 className="text-xl font-semibold mb-6">Validade de Produtos</h2>
      
      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Produto</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Lote</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Validade</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Quantidade</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tableData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{item.produto}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.lote}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.validade}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.quantidade}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {renderStatusIcon(item.status)}
                      {getStatusLabel(item.status)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ValidadeSection;
