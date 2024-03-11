/*
 * @Author: Victor
 * @Date: 2024-03-11 10:55:50
 * @LastEditTime: 2024-03-11 11:18:55
 */

import { OrgControl } from "./_components/org-control"

const OrganizationIdLayout = ({ children }: { children: React.ReactNode }) => {

	return (
		<>
			<OrgControl />
			{children}
		</>)
}

export default OrganizationIdLayout