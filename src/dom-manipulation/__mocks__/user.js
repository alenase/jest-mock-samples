const user = jest.genMockFromModule("../user");

user.getAuthenticated = () => ({
  age: 100500,
  name: "FAKE",
});

export default user;
