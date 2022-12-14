const Intern = require('../src/lib/intern');

describe('Intern', () => {
    const mockIntern = {
        name: 'Kevin',
        id: 159,
        email: 'kevin@email.com',
        school: 'University of Utah',
    };
    
    describe('constructor test', () => {
        test('should construct a new instance of an intern class', () => {
            const intern = new Intern(mockIntern);
            expect(intern).toBeInstanceOf(Intern);
        });

        test('should construct a new instance of an intern class with name, id, email, and school', () => {
            const intern = new Intern(mockIntern);
            expect(intern).toEqual({
                name: 'Kevin',
                id: 159,
                email: 'kevin@email.com',
                school: 'University of Utah',
                role: 'Intern',
            });
        });
    });

    describe('method tests', () => {
        test('should return id when the getId method is called', () => {
            const intern = new Intern(mockIntern);
            expect(intern.getId()).toEqual(159);
        });

        test('should return id when the getName method is called', () => {
            const intern = new Intern(mockIntern);
            expect(intern.getName()).toEqual('Kevin');
        });

        test('should return email when the getEmail method is called', () => {
            const intern = new Intern(mockIntern);
            expect(intern.getEmail()).toEqual('kevin@email.com');
        });

        test('should return school when the getSchool method is called', () => {
            const intern = new Intern(mockIntern);
            expect(intern.getSchool()).toEqual('University of Utah');
        });

        test('should return intern role when the getRole method is called', () => {
            const intern = new Intern(mockIntern);
            expect(intern.getRole()).toEqual('Intern');
        });
    });
});