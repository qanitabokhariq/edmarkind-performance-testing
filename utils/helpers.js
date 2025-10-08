import { check, sleep } from 'k6';

export function validateResponse(response, pageName) {
  check(response, {
    [`${pageName} - status is 200`]: (r) => r.status === 200,
    [`${pageName} - has title tag`]: (r) => r.body.includes('<title>'),
  });
  sleep(1);
}
