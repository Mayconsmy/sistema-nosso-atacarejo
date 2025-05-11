
import React from 'react';
import { PackageIcon, CalendarIcon, ThermometerIcon, PackageOpenIcon } from 'lucide-react';

const OverviewSection = () => {
  return (
    <section id="visao-geral" className="py-8">
      <h2 className="text-xl font-semibold mb-6">Visão Geral</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Produtos Cadastrados */}
        <div className="bg-white rounded-lg shadow p-5 border">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm mb-1">Produtos cadastrados</p>
              <h3 className="text-2xl font-bold">2.453</h3>
            </div>
            <div className="p-2 bg-green-100 rounded-md">
              <PackageIcon className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>

        {/* Card 2: Produtos Vencendo */}
        <div className="bg-white rounded-lg shadow p-5 border">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm mb-1">Produtos vencendo em até 3 dias</p>
              <h3 className="text-2xl font-bold">78</h3>
            </div>
            <div className="p-2 bg-yellow-100 rounded-md">
              <CalendarIcon className="h-6 w-6 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Card 3: Temperatura Média */}
        <div className="bg-white rounded-lg shadow p-5 border">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm mb-1">Temperatura média dos setores</p>
              <h3 className="text-2xl font-bold">5.2°C</h3>
            </div>
            <div className="p-2 bg-blue-100 rounded-md">
              <ThermometerIcon className="h-6 w-6 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Card 4: Percentual de Desperdício */}
        <div className="bg-white rounded-lg shadow p-5 border">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm mb-1">Percentual de desperdício</p>
              <h3 className="text-2xl font-bold">3.7%</h3>
            </div>
            <div className="p-2 bg-red-100 rounded-md">
              <PackageOpenIcon className="h-6 w-6 text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
