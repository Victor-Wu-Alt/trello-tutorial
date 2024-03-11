/*
 * @Author: Victor
 * @Date: 2024-03-11 10:59:13
 * @LastEditTime: 2024-03-11 11:20:00
 */
"use client"

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";

export const OrgControl = () => {
	const params = useParams()
	const { setActive } = useOrganizationList()
	useEffect(() => {
		if (!setActive) return
		setActive({
			organization: params.organizationId as string,
		})
	}, [setActive, params.organizationId])

	return null
}