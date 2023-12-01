/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	modularizeImports: {
		'@mui/icons-material': {
			transform: '@mui/icons-material/{{member}}',
		},
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'source.unsplash.com',
				port: '',
				pathname: '/random',
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
				port: '',
				pathname: '/u/**',
			},
		],
	},
};

module.exports = nextConfig;