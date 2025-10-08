import http from 'k6/http';
import { validateResponse } from '../utils/helpers.js';
import { getConfig } from '../config/environment.js';

export function testHome() {
  const config = getConfig();
  const res = http.get(`${config.baseUrl}${config.endpoints.home}`);
  validateResponse(res, 'Home Page');
}
