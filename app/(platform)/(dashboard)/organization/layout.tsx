/*
 * @Author: Victor
 * @Date: 2024-03-11 10:39:18
 * @LastEditTime: 2024-03-11 13:10:06
 */

import { Sidebar } from "../_components/sidebar"


const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto">
			<div className="flex gap-x-7">
				<div className="w-64 shrink-0 hidden md:block">
					<Sidebar />
				</div>
				{children}</div>
		</main>
	)
}

export default OrganizationLayout