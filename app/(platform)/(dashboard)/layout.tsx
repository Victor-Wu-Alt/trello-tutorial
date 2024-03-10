/*
 * @Author: Victor
 * @Date: 2024-03-09 15:36:33
 * @LastEditTime: 2024-03-09 15:42:15
 */
import Navbar from "./_components/navbar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

	return (
		<div className="h-full">
			<Navbar />
			{children}
		</div>
	)
}

export default DashboardLayout