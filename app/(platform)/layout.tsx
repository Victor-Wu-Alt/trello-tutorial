/*
 * @Author: Victor
 * @Date: 2024-03-08 22:20:21
 * @LastEditTime: 2024-03-18 13:22:29
 */

import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'sonner'

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {

	return (
		<ClerkProvider>
			<Toaster />
			{children}
		</ClerkProvider>
	)
}

export default PlatformLayout