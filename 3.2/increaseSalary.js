/**
 * TODO Давайте напишем функцию, которая будет увеличивать зарплату сотруднику с наименьшей зарплатой.

Вам нужно

Получает данные по всем работникам
Находит работника с наименьшей зарплатой
Отправляет запрос на повышение зарплаты этому сотруднику на 20%
Если запрос прошел успешно - отправить сотруднику уведомление об увеличении ЗП тектом: Hello, <имя>! Congratulations, your new salary is <новая ЗП>!
Если запрос завершился неудачей - отправить данные об ошибке администратору
Должна всегда возвращать resolved промис с boolean значением:

true если увеличение прошло успешно
false если нет
Все функции для получения/изменения данных асинхронны и возвращают промисы.
Вам предоставлены функции:

api.getEmployees(); // Возвращает массив с объектами {id: 343, name: 'Alex', salary: 20000}
api.setEmployeeSalary(employeeId, newSalary); // Принимает id сотрудника и новую зарплату. Возвращает новые данные по сотруднику.
api.notifyEmployee(employeeId, text); // Принимает id сотрудника и текст уведомления
api.notifyAdmin(error); // Принимает ошибку
 */

const api = {
   _employees: [
      { id: 1, name: 'Alex', salary: 120000 },
      { id: 2, name: 'Fred', salary: 110000 },
      { id: 3, name: 'Bob', salary: 80000 },
   ],
   getEmployees() {
      return new Promise(resolve => {
         resolve(this._employees.slice());
      });
   },
   setEmployeeSalary(employeeId, newSalary) {
      return new Promise(resolve => {
         this._employees = this._employees.map(employee =>
            employee.id !== employeeId
               ? employee
               : {
                    ...employee,
                    salary: newSalary,
                 }
         );
         resolve(this._employees.find(({ id }) => id === employeeId));
      });
   },
   notifyEmployee(employeeId, text) {
      return new Promise(resolve => {
         resolve(true);
      });
   },
   notifyAdmin(error) {
      return new Promise(resolve => {
         resolve(true);
      });
   },
   setEmployees(newEmployees) {
      return new Promise(resolve => {
         this._employees = newEmployees;
         resolve();
      });
   },
};

const increaseSalary = async () => {
   try {
      const employees = await api.getEmployees();
      const salaries = employees.map(employee => employee.salary);
      const minSalary = Math.min(...salaries);
      const minSalaryEmployee = employees.find(
         employee => employee.salary === minSalary
      );
      const employeeId = minSalaryEmployee.id;
      const newSalary = minSalaryEmployee.salary * 1.2;
      const text = `Hello, ${minSalaryEmployee.name}! Congratulations, your new salary is ${newSalary}!`;
      await api.setEmployeeSalary(employeeId, newSalary);
      await api.notifyEmployee(employeeId, text);
      return true;
   } catch (error) {
      api.notifyAdmin(error);
      return false;
   }
};

increaseSalary().then(console.log);
