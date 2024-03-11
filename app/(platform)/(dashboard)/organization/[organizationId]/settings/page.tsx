/*
 * @Author: Victor
 * @Date: 2024-03-11 15:41:27
 * @LastEditTime: 2024-03-11 15:53:11
 */

import { OrganizationProfile } from "@clerk/nextjs"

const SettingsPage = () => {

	return (
		<div className="w-full">
			<OrganizationProfile
				appearance={{
					elements: {
						rootBox: {
							boxShadow: "none",
							width: '100%'
						},
						card: {
							border: '1px solid #e5e5e5',
							boxShadow: "none",
							width: '100%'
						}
					}
				}}
			/>
		</div>
	)
}

export default SettingsPage