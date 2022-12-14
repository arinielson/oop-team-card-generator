const Engineer = require('../src/lib/engineer');

describe('Engineer', () => {
    const mockEngineer = {
        name: 'Angie',
        id: 224,
        email: 'angie@workemail.com',
        github: 'www.github.com/angie',
    };
    
    describe('constructor test', () => {
        test('should construct a new instance of an engineer class', () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer).toBeInstanceOf(Engineer);
        });

        test('should construct a new instance of an engineer class with name, id, email, and github profile', () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer).toEqual({
                name: 'Angie',
                id: 224,
                email: 'angie@workemail.com',
                github: 'www.github.com/angie',
                role: 'Engineer',
            });
        });
    });

    describe('method tests', () => {
        test('should return id when the getId method is called', () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getId()).toEqual(224);
        });

        test('should return id when the getName method is called', () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getName()).toEqual('Angie');
        });

        test('should return email when the getEmail method is called', () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getEmail()).toEqual('angie@workemail.com');
        });

        test('should return github profile URL when the getGithub method is called', () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getGithub()).toEqual('www.github.com/angie');
        });

        test('should return engineer role when the getRole method is called', () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
});