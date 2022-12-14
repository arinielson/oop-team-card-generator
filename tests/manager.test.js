const Manager = require('../src/lib/manager');

describe('Manager', () => {
    const mockManager = {
        name: 'Susan',
        id: 200,
        email: 'susan@workemail.com',
        officeNumber: 150,
    };
    
    describe('constructor test', () => {
        test('should construct a new instance of an manager class', () => {
            const manager = new Manager(mockManager);
            expect(manager).toBeInstanceOf(Manager);
        });

        test('should construct a new instance of an intern class with name, id, email, and office number', () => {
            const manager = new Manager(mockManager);
            expect(manager).toEqual({
                name: 'Susan',
                id: 200,
                email: 'susan@workemail.com',
                officeNumber: 150,
                role: 'Manager',
            });
        });
    });

    describe('method tests', () => {
        test('should return id when the getId method is called', () => {
            const manager = new Manager(mockManager);
            expect(manager.getId()).toEqual(200);
        });

        test('should return id when the getName method is called', () => {
            const manager = new Manager(mockManager);
            expect(manager.getName()).toEqual('Susan');
        });

        test('should return email when the getEmail method is called', () => {
            const manager = new Manager(mockManager);
            expect(manager.getEmail()).toEqual('susan@workemail.com');
        });

        test('should return office number when the getOfficeNumber method is called', () => {
            const manager = new Manager(mockManager);
            expect(manager.getOfficeNumber()).toEqual(150);
        });

        test('should return manager role when the getRole method is called', () => {
            const manager = new Manager(mockManager);
            expect(manager.getRole()).toEqual('Manager');
        });
    });
});