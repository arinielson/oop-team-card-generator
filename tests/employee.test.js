const Employee = require('../src/lib/employee');

describe('Employee', () => {
    const mockEmployee = {
        name: 'Ari',
        id: 126,
        email: 'ari@workemail.com',
    };
    
    describe('constructor test', () => {
        test('should construct a new instance of an employee class', () => {
            const employee = new Employee(mockEmployee);
            expect(employee).toBeInstanceOf(Employee);
        });

        test('should construct a new instance of an employee class with name, id, email', () => {
            const employee = new Employee(mockEmployee);
            expect(employee).toEqual({
                name: 'Ari',
                id: 126,
                email: 'ari@workemail.com',
            });
        });
    });

    describe('method tests', () => {
        test('should return id when the getId method is called', () => {
            const employee = new Employee(mockEmployee);
            expect(employee.getId()).toEqual(126);
        });

        test('should return id when the getName method is called', () => {
            const employee = new Employee(mockEmployee);
            expect(employee.getName()).toEqual('Ari');
        });

        test('should return email when the getEmail method is called', () => {
            const employee = new Employee(mockEmployee);
            expect(employee.getEmail()).toEqual('ari@workemail.com');
        });
    });
});