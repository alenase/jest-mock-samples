import user from "../__mocks__/user";

describe("testing mocks", () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    jest.resetAllMocks();
    jest.clearAllMocks();
    jest.resetModules();
  });

  it("Automatic mock", () => {
    jest.mock("../fetchCurrentUser.js");
    const fetchCurrentUser = require("../fetchCurrentUser");

    document.body.innerHTML =
      "<div>" +
      '  <span id="username" />' +
      '  <button id="button" />' +
      "</div>";

    require("../displayUser");

    const $ = require("jquery");
    $("#button").click();

    expect(fetchCurrentUser).toBeCalled();
  });

  it("mockImplementation", () => {
    jest.mock("../fetchCurrentUser.js");

    document.body.innerHTML =
      "<div>" +
      '  <span id="username" />' +
      '  <button id="button" />' +
      "</div>";

    require("../displayUser");

    const $ = require("jquery");
    const fetchCurrentUser = require("../fetchCurrentUser");

    fetchCurrentUser.mockImplementation(() => ({
      fullName: "Johnny Cash",
      loggedIn: true,
    }));

    $("#button").click();

    expect(fetchCurrentUser).toBeCalled();
    expect($("#username").text()).toEqual("Johnny Cash - Logged In");
  });

  it("jest.mock(moduleName, factory, options)", () => {
    document.body.innerHTML =
      "<div>" +
      '  <span id="username" />' +
      '  <button id="button" />' +
      "</div>";

    jest.mock("../fetchCurrentUser", () => {
      return jest.fn(() => ({ fullName: "Johnny Cash", loggedIn: true }));
    });

    const fetchCurrentUser = require("../fetchCurrentUser");
    require("../displayUser");

    const $ = require("jquery");
    $("#button").click();

    expect(fetchCurrentUser).toBeCalled();
    expect($("#username").text()).toEqual("Johnny Cash - Logged In");
  });

  it("Manual mock", () => {
    expect(user.getAuthenticated()).toEqual({ age: 100500, name: "FAKE" });
  });
});
