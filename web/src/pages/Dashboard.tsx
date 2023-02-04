import { useEffect, useState } from 'react';

import Sidebar from 'components/Side/Side';
import { Table } from 'components';
import { Conta } from 'interfaces';
import { Api } from 'providers';

export function DashboardPage() {
  const [contas, setContas] = useState<Conta[]>([]);

  useEffect(() => {
    Api.then((Response) => {
      setContas(Response.data);
    }).catch((Response) => {
      console.error(Response);
    });
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-3 mt-12">
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              Home
            </div>
          </div>
        </div>
        <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Referência
          </th>
          <th scope="col" className="px-6 py-3">
            Data
          </th>
          <th scope="col" className="px-6 py-3">
            Data de check in
          </th>
          <th scope="col" className="px-6 py-3">
            Data de check out
          </th>
          <th scope="col" className="px-6 py-3">
            Aluguel com imposto
          </th>
          <th scope="col" className="px-6 py-3">
            Aluguel sem imposto
          </th>
          <th scope="col" className="px-6 py-3">
            Imposto do aluguel
          </th>
          <th scope="col" className="px-6 py-3">
            Extras com imposto
          </th>
          <th scope="col" className="px-6 py-3">
            Imposto dos extras
          </th>
          <th scope="col" className="px-6 py-3">
            Total da reserva com imposto
          </th>
          <th scope="col" className="px-6 py-3">
            Total da reserva sem imposto
          </th>
          <th scope="col" className="px-6 py-3">
            Total imposto
          </th>
          <th scope="col" className="px-6 py-3">
            Pagamento
          </th>
          <th scope="col" className="px-6 py-3">
            Pendente
          </th>
          <th scope="col" className="px-6 py-3">
            Nome alojamento
          </th>
          <th scope="col" className="px-6 py-3">
            Localidade
          </th>
          <th scope="col" className="px-6 py-3">
            Portal
          </th>
          <th scope="col" className="px-6 py-3">
            Comissao portal intermediario comissao calculada
          </th>
          <th scope="col" className="px-6 py-3">
            Comissao portal intermediario comissao personalizada
          </th>
        </tr>
      </thead>
      <tbody>
        {contas.map((conta) => {
          console.log(conta);
          return (
            <Table
              Referencia={conta.Referencia}
              Data={conta.Data}
              Data_de_check_in={conta.Data_de_check_in}
              Data_de_check_out={conta.Data_de_check_out}
              Aluguel_com_imposto={conta.Aluguel_com_imposto}
              Aluguel_sem_imposto={conta.Aluguel_sem_imposto}
              Imposto_do_aluguel={conta.Imposto_do_aluguel}
              Extras_com_imposto={conta.Extras_com_imposto}
              Extras_sem_imposto={conta.Extras_sem_imposto}
              Imposto_dos_extras={conta.Imposto_dos_extras}
              Total_da_reserva_com_imposto={conta.Total_da_reserva_com_imposto}
              Total_da_reserva_sem_imposto={conta.Total_da_reserva_sem_imposto}
              Total_imposto={conta.Total_imposto}
              Pagamento={conta.Pagamento}
              Pendente={conta.Pendente}
              Nome_alojamento={conta.Nome_alojamento}
              Localidade={conta.Localidade}
              Portal={conta.Portal}
              Comissao_portal_intermediario_comissao_calculada={
                conta.Comissao_portal_intermediario_comissao_calculada
              }
              Comissao_portal_intermediario_comissao_personalizada={
                conta.Comissao_portal_intermediario_comissao_personalizada
              }
            />
          );
        })}
        </tbody>
    </table>
        </div>
      </div>
    </div>
  );
}
