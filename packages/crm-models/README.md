# crm-models
This package contains the schema, types, and Prisma client for the database. Models are defined in `prisma/schema.prisma`.

# scripts

- `build`: generates the Prisma files and compiles the typescript files into `/dist`
- `db:generate`: generates Prisma files
- `db:create-migration`: creates a new migration that reconciles the differences between the deployed database and the schema
- `db:deploy-migrations`: runs the migrations against the deployed database
- `format`: formats the files

# Prisma
This package uses Prisma as an ORM. Currently, Prisma is configured to use a `sqlite` database. When you run the `db:deploy-migrations` command it will create a local `dev.db` file in the `prisma` directory.
