// DO NOT CHANGE ANYTHING IN THIS FILE.

const prompCreator = require('prompt-sync');

jest.mock(
  'prompt-sync',
  () => {
    const mPrompt = jest.fn();
    return jest.fn(() => mPrompt);
  },
  { virtual: true }
);

describe('Test 1', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('when n=10', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('10');

    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual('0,2,4,6,8,10');
    });
  });
  test('when n=1', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('1');
    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual('0');
    });
  });
  test('when n=0', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('0');
    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual('0');
    });
  });
  test('when n=9', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('9');
    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual('0,2,4,6,8');
    });
  });
  test('when n=-1', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('-1');
    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual('');
    });
  });
});
