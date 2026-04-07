
-- Generado con npx prisma migrate dev --name init*/
BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[productos] (
    [idProducto] INT NOT NULL IDENTITY(1,1),
    [nombre] NVARCHAR(255) NOT NULL,
    [urlFoto] NVARCHAR(1000) NOT NULL,
    [descripcion] NVARCHAR(4000),
    [precio] DECIMAL(10,2) NOT NULL,
    [stock] INT NOT NULL CONSTRAINT [DF__productos__stock__4AB81AF0] DEFAULT 0,
    [categoria] NVARCHAR(100),
    [activo] BIT NOT NULL CONSTRAINT [DF__productos__activ__4BAC3F29] DEFAULT 1,
    [creado] DATETIME CONSTRAINT [DF__productos__cread__4CA06362] DEFAULT CURRENT_TIMESTAMP,
    [ultimaActualizacion] DATETIME CONSTRAINT [DF__productos__ultim__4D94879B] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [PK__producto__07F4A132083D5FB5] PRIMARY KEY CLUSTERED ([idProducto])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
