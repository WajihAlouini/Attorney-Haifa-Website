/**
 * Environment configuration
 */

export const config = {
    // Google Places API
    googlePlacesKey: import.meta.env.VITE_GOOGLE_PLACES_KEY,
    googlePlaceId: 'places/ChIJXxxxxxxxxxxxxxxxxxxx', // Replace with actual ID

    // Contact information
    email: 'counsel@hgalouini.com',
    whatsappNumber: '+216 98 643 612',

    // Office location
    office: {
        address: 'Kairouan Medina, Avenue des Martyrs',
        city: 'Kairouan',
        country: 'Tunisia',
    },

    // Social media (if needed in future)
    social: {
        linkedin: '',
        facebook: '',
    },

    // Feature flags
    features: {
        googleReviews: true,
        animations: true,
        analytics: false,
    },
}
