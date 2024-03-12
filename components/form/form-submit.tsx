/*
 * @Author: Victor
 * @Date: 2024-03-12 16:03:28
 * @LastEditTime: 2024-03-12 16:25:06
 */

"use client"

import { useFormStatus } from "react-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface FormSubmitProps {
	children: React.ReactNode,
	disabled?: boolean,
	className?: string,
	variant: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'default ' | 'link' | 'unstyled' | 'outline'
}

export function FormSubmit({ children, disabled, className, variant }: FormSubmitProps) {
	return ()
}