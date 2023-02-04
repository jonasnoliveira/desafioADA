-- CreateTable
CREATE TABLE "Bills" (
    "Referencia" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Data" DATETIME NOT NULL,
    "Data_de_check_in" DATETIME NOT NULL,
    "Data_de_check_out" DATETIME NOT NULL,
    "Aluguel_com_imposto" REAL NOT NULL,
    "Aluguel_sem_imposto" REAL NOT NULL,
    "Imposto_do_aluguel" INTEGER NOT NULL,
    "Extras_com_imposto" INTEGER NOT NULL,
    "Extras_sem_imposto" INTEGER NOT NULL,
    "Imposto_dos_extras" INTEGER NOT NULL,
    "Total_da_reserva_com_imposto" REAL NOT NULL,
    "Total_da_reserva_sem_imposto" REAL NOT NULL,
    "Total_imposto" INTEGER NOT NULL,
    "Pagamento" REAL NOT NULL,
    "Pendente" REAL NOT NULL,
    "Nome_alojamento" INTEGER NOT NULL,
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
