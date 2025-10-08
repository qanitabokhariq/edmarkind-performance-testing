export function getConfig() {
    return {
        baseUrl: __ENV.BASE_URL || 'https://staging.edmarkind.com',
        endpoints: {
            home: '/',
            facilities: '/our-facilities/journey-towards-industry-4-0/',
            food: '/food-beverage/',
            contact: '/contact-us/'
        }
    };
}