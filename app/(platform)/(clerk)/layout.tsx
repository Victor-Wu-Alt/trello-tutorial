/*
 * @Author: Victor
 * @Date: 2024-03-08 22:37:00
 * @LastEditTime: 2024-03-08 22:39:37
 */


const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-full flex items-center justify-center">
			{children}
		</div>
	)
}

export default ClerkLayout;