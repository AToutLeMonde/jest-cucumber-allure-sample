const apiResetPassword = require("./../../api/apiResetPassword").default;
const mockAxios = require("../support/__mocks__/axios").default;

describe("Отправка сообщения в API", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Отправляется корректное сообщение в API", () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: { success: true }
      })
    );

    return apiResetPassword("black.star").then(data => {
      expect(mockAxios.post).toHaveBeenCalledWith(
        "http://localhost:8080/reset/",
        {
          login: "black.star"
        }
      );
    });
  });
});
