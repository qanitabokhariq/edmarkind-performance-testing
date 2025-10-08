# Performance Testing Suite - EdmarKind Website

A structured k6 performance testing suite for EdmarKind's staging website. This suite tests critical user journeys across the main website sections.

## 📁 Project Structure

```
├── config/
│   └── options.js         # k6 test configuration and options
├── scenarios/
│   ├── home.test.js      # Home page test scenarios
│   ├── facilities.test.js # Facilities page test scenarios
│   ├── food.test.js      # Food & Beverage page test scenarios
│   └── contact.test.js   # Contact page test scenarios
├── utils/
│   └── helpers.js        # Common testing utilities
├── reports/
│   └── results.json      # Test execution results
└── main.test.js          # Test orchestrator
```

## 🎯 Test Scenarios

The suite currently tests these key pages:
- 🏠 Home Page (`https://staging.edmarkind.com/`)
- 🏭 Facilities - Industry 4.0 (`/our-facilities/journey-towards-industry-4-0/`)
- 🍽️ Food & Beverage (`/food-beverage/`)
- 📞 Contact Us (`/contact-us/`)

Each scenario validates:
- Page availability (200 status code)
- Critical page elements (title tags)
- Performance metrics (response times, TLS handling)

## 🚀 Running the Tests

1. Install k6 if you haven't already:
   ```powershell
   choco install k6 -y
   ```

2. Run the complete test suite:
   ```powershell
   k6 run -e BASE_URL=https://staging.edmarkind.com main.test.js
   ```

3. Or use the .env file values (default):
   ```powershell
   k6 run main.test.js
   ```

4. Run with results export:
   ```powershell
   k6 run main.test.js --summary-export=./reports/results.json
   ```

## 🔧 Configuration

Key performance thresholds are defined in `config/options.js`. Current targets:
- Response time p95 < 1000ms
- Error rate < 1%

## 📝 Adding New Tests

1. Create a new test file in `scenarios/`
2. Import and add the test to `main.test.js`
3. Update options if needed in `config/options.js`