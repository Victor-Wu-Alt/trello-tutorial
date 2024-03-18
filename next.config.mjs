/*
 * @Author: Victor
 * @Date: 2024-03-08 09:51:29
 * @LastEditTime: 2024-03-18 13:45:09
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.clerk.com'
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com'
			}
		]
	}
};

export default nextConfig;
