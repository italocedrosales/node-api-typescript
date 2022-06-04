import '../../utils/module-alias';
import { SignUpContorller } from './signup';

describe('Signup Controller', () => {
  test('Should return 400 not name is provided', () => {
    const sut = new SignUpContorller();
    const httpRequest = {
      body: {
        // name: 'any_name',
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});
