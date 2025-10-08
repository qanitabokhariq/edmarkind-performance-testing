import { group } from 'k6';
import { options } from './config/options.js';
import { testHome } from './scenarios/home.test.js';
import { testFacilities } from './scenarios/facilities.test.js';
import { testFood } from './scenarios/food.test.js';
import { testContact } from './scenarios/contact.test.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js'

export { options };

export default function () {
  group('🏠 Home Page', () => testHome());
  group('🏭 Facilities Page', () => testFacilities());
  group('🍽️ Food & Beverage Page', () => testFood());
  group('📞 Contact Us Page', () => testContact());
}

export function handleSummary(data) {
  return {
    'reports/k6-report.html': htmlReport(data),
  };
}