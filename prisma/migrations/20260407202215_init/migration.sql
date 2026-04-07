-- Generado con npx prisma migrate dev --name init
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[productos] DROP CONSTRAINT [DF__productos__activ__4BAC3F29],
[DF__productos__stock__4AB81AF0];
EXEC SP_RENAME N'dbo.PK__producto__07F4A132083D5FB5', N'PK__producto__07F4A132D9D1C74D';
ALTER TABLE [dbo].[productos] ALTER COLUMN [urlFoto] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[productos] ADD CONSTRAINT [DF__productos__activ__5AEE82B9] DEFAULT 1 FOR [activo], CONSTRAINT [DF__productos__stock__59FA5E80] DEFAULT 0 FOR [stock];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
