/*
 * @Author: Victor
 * @Date: 2024-03-19 10:06:30
 * @LastEditTime: 2024-03-19 14:16:31
 */

"use client"

import { ListWrapper } from "./list-wrapper"
import { Plus, X } from "lucide-react"
import { useState, useRef, ElementRef } from "react"
import { useEventListener, useOnClickOutside } from "usehooks-ts"
import { FormInput } from "@/components/form/form-input"
import { useParams, useRouter } from "next/navigation"
import { FormButton } from "@/components/form/form-button"
import { Button } from "@/components/ui/button"
import { useAction } from "@/hooks/use-action"
import { createList } from "@/actions/create-list"
import { toast } from "sonner"

export const ListForm = () => {

	const router = useRouter()

	const params = useParams()

	const [isEditing, setIsEditing] = useState(false)
	const formRef = useRef<ElementRef<'form'>>(null)
	const inputRef = useRef<ElementRef<'input'>>(null)

	const enableEditing = () => {
		setIsEditing(true)

		setTimeout(() => {
			inputRef.current?.focus()
			// inputRef.current?.select()
		})
	}

	const disabledEditing = () => {
		setIsEditing(false)
	}

	const { execute, fieldErrors } = useAction(createList, {
		onSuccess: (data) => {
			toast.success('List created successfully')
			disabledEditing()
			router.refresh()
		},
		onError(error) {
			toast.error(error)
		},
	})

	const onKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			disabledEditing()
		}
	}

	useEventListener('keydown', onKeyDown)
	useOnClickOutside(formRef, disabledEditing)

	const onSubmit = (formData: FormData) => {
		const title = formData.get('title') as string
		const boardId = formData.get('boardId') as string

		execute({ title, boardId })
	}

	if (isEditing) {

		return (
			<ListWrapper>
				<form
					ref={formRef}
					className="w-full p-3 round-md bg-white space-y-4 shadow-md"
					action={onSubmit}
				>
					<FormInput ref={inputRef} id='title'
						errors={fieldErrors}
						className="text-sm px-2 py-1 h-7 font-medium border-transparent hover:border-input focus:border-input transition"
						placeholder="Enter list title..." />

					<input hidden value={params.boardId} name='boardId' />

					<div className="flex items-center gap-x-1">
						<FormButton>
							Add list
						</FormButton>
						<Button onClick={disabledEditing} size='sm' variant="ghost" >
							<X className="h-5 w-5" />
						</Button>
					</div>
				</form>
			</ListWrapper>
		)
	}

	return (
		<ListWrapper>
			<button
				className="w-full rounded-none bg-white/80 hover:bg-white/50 transtion p-3 flex items-center font-medium text-sm"
				onClick={enableEditing}
			>
				<Plus className="h-4 w-4 mr-2" />
				Add a list
			</button>
		</ListWrapper>
	)
}