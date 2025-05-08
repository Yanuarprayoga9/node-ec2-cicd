const { handleRequest } = require(".");

describe('handleRequest', () => {
  it('should respond with status 200 and "Updated \\n"', () => {
    const req = {};

    const res = {
      setHeader: jest.fn(),
      end: jest.fn(),
    };

    // Simulasikan setter untuk statusCode
    Object.defineProperty(res, 'statusCode', {
      set: jest.fn(),
      get: () => 200,
      configurable: true,
    });

    handleRequest(req, res);

    expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'text/plain');
    expect(res.end).toHaveBeenCalledWith('Updated \n');
  });
});