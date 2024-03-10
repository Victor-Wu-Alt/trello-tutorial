/*
 * @Author: Victor
 * @Date: 2024-03-08 22:20:21
 * @LastEditTime: 2024-03-08 22:21:38
 */

import { ClerkProvider } from '@clerk/nextjs'

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {

	return (
		<ClerkProvider>
			{children}
		</ClerkProvider>
	)
}

export default PlatformLayout