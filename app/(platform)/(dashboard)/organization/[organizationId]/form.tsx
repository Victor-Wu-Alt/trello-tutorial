/*
 * @Author: Victor
 * @Date: 2024-03-12 10:39:51
 * @LastEditTime: 2024-03-12 15:56:51
 */
"use client"

import { createBoard } from "@/actions/create-board"
import { FormInput } from "@/components/form/form-input"
import { FormButton } from "./form-button"
import { useAction } from "@/hooks/use-action"

export const Form = () => {
	const { execute, fieldErrors } = useAction(createBoard, {
		onSuccess(data) {
			console.log(data, 'Success')
		},
		onError(error) {
			console.log(error, 'Error');
		},
	})

	const onSubmit = (formData: FormData) => {
		const title = formData.get('title') as string
		execute({ title })
	}

	return (
		<form action={onSubmit}>
			<div className="flex flex-col space-y-2">
				<FormInput
					label='Board Title'
					id='title'
					errors={fieldErrors} />
			</div>
			<FormButton />
		</form>
	)
}