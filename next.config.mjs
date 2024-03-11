/*
 * @Author: Victor
 * @Date: 2024-03-08 09:51:29
 * @LastEditTime: 2024-03-11 14:17:24
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{
			protocol: 'https',
			hostname: 'img.clerk.com'
		}]
	}
};

export default nextConfig;
