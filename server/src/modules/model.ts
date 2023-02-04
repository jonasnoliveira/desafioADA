export class Bills {
  Referencia: number;
  Data: Date;
  Data_de_check_in: Date; 
  Data_de_check_out: Date;
  Aluguel_com_imposto: number;
  Aluguel_sem_imposto: number;
  Imposto_do_aluguel: number;
  Extras_com_imposto: number;
  Extras_sem_imposto: number;
  Imposto_dos_extras: number;
  Total_da_reserva_com_imposto: number; 
  Total_da_reserva_sem_imposto: number; 
  Total_imposto: number;
  Pagamento: number;
  Pendente: number;
  Nome_alojamento: number; 
  Localidade: string;
  Portal?: string;
  Comissao_portal_intermediario_comissao_calculada?: number; 
  Comissao_portal_intermediario_comissao_personalizada?: number;
}

export class PayableBills {
  Id?: number;
  Id_referencia: number;
  Data_vencimento: Date;
  Valor: number;
}

export class ReceivableBills {
  Id?: number;
  Id_referencia: number;
  Data_vencimento: Date;
  Valor: number;
}