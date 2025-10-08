import http from 'k6/http';
import { validateResponse } from '../utils/helpers.js';
import { getConfig } from '../config/environment.js';

export function testContact() {
  const config = getConfig();
  const res = http.get(`${config.baseUrl}${config.endpoints.contact}`);
  validateResponse(res, 'Contact Page');
}
