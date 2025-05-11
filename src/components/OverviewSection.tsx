
import React from 'react';
import { 
  PackageIcon, 
  CalendarIcon, 
  ThermometerIcon, 
  PackageOpenIcon, 
  ShoppingCartIcon 
} from 'lucide-react';

const OverviewSection = () => {
  return (
    <section id="visao-geral" className="py-8">
      <h2 className="text-xl font-semibold mb-6">Visão Geral</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Produtos Cadastrados */}
        <div className="bg-white rounded-lg shadow p-5 border hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm mb-1">Produtos cadastrados</p>
              <h3 className="text-2xl font-bold">5.842</h3>
              <p className="text-xs text-green-600 mt-1">+124 neste mês</p>
            </div>
            <div className="p-2 bg-primary/10 rounded-md">
              <PackageIcon className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>

        {/* Card 2: Produtos Vencendo */}
        <div className="bg-white rounded-lg shadow p-5 border hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm mb-1">Produtos vencendo em até 3 dias</p>
              <h3 className="text-2xl font-bold">168</h3>
              <p className="text-xs text-yellow-500 mt-1">+32 desde ontem</p>
            </div>
            <div className="p-2 bg-yellow-100 rounded-md">
              <CalendarIcon className="h-6 w-6 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Card 3: Temperatura Média */}
        <div className="bg-white rounded-lg shadow p-5 border hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm mb-1">Temperatura média dos setores</p>
              <h3 className="text-2xl font-bold">7.4°C</h3>
              <p className="text-xs text-primary mt-1">Dentro da média ideal</p>
            </div>
            <div className="p-2 bg-blue-100 rounded-md">
              <ThermometerIcon className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>

        {/* Card 4: Percentual de Desperdício */}
        <div className="bg-white rounded-lg shadow p-5 border hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm mb-1">Percentual de desperdício</p>
              <h3 className="text-2xl font-bold">2.8%</h3>
              <p className="text-xs text-green-600 mt-1">-0.5% em relação ao mês anterior</p>
            </div>
            <div className="p-2 bg-red-100 rounded-md">
              <PackageOpenIcon className="h-6 w-6 text-red-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Card adicional: Total de vendas do dia */}
      <div className="mt-4">
        <div className="bg-white rounded-lg shadow p-5 border border-secondary/50 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm mb-1">Total de vendas hoje</p>
              <h3 className="text-3xl font-bold text-primary">R$ 42.867,50</h3>
              <p className="text-xs text-green-600 mt-1">+12.4% em relação à média diária</p>
            </div>
            <div className="p-3 bg-secondary/20 rounded-md">
              <ShoppingCartIcon className="h-8 w-8 text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
