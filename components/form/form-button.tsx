/*
 * @Author: Victor
 * @Date: 2024-03-17 00:09:19
 * @LastEditTime: 2024-03-18 14:50:25
 */


"use client"

import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FormButtonProps {
	children: React.ReactNode,
	disabled?: boolean,
	className?: string,
	variant?: 'default' | 'primary' | 'destructive' | 'outline' | 'ghost' | 'link' | 'secondary'
}

export const FormButton = (
	{
		children,
		disabled,
		className,
		variant = 'primary'
	}: FormButtonProps) => {
	const { pending } = useFormStatus()
	return (
		<Button disabled={pending || disabled} size='sm' className={cn(className)} variant={variant} type="submit"
		>
			{children}
		</Button >
	)
}