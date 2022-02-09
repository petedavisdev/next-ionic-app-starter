const withTranspileModules = require('next-transpile-modules')([
	'@ionic/react',
	'@ionic/core',
	'@stencil/core',
	'ionicons',
]);

/** @type {import('next').NextConfig} */
const nextConfig = withTranspileModules({
	reactStrictMode: true,
});

module.exports = nextConfig;
