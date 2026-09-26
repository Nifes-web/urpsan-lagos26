/**
 * URPSAN LAGOS'26 CONFERENCE CENTRAL CONFIGURATION
 * 
 * Edit any conference details, registration URL, dates, fees, 
 * or contact numbers directly in this file. Changes here reflect 
 * across the entire landing page.
 */

export const CONFERENCE_DATA = {
  // Official Titles & Branding
  conferenceName: "11th URPSAN Annual National Conference",
  shortTitle: "URPSAN National Conference",
  editionNumber: "11TH",
  locationBrand: "LAGOS'26",
  organizationName: "Urban and Regional Planning Students Association of Nigeria",
  organizationBody: "URPSAN National Body",
  
  // Theme Breakdown
  theme: "Equipping Future-Ready Planners: Harnessing Digital Innovation for Smart, Sustainable, and Resilient Communities",
  themePill: "THEME",
  themeLead: "Equipping Future-Ready Planners:",
  themeSupporting: "Harnessing Digital Innovation for Smart, Sustainable, and Resilient Communities",
  supportingTagline: "Building the Planners of Tomorrow",

  // Dates & Venue
  date: "20th – 23rd October, 2026",
  dateFull: "20th – 23rd October, 2026",
  venue: "University of Lagos (UNILAG), Lagos State.",
  venueName: "University of Lagos (UNILAG)",
  venueState: "Lagos State, Nigeria",
  venueFullAddress: "University of Lagos, University Road, Akoka, Yaba, Lagos State, Nigeria",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=University+of+Lagos+Akoka+Lagos+Nigeria",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.126488349272!2d3.398642274880572!3d6.505676793486665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cf510b65b6d%3A0x6d9f8b4c7c88b904!2sUniversity%20of%20Lagos!5e0!3m2!1sen!2sng!4v1711200000000!5m2!1sen!2sng",

  // Registration Fees
  // IMPORTANT: Early-bird deadline has passed (18th September).
  // ₦15,000 is the active current registration fee.
  currentFee: "₦15,000",
  currentFeeTitle: "Current Registration Fee",
  currentFeeCategory: "Late Payment",
  earlyBirdFee: "₦10,000",
  earlyBirdDeadline: "18th September",
  isEarlyBirdClosed: true,

  // Official URPSAN Lagos'26 Registration URL
  registrationUrl: "https://forms.gle/ZUMUCrhzq7A6VDbz8",

  // Contact Information
  contact1: {
    display: "0812 148 2364",
    tel: "+2348121482364",
    raw: "2348121482364",
  },
  contact2: {
    display: "0810 561 1496",
    tel: "+2348105611496",
    raw: "2348105611496",
  },

  // WhatsApp Enquiry Message
  whatsappMessage: "Hello, I would like to make an enquiry about the 11th URPSAN Annual National Conference, Lagos'26.",

  // Inquiry Text
  inquiryDescription: "For sponsorship, registration assistance, directions, and other conference enquiries, please contact us through any of the numbers below.",

  // Assets
  assets: {
    emblem: "/assets/urpsan-emblem.png",
    logoFull: "/assets/urpsan-logo-full.png",
    lagosMark: "/assets/lagos26-mark.png",
    lagosMarkWhite: "/assets/lagos26-mark-white.png",
    heroBackdrop: "/assets/hero-backdrop.jpg",
    africanPattern: "/assets/african-pattern.png",
    flyerFull: "/assets/conference-flyer.jpg",
  }
};

/**
 * Generate formatted WhatsApp link with pre-filled message
 * @param {string} rawPhone - Format: 2348121482364
 * @param {string} [customMsg]
 * @returns {string} Encoded WhatsApp URL
 */
export const getWhatsAppUrl = (rawPhone, customMsg = CONFERENCE_DATA.whatsappMessage) => {
  return `https://wa.me/${rawPhone}?text=${encodeURIComponent(customMsg)}`;
};
