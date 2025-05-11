
import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import DashboardSidebar from '../components/DashboardSidebar';
import OverviewSection from '../components/OverviewSection';
import ValidadeSection from '../components/ValidadeSection';
import VendasSection from '../components/VendasSection';
import AmbienteSection from '../components/AmbienteSection';
import DesperdicioSection from '../components/DesperdicioSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-64">
          <DashboardSidebar />
        </div>
        
        <main className="flex-1 p-4">
          <div className="container mx-auto max-w-5xl">
            <OverviewSection />
            <ValidadeSection />
            <VendasSection />
            <AmbienteSection />
            <DesperdicioSection />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
