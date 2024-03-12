/*
 * @Author: Victor
 * @Date: 2024-03-12 13:17:52
 * @LastEditTime: 2024-03-12 13:17:52
 */


"use client"

import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom"

export const FormButton = () => {

	const { pending } = useFormStatus()
	return (
		<Button disabled={pending} type='submit'>
			Submit
		</Button>
	)
}