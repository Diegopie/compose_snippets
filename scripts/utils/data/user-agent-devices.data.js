import { chromium, firefox, webkit, devices } from "@playwright/test";

/**
 * @typedef {Object} Device
 * @property {string} name
 * @property {Object} options device.
 * @property {Object} browserType
 */

/**
 * A list of predefined user agent devices with corresponding browser and context options.
 * @type {Device[]}
 */

export const userAgentDevices = [
  // Desktop Browsers
  { 
    name: 'Desktop Chrome on Windows', 
    browserType: chromium, 
    options: {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
      viewport: { width: 1920, height: 1080 }
    }
  },
  { 
    name: 'Desktop Firefox on Linux', 
    browserType: firefox, 
    options: {
      userAgent: 'Mozilla/5.0 (X11; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0',
      viewport: { width: 1920, height: 1080 }
    }
  },
  { 
    name: 'Desktop Safari on macOS', 
    browserType: webkit, 
    options: {
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Safari/605.1.15',
      viewport: { width: 1440, height: 900 }
    }
  },
  { 
    name: 'Desktop Edge on Windows', 
    browserType: chromium, 
    options: {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36 Edg/90.0.818.56',
      viewport: { width: 1920, height: 1080 }
    }
  },

  // Mobile Devices
  { 
    name: 'iPhone 13 Pro', 
    browserType: webkit, 
    options: { 
      ...devices['iPhone 13 Pro'] 
    }
  },
  { 
    name: 'Samsung Galaxy S21', 
    browserType: chromium, 
    options: {
      ...devices['Galaxy S21']
    }
  },
  { 
    name: 'iPad Pro 11', 
    browserType: webkit, 
    options: {
      ...devices['iPad Pro 11']
    }
  },
  { 
    name: 'Google Pixel 6', 
    browserType: chromium, 
    options: {
      ...devices['Pixel 6']
    }
  },

  // Older and less common devices
  { 
    name: 'iPhone 8', 
    browserType: webkit, 
    options: { 
      ...devices['iPhone 8'] 
    }
  },
  { 
    name: 'Nexus 10', 
    browserType: chromium, 
    options: { 
      ...devices['Nexus 10'] 
    }
  },
  
  // Desktop High-Resolution Displays
  { 
    name: 'Desktop Chrome 4K on Windows', 
    browserType: chromium, 
    options: {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
      viewport: { width: 3840, height: 2160 }
    }
  },

  // Additional Browsers and OS Combos
  { 
    name: 'Desktop Firefox on macOS', 
    browserType: firefox, 
    options: {
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_3; rv:89.0) Gecko/20100101 Firefox/89.0',
      viewport: { width: 1440, height: 900 }
    }
  },
  { 
    name: 'Desktop Safari on iPad (macOS)', 
    browserType: webkit, 
    options: {
      userAgent: 'Mozilla/5.0 (iPad; CPU OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Safari/605.1.15',
      viewport: { width: 810, height: 1080 }
    }
  },

  // Lightweight browsers
  {
    name: 'Opera Mini on Android',
    browserType: chromium,
    options: {
      userAgent: 'Opera/9.80 (Android; Opera Mini/62.3.2254/191.277; U; en) Presto/2.12.423 Version/12.16',
      viewport: { width: 360, height: 640 }
    }
  },
  {
    name: 'UC Browser on Android',
    browserType: chromium,
    options: {
      userAgent: 'Mozilla/5.0 (Linux; U; Android 10; en-US; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 Mobile Safari/537.36 UCBrowser/13.4.2.1302',
      viewport: { width: 360, height: 740 }
    }
  },
  // Instagram In-App Browser
  { 
    name: 'Instagram In-App Browser on Android', 
    browserType: chromium, 
    options: {
      userAgent: 'Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.105 Mobile Safari/537.36 Instagram 213.0.0.39.120',
      viewport: { width: 360, height: 740 }
    }
  },
  { 
    name: 'Instagram In-App Browser on iOS', 
    browserType: webkit, 
    options: {
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 213.0.0.39.120',
      viewport: { width: 375, height: 812 }
    }
  },

  // TikTok In-App Browser
  { 
    name: 'TikTok In-App Browser on Android', 
    browserType: chromium, 
    options: {
      userAgent: 'Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Mobile Safari/537.36 TikTok 22.4.0',
      viewport: { width: 360, height: 740 }
    }
  },
  { 
    name: 'TikTok In-App Browser on iOS', 
    browserType: webkit, 
    options: {
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 TikTok 22.4.0',
      viewport: { width: 375, height: 812 }
    }
  },

  // Facebook In-App Browser
  { 
    name: 'Facebook In-App Browser on Android', 
    browserType: chromium, 
    options: {
      userAgent: 'Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.105 Mobile Safari/537.36 [FBAN/FB4A;FBAV/310.0.0.45.119;]',
      viewport: { width: 360, height: 740 }
    }
  },
  { 
    name: 'Facebook In-App Browser on iOS', 
    browserType: webkit, 
    options: {
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBAV/310.0.0.45.119;]',
      viewport: { width: 375, height: 812 }
    }
  },

  // Snapchat In-App Browser
  { 
    name: 'Snapchat In-App Browser on Android', 
    browserType: chromium, 
    options: {
      userAgent: 'Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Mobile Safari/537.36 Snapchat 11.42.0.35',
      viewport: { width: 360, height: 740 }
    }
  },
  { 
    name: 'Snapchat In-App Browser on iOS', 
    browserType: webkit, 
    options: {
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Snapchat 11.42.0.35',
      viewport: { width: 375, height: 812 }
    }
  }
];

export function getRandomDevice () {
  return userAgentDevices[
    Math.floor(Math.random() * userAgentDevices.length)
  ];
} 

