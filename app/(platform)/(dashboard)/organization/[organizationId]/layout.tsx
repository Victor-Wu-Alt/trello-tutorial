/*
 * @Author: Victor
 * @Date: 2024-03-11 10:55:50
 * @LastEditTime: 2024-03-18 16:54:12
 */

import { auth } from "@clerk/nextjs"
import { OrgControl } from "./_components/org-control"
import { startCase } from 'lodash'

export async function generateMetadata() {
	const { orgSlug } = auth()
	return {
		title: startCase(orgSlug || 'organization')
	}
}

const OrganizationIdLayout = ({ children }: { children: React.ReactNode }) => {

	return (
		<>
			<OrgControl />
			{children}
		</>)
}

export default OrganizationIdLayout