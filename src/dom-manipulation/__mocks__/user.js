const user = jest.createMockFromModule("../user");

user.getAuthenticated = () => ({
  age: 100500,
  name: "FAKE",
});

export default user;
