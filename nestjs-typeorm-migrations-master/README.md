<p align="center">
  <a href="#" target="blank"><img src="https://realm1000.com/_next/image?url=%2Fassets%2Ffooter%2Frealm1000.png&w=3840&q=75" width="240" alt="Nest Logo" /></a>
</p>

## REALM1000 NestJS Setup

## **SQL Server**

1. Installation of `SQL Server 2019` Developer Edition with `SQL Server Configuration Manager`
2. Enable `TCP/IP` under `SQL Server Configuration` from `SQL Server Configuration Manager` to enable network connection.
3. Login and Connect to Database Engine to create the database _(You may set a new user for a given database)_
   - _Server Name being your machine `localhost`_
   - _`sa` user being the `root` equivalence in MySQL_

## **NestJS**

1. Install packages

```bash
$ yarn install
```

2. Modify .env file according to SQL Server Configurations set

```
SQL_USER="realm1000/user"
SQL_PASSWORD="badpassword"
SQL_DB="practice_db_1"
```

3. Synchronize Entities with DB

```bash
$ yarn migration:run
```

4. Run NestJS

```bash
$ yarn dev
```

## **Test endpoints**

- Must have VS Code Extension `Rest Client` installed
- On VSCode navigate to test/\* and trigger rest endpoints

## **Stay in touch**

Message me for concerns

- [Miguel Tiongson](https://msng.link/o/?09498460475=vi)

## **License**

Nest is [MIT licensed](LICENSE).
