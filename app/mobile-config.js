/* globals App */
/* eslint-disable quote-props */

App.info({
  id: 'com.xinmu668.app',
  name: '信睦贸易',
  description: 'The public app built for Sendmore Trading Pty Ltd',
  author: 'Sendmore Trading Pty Ltd',
  email: 'alex@xinmu668.com',
  website: 'http://xinmu668.com',
  version: '1.0.17002',
});

App.accessRule("blob:*");

/*
App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');
*/

App.icons({
  'iphone_2x': 'public/icons/logo_120.png',
  'iphone_3x': 'public/icons/logo_180.png',
  'ipad': 'public/icons/logo_76.png',
  'ipad_2x': 'public/icons/logo_152.png',
  'ipad_pro': 'public/icons/logo_167.png',
  'ios_settings': 'public/icons/logo_29.png',
  'ios_settings_2x': 'public/icons/logo_58.png',
  'ios_settings_3x': 'public/icons/logo_87.png',
  'ios_spotlight': 'public/icons/logo_40.png',
  'ios_spotlight_2x': 'public/icons/logo_80.png',
  'android_mdpi': 'public/icons/logo_48.png',
  'android_hdpi': 'public/icons/logo_72.png',
  'android_xhdpi': 'public/icons/logo_96.png',
  'android_xxhdpi': 'public/icons/logo_144.png',
  'android_xxxhdpi': 'public/icons/logo_192.png'
});

App.launchScreens({
  'iphone_2x': 'public/splash/splash_640x960.png',
  'iphone5': 'public/splash/splash_640x1136.png',
  'iphone6': 'public/splash/splash_750x1334.png',
  'iphone6p_portrait': 'public/splash/splash_1242x2208.png',
  'iphone6p_landscape': 'public/splash/splash_2208x1242.png',
  'ipad_portrait': 'public/splash/splash_768x1024.png',
  'ipad_portrait_2x': 'public/splash/splash_1536x2048.png',
  'ipad_landscape': 'public/splash/splash_1024x768.png',
  'ipad_landscape_2x': 'public/splash/splash_2048x1536.png',
  'android_mdpi_portrait': 'public/splash/splash_320x470.png',
  'android_mdpi_landscape': 'public/splash/splash_470x320.png',
  'android_hdpi_portrait': 'public/splash/splash_480x640.png',
  'android_hdpi_landscape': 'public/splash/splash_640x480.png',
  'android_xhdpi_portrait': 'public/splash/splash_720x960.png',
  'android_xhdpi_landscape': 'public/splash/splash_960x720.png',
  'android_xxhdpi_portrait': 'public/splash/splash_1080x1440.png',
  'android_xxhdpi_landscape': 'public/splash/splash_1440x1080.png'
});