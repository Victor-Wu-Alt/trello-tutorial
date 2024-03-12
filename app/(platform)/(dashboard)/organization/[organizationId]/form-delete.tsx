/*
 * @Author: Victor
 * @Date: 2024-03-12 13:25:36
 * @LastEditTime: 2024-03-12 13:29:03
 */


"use client"

import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom"

export const FormDelete = () => {

	const { pending } = useFormStatus()
	
	return (
		<Button disabled={pending} type='submit' variant="destructive" size="sm">
			Delete
		</Button>
	)
}