-- CreateTable
CREATE TABLE "Bills" (
    "Referencia" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Data" TEXT NOT NULL,
    "Data_de_check_in" TEXT NOT NULL,
    "Data_de_check_out" TEXT NOT NULL,
    "Aluguel_com_imposto" REAL NOT NULL,
    "Aluguel_sem_imposto" REAL NOT NULL,
    "Imposto_do_aluguel" REAL NOT NULL,
    "Extras_com_imposto" REAL NOT NULL,
    "Extras_sem_imposto" REAL NOT NULL,
    "Imposto_dos_extras" REAL NOT NULL,
    "Total_da_reserva_com_imposto" REAL NOT NULL,
    "Total_da_reserva_sem_imposto" REAL NOT NULL,
    "Total_imposto" REAL NOT NULL,
    "Pagamento" REAL NOT NULL,
    "Pendente" REAL NOT NULL,
    "Nome_alojamento" REAL NOT NULL,
    "Localidade" TEXT NOT NULL,
    "Portal" TEXT,
    "Comissao_portal_intermediario_comissao_calculada" REAL,
    "Comissao_portal_intermediario_comissao_personalizada" REAL
);

-- CreateTable
CREATE TABLE "PayableBills" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Id_referencia" INTEGER NOT NULL,
    "Data_vencimento" DATETIME NOT NULL,
    "Valor" REAL NOT NULL,
    CONSTRAINT "PayableBills_Id_referencia_fkey" FOREIGN KEY ("Id_referencia") REFERENCES "Bills" ("Referencia") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ReceivableBills" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Id_referencia" INTEGER NOT NULL,
    "Data_vencimento" DATETIME NOT NULL,
    "Valor" REAL NOT NULL,
    CONSTRAINT "ReceivableBills_Id_referencia_fkey" FOREIGN KEY ("Id_referencia") REFERENCES "Bills" ("Referencia") ON DELETE RESTRICT ON UPDATE CASCADE
);
