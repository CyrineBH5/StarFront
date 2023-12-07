import { User } from './user';

describe('User', () => {
  it('should create an instance of User', () => {
    // Provide the required constructor arguments
    const user = new User(
      'John Doe',           // Replace with an actual name
      '123 Main Street',    // Replace with an actual address
      'profile.jpg',        // Replace with an actual photo
      'Senior',             // Replace with an actual grade
      'Admin',              // Replace with an actual role
      'john@example.com',   // Replace with an actual email
      'password123'         // Replace with an actual password
    );

    // Perform your assertions or expectations
    expect(user).toBeTruthy();  // Example assertion, adjust as needed
  });
});
