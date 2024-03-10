/*
 * @Author: Victor
 * @Date: 2024-03-08 22:59:35
 * @LastEditTime: 2024-03-08 23:09:39
 */

import { OrganizationList } from "@clerk/nextjs"

export default function CreateOrganizationPage() {
	return (
		<OrganizationList
			hidePersonal={true}
			afterSelectOrganizationUrl='/organization/:id'
			afterCreateOrganizationUrl='/organization/:id'
		/>)
}