
import React, { useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, AlertTriangle, X, Package, Save } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

// Dados fictícios de produtos com status de validade
const initialProducts = [
  { 
    id: 1,
    produto: "Iogurte Natural Integral", 
    lote: "IN2023-42", 
    validade: "2025-05-14", // 3 dias
    quantidade: 48, 
    status: "green",
    estoque: 65
  },
  { 
    id: 2,
    produto: "Queijo Minas Frescal", 
    lote: "QM2023-38", 
    validade: "2025-05-14", // 3 dias
    quantidade: 26, 
    status: "green",
    estoque: 40
  },
  { 
    id: 3,
    produto: "Leite Integral UHT", 
    lote: "LI2023-65", 
    validade: "2025-05-13", // 2 dias 
    quantidade: 72, 
    status: "yellow",
    estoque: 120
  },
  { 
    id: 4,
    produto: "Pão de Forma Integral", 
    lote: "PF2023-28", 
    validade: "2025-05-13", // 2 dias
    quantidade: 18, 
    status: "yellow",
    estoque: 30
  },
  { 
    id: 5,
    produto: "Presunto Fatiado", 
    lote: "PR2023-54", 
    validade: "2025-05-12", // 1 dia
    quantidade: 14, 
    status: "yellow",
    estoque: 25
  },
  { 
    id: 6,
    produto: "Salada Pronta", 
    lote: "SP2023-37", 
    validade: "2025-05-11", // hoje
    quantidade: 10, 
    status: "red",
    estoque: 15
  },
  { 
    id: 7,
    produto: "Biscoito Cream Cracker", 
    lote: "BC2023-45", 
    validade: "2025-08-15",
    quantidade: 85, 
    status: "green",
    estoque: 150
  },
  { 
    id: 8,
    produto: "Chocolate ao Leite", 
    lote: "CL2023-62", 
    validade: "2025-07-20",
    quantidade: 42, 
    status: "green",
    estoque: 60
  },
  {
    id: 9, 
    produto: "Macarrão Instantâneo", 
    lote: "MI2023-33", 
    validade: "2025-06-10",
    quantidade: 36, 
    status: "green",
    estoque: 80
  }
];

const Reestoque = () => {
  const [products, setProducts] = useState(initialProducts);
  const [reestoqueValues, setReestoqueValues] = useState<{ [key: number]: number }>({});
  const [filter, setFilter] = useState<'all' | 'green' | 'yellow' | 'red'>('all');
  const [searchTerm, setSearchTerm] = useState('');

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
        return <span className="text-xs text-green-600">Normal (3+ dias)</span>;
      case 'yellow':
        return <span className="text-xs text-yellow-500">Atenção (1-2 dias)</span>;
      case 'red':
        return <span className="text-xs text-red-500">Crítico (hoje)</span>;
      default:
        return null;
    }
  };

  const handleReestoqueChange = (id: number, value: string) => {
    const numValue = parseInt(value) || 0;
    setReestoqueValues({
      ...reestoqueValues,
      [id]: numValue
    });
  };

  const handleSaveReestoque = (id: number) => {
    if (!reestoqueValues[id]) {
      toast.error("Insira uma quantidade válida para reestoque");
      return;
    }

    setProducts(products.map(product => {
      if (product.id === id) {
        const newEstoque = product.estoque + reestoqueValues[id];
        toast.success(`Produto "${product.produto}" reestocado com sucesso! Novo estoque: ${newEstoque}`);
        return {
          ...product,
          estoque: newEstoque
        };
      }
      return product;
    }));

    // Limpar o valor de reestoque após salvar
    const updatedValues = { ...reestoqueValues };
    delete updatedValues[id];
    setReestoqueValues(updatedValues);
  };

  const filteredProducts = products.filter(product => {
    const matchesStatus = filter === 'all' || product.status === filter;
    const matchesSearch = product.produto.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.lote.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold mb-6 text-primary">Sistema de Reestoque</h1>
        
        <div className="mb-8">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <CardTitle>Gerenciamento de Produtos</CardTitle>
                <div className="relative w-full sm:max-w-xs">
                  <Input
                    placeholder="Pesquisar produtos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setFilter(value as any)}>
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger value="all">Todos</TabsTrigger>
                  <TabsTrigger value="green">Normal</TabsTrigger>
                  <TabsTrigger value="yellow">Atenção</TabsTrigger>
                  <TabsTrigger value="red">Crítico</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-0">
                  <div className="rounded-md border overflow-hidden">
                    <Table>
                      <TableCaption>Lista de produtos para gerenciamento de reestoque</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Produto</TableHead>
                          <TableHead>Lote</TableHead>
                          <TableHead>Validade</TableHead>
                          <TableHead>Qtd.</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Estoque</TableHead>
                          <TableHead>Reestoque</TableHead>
                          <TableHead>Ações</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredProducts.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={8} className="text-center py-6">
                              Nenhum produto encontrado
                            </TableCell>
                          </TableRow>
                        ) : (
                          filteredProducts.map((item) => (
                            <TableRow key={item.id} className={item.status === 'red' ? 'bg-red-50' : ''}>
                              <TableCell className="font-medium">{item.produto}</TableCell>
                              <TableCell>{item.lote}</TableCell>
                              <TableCell>{item.validade}</TableCell>
                              <TableCell>{item.quantidade}</TableCell>
                              <TableCell>
                                <div className="flex items-center space-x-2">
                                  {renderStatusIcon(item.status)}
                                  {getStatusLabel(item.status)}
                                </div>
                              </TableCell>
                              <TableCell>{item.estoque}</TableCell>
                              <TableCell>
                                <Input 
                                  type="number"
                                  min="0"
                                  placeholder="Qtd"
                                  value={reestoqueValues[item.id] || ''}
                                  onChange={(e) => handleReestoqueChange(item.id, e.target.value)}
                                  className="w-20"
                                />
                              </TableCell>
                              <TableCell>
                                <button 
                                  onClick={() => handleSaveReestoque(item.id)}
                                  className="p-2 bg-primary text-white rounded hover:bg-primary/80 transition-colors"
                                  title="Salvar"
                                >
                                  <Save size={16} />
                                </button>
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>

                <TabsContent value="green" className="mt-0">
                  {/* O mesmo conteúdo da tabela será exibido aqui, mas filtrado por status */}
                  {/* O filtro já foi aplicado em filteredProducts */}
                </TabsContent>
                
                <TabsContent value="yellow" className="mt-0">
                  {/* O mesmo conteúdo da tabela será exibido aqui, mas filtrado por status */}
                  {/* O filtro já foi aplicado em filteredProducts */}
                </TabsContent>
                
                <TabsContent value="red" className="mt-0">
                  {/* O mesmo conteúdo da tabela será exibido aqui, mas filtrado por status */}
                  {/* O filtro já foi aplicado em filteredProducts */}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="text-primary" size={20} />
                Produtos Críticos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{products.filter(p => p.status === 'red').length}</p>
              <p className="text-sm text-gray-500">Produtos próximos do vencimento</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="text-yellow-500" size={20} />
                Produtos em Atenção
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{products.filter(p => p.status === 'yellow').length}</p>
              <p className="text-sm text-gray-500">Produtos que precisam de verificação</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="text-green-600" size={20} />
                Produtos Normais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{products.filter(p => p.status === 'green').length}</p>
              <p className="text-sm text-gray-500">Produtos com validade normal</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reestoque;
