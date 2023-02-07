import { ContaPagarReceber } from 'interfaces';
import moment from 'moment';

export function TableBillToPay(props: ContaPagarReceber) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {props.Id}
      </th>
      <td className="px-6 py-4">{props.Id_referencia}</td>
      <td className="px-6 py-4">{moment(props.Data_vencimento).format('DD/MM/YYYY')}</td>
      <td className="px-6 py-4">R$ {props.Valor.toFixed(2)}</td>
    </tr>
  );
}