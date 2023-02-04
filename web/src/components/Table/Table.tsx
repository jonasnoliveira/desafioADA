import { Conta } from 'interfaces';

export function Table(props: Conta) {
  return (    
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {props.Referencia}
          </th>
          <td className="px-6 py-4">{props.Data}</td>
          <td className="px-6 py-4">{props.Data_de_check_in}</td>
          <td className="px-6 py-4">{props.Data_de_check_out}</td>
          <td className="px-6 py-4">{props.Aluguel_com_imposto}</td>
          <td className="px-6 py-4">{props.Aluguel_sem_imposto}</td>
          <td className="px-6 py-4">{props.Imposto_do_aluguel}</td>
          <td className="px-6 py-4">{props.Extras_com_imposto}</td>
          <td className="px-6 py-4">{props.Imposto_dos_extras}</td>
          <td className="px-6 py-4">{props.Total_da_reserva_com_imposto}</td>
          <td className="px-6 py-4">{props.Total_da_reserva_sem_imposto}</td>
          <td className="px-6 py-4">{props.Total_imposto}</td>
          <td className="px-6 py-4">{props.Pagamento}</td>
          <td className="px-6 py-4">{props.Pendente}</td>
          <td className="px-6 py-4">{props.Nome_alojamento}</td>
          <td className="px-6 py-4">{props.Localidade}</td>
          <td className="px-6 py-4">{props.Portal}</td>
          <td className="px-6 py-4">{props.Comissao_portal_intermediario_comissao_calculada}</td>
          <td className="px-6 py-4">{props.Comissao_portal_intermediario_comissao_personalizada}</td>
        </tr>
      
  );
}
