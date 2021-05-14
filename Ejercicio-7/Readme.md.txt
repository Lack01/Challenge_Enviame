# Ejercicio 7 SQL

Se agrega query utilizada para realizar la modificación en Salary de Employees, también se integró en carpeta el archivo SQL.

## Query 🚀

UPDATE employees E
INNER JOIN
countries C ON E.country_id = C.id
INNER JOIN
continents CO ON C.continent_id = CO.id
SET
salary = salary + salary * (CO.anual_adjustment/100)
WHERE
salary <= 5000;