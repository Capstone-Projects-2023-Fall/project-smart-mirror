import {
  getFitbitData,
  getFitBitValue,
  PostFitbitData,
  findValueByKey,
  refreshToken,
  upsertSupa,
  getSuper,
} from './fitbit';

describe('Fitbit API Tests', () => {
  // Mocking fetch for unit tests
  global.fetch = jest.fn();

  beforeEach(() => {
    // Reset fetch mock between tests
    jest.resetAllMocks();
  });

  test('getFitbitData should make a GET request', async () => {
    const url = 'https://example.com';
    const requestToken = 'your-request-token';

    await getFitbitData(url, requestToken, 'some-refresh-token');

    expect(fetch).toHaveBeenCalledWith(url, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + requestToken,
      },
    });
  });

  test('getFitBitValue should make a GET request with parameters', async () => {
    const userId = 'user-id';
    const value = 'some-value';

    await getFitBitValue(userId, value);

    expect(fetch).toHaveBeenCalledWith(expect.stringContaining(userId));
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining(value));
  });

  test('PostFitbitData should make a POST request', async () => {
    const url = 'https://example.com';
    const requestToken = 'your-request-token';

    await PostFitbitData(url, requestToken);

    expect(fetch).toHaveBeenCalledWith(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + requestToken,
      },
    });
  });

  test('findValueByKey should find a value in a nested object', () => {
    const obj = { a: { b: { c: 42 } } };

    const result = findValueByKey(obj, 'c');

    expect(result).toEqual(42);
  });

  test('refreshToken should make a POST request to Fitbit token endpoint', async () => {
    const clientId = 'your-client-id';
    const clientSecret = 'your-client-secret';
    const refreshTokenValue = 'your-refresh-token';
    const userId = 'user-id';

    await refreshToken(clientId, clientSecret, refreshTokenValue, userId);

    expect(fetch).toHaveBeenCalledWith('https://api.fitbit.com/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
      },
      body: expect.any(String),
    });
  });

  test('upsertSupa should upsert data into Supa DB', async () => {
    const userId = 'user-id';
    const table = 'some-table';
    const data = { key: 'value' };

    await upsertSupa(userId, table, data);

    expect(fetch).toHaveBeenCalledWith(expect.stringContaining(table));
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining(JSON.stringify(data)));
  });

  test('getSuper should get data from Supa DB', async () => {
    const userId = 'user-id';
    const field = 'some-field';

    await getSuper(userId, field);

    expect(fetch).toHaveBeenCalledWith(expect.stringContaining(userId));
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining(field));
  });
});
