// an array of routes that are accessible to the public
// These routes do not require authentication
// @type {string[]}

export const publicRoutes = ["/"];

// // an array of routes that are accessible to authenticated users
// these routes will redirect logged in users to /SettingsPage
// @type {string[]}

export const authRoutes = ["/auth/login", "/auth/register"];

// the prefix for api authentication routes
// routes that star
// @type {string[]}

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";
