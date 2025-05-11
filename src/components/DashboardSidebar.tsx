
import React from 'react';
import { HomeIcon, CalendarIcon, ThermometerIcon, ShoppingCartIcon, PackageIcon } from 'lucide-react';

const DashboardSidebar = () => {
  return (
    <aside className="bg-gray-50 border-r w-full md:w-64 md:min-h-screen p-4 flex flex-col">
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-primary">Menu</h2>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-1">
          <li>
            <a 
              href="#visao-geral" 
              className="flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <HomeIcon className="w-5 h-5 mr-3" />
              <span>Visão Geral</span>
            </a>
          </li>
          <li>
            <a 
              href="#validade" 
              className="flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <CalendarIcon className="w-5 h-5 mr-3" />
              <span>Validade de Produtos</span>
            </a>
          </li>
          <li>
            <a 
              href="#vendas" 
              className="flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <ShoppingCartIcon className="w-5 h-5 mr-3" />
              <span>Vendas</span>
            </a>
          </li>
          <li>
            <a 
              href="#ambiente" 
              className="flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <ThermometerIcon className="w-5 h-5 mr-3" />
              <span>Ambiente dos Setores</span>
            </a>
          </li>
          <li>
            <a 
              href="#desperdicio" 
              className="flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <PackageIcon className="w-5 h-5 mr-3" />
              <span>Desperdício</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
