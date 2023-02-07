import { Conta } from 'interfaces';
import moment from 'moment';

export function Table(props: Conta) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {props.Referencia}
      </th>
      <td className="px-6 py-4">{moment(props.Data).format('DD/MM/YYYY')}</td>
      <td className="px-6 py-4">
        {moment(props.Data_de_check_in).format('DD/MM/YYYY')}
      </td>
      <td className="px-6 py-4">
        {moment(props.Data_de_check_out).format('DD/MM/YYYY')}
      </td>
      <td className="px-6 py-4">R$ {props.Aluguel_com_imposto.toFixed(2)}</td>
      <td className="px-6 py-4">R$ {props.Aluguel_sem_imposto.toFixed(2)}</td>
      <td className="px-6 py-4">R$ {props.Imposto_do_aluguel.toFixed(2)}</td>
      <td className="px-6 py-4">R$ {props.Extras_com_imposto.toFixed(2)}</td>
      <td className="px-6 py-4">R$ {props.Imposto_dos_extras.toFixed(2)}</td>
      <td className="px-6 py-4">R$ {props.Total_da_reserva_com_imposto.toFixed(2)}</td>
      <td className="px-6 py-4">R$ {props.Total_da_reserva_sem_imposto.toFixed(2)}</td>
      <td className="px-6 py-4">R$ {props.Total_imposto.toFixed(2)}</td>
      <td className="px-6 py-4">R$ {props.Pagamento.toFixed(2)}</td>
      <td className="px-6 py-4">R$ {props.Pendente.toFixed(2)}</td>
      <td className="px-6 py-4">{props.Nome_alojamento}</td>
      <td className="px-6 py-4">{props.Localidade}</td>
      <td className="px-6 py-4">{props.Portal}</td>
      <td className="px-6 py-4">
        R$ {props.Comissao_portal_intermediario_comissao_calculada?.toFixed(2)}
      </td>
      <td className="px-6 py-4">
        R$ {props.Comissao_portal_intermediario_comissao_personalizada?.toFixed(2)}
      </td>
    </tr>
  );
}
