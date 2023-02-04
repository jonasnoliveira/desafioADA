import { useEffect, useState } from 'react';

import Sidebar from 'components/Side/Side';
import { Order, Table } from 'components';
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
                <th scope="col" className="px-6 py-2">
                  <div className="flex items-center">
                    Referência
                    <Order />
                  </div>
                </th>
                <th scope="col" className="px-6 py-2">
                  <div className="flex items-center">
                    Data
                    <Order />
                  </div>
                </th>
                <th scope="col" className="px-6 py-2">
                  <div className="flex items-center">
                    Data de check in
                    <Order />
                  </div>
                </th>
                <th scope="col" className="px-6 py-2">
                  <div className="flex items-center">
                    Data de check out
                    <Order />
                  </div>
                </th>
                <th scope="col" className="px-6 py-2">
                  <div className="flex items-center">
                    Aluguel com imposto
                    <Order />
                  </div>
                </th>
                <th scope="col" className="px-6 py-2">
                  <div className="flex items-center">
                    Aluguel sem imposto
                    <Order />
                  </div>
                </th>
                <th scope="col" className="px-6 py-2">
                  <div className="flex items-center">
                    Imposto do aluguel
                    <Order />
                  </div>
                </th>
                <th scope="col" className="px-6 py-2">
                  <div className="flex items-center">
                    Extras com imposto
                    <Order />
                  </div>
                </th>
                <th scope="col" className="px-6 py-2">
                  <div className="flex items-center">
                    Imposto dos extras
                    <Order />
                  </div>
                </th>
                <th scope="col" className="px-6 py-2">
                  <div className="flex items-center">
                    Total da reserva com imposto
                    <Order />
                  </div>
                </th>
                <th scope="col" className="px-6 py-2">
                  <div className="flex items-center">
                    Total da reserva sem imposto
                    <Order />
                  </div>
                </th>
                <th scope="col" className="px-6 py-2">
                  <div className="flex items-center">
                    Total imposto
                    <Order />
                  </div>
                </th>
                <th scope="col" className="px-6 py-2">
                  <div className="flex items-center">
                    Pagamento
                    <Order />
                  </div>
                </th>
                <th scope="col" className="px-6 py-2">
                  <div className="flex items-center">
                    Pendente
                    <Order />
                  </div>
                </th>
                <th scope="col" className="px-6 py-2">
                  <div className="flex items-center">
                    Nome alojamento
                    <Order />
                  </div>
                </th>
                <th scope="col" className="px-6 py-2">
                  <div className="flex items-center">
                    Localidade
                    <Order />
                  </div>
                </th>
                <th scope="col" className="px-6 py-2">
                  <div className="flex items-center">
                    Portal
                    <Order />
                  </div>
                </th>
                <th scope="col" className="px-6 py-2">
                  <div className="flex items-center">
                    Comissao portal intermediario comis
                    <Order />
                  </div>
                  sao calculada
                </th>
                <th scope="col" className="px-6 py-2">
                  <div className="flex items-center">
                    Comissao portal intermediario comis
                    <Order />
                  </div>
                  sao personalizada
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
                    Total_da_reserva_com_imposto={
                      conta.Total_da_reserva_com_imposto
                    }
                    Total_da_reserva_sem_imposto={
                      conta.Total_da_reserva_sem_imposto
                    }
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
        <nav
          className="flex items-center justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              1-10
            </span>{' '}
            of{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              1000
            </span>
          </span>
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <a
                href="#"
                className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                ...
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                100
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
