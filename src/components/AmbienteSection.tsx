
import React from 'react';
import { ThermometerIcon } from 'lucide-react';

const AmbienteSection = () => {
  const ambienteData = [
    { 
      setor: "Hortifruti", 
      temperatura: 10, 
      temperaturaIdeal: "8-12",
      umidade: 75, 
      umidadeIdeal: "70-80",
      status: "normal" 
    },
    { 
      setor: "Carnes", 
      temperatura: 3,
      temperaturaIdeal: "0-4", 
      umidade: 82, 
      umidadeIdeal: "75-85",
      status: "normal" 
    },
    { 
      setor: "Laticínios", 
      temperatura: 7, 
      temperaturaIdeal: "2-6",
      umidade: 55, 
      umidadeIdeal: "65-75",
      status: "alerta" 
    },
  ];

  return (
    <section id="ambiente" className="py-8">
      <h2 className="text-xl font-semibold mb-6">Ambiente dos Setores</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ambienteData.map((item, index) => (
          <div 
            key={index}
            className={`rounded-lg shadow p-5 border ${item.status === 'alerta' ? 'card-alert' : 'bg-white'}`}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium">{item.setor}</h3>
              <div className={`p-2 ${item.status === 'alerta' ? 'bg-red-200' : 'bg-blue-100'} rounded-md`}>
                <ThermometerIcon className={`h-6 w-6 ${item.status === 'alerta' ? 'text-red-500' : 'text-blue-500'}`} />
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Temperatura:</span>
                  <span>Ideal: {item.temperaturaIdeal}°C</span>
                </div>
                <div className="flex items-center">
                  <span className={`text-2xl font-bold ${item.status === 'alerta' ? 'text-red-500' : ''}`}>
                    {item.temperatura}°C
                  </span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-md ml-3">
                    <div 
                      className={`h-full rounded-md ${item.status === 'alerta' ? 'bg-red-500' : 'bg-primary'}`}
                      style={{ width: `${(item.temperatura / 20) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Umidade:</span>
                  <span>Ideal: {item.umidadeIdeal}%</span>
                </div>
                <div className="flex items-center">
                  <span className={`text-2xl font-bold ${item.status === 'alerta' ? 'text-red-500' : ''}`}>
                    {item.umidade}%
                  </span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-md ml-3">
                    <div 
                      className={`h-full rounded-md ${item.status === 'alerta' ? 'bg-red-500' : 'bg-blue-400'}`}
                      style={{ width: `${item.umidade}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmbienteSection;
