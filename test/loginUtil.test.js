const { authenticate } = require('./loginUtil');

describe('authenticate', () => {
    test('should return true for valid username and password', () => {
        expect(authenticate('user1', 'password1')).toBe(true);
        expect(authenticate('user2', 'password2')).toBe(true);
    });

    test('should return false for invalid username', () => {
        expect(authenticate('invalidUser', 'password1')).toBe(false);
    });

    test('should return false for invalid password', () => {
        expect(authenticate('user1', 'invalidPassword')).toBe(false);
    });

    test('should return false for invalid username and password', () => {
        expect(authenticate('invalidUser', 'invalidPassword')).toBe(false);
    });
});