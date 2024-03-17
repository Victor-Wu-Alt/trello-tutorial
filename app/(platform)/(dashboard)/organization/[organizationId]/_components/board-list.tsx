/*
 * @Author: Victor
 * @Date: 2024-03-17 09:33:40
 * @LastEditTime: 2024-03-17 10:42:56
 */


"use client"

import { FormPopover } from "@/components/form/form-popover"
import { Hint } from "@/components/hint"
import { HelpCircle, User2 } from "lucide-react"

export const BoardList = () => {

	return (
		<div className="space-y-4">
			<div className="flex items-center font-semibold text-lg text-neutral-700">
				<User2 className="h-6 w-6 mr-2" />
				Your Boards
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" >
				<FormPopover sideOffset={10} side="right">
					<div
						role='button'
						className="aspect-video relative h-full w-full bg-muted rounded-sm flex flex-col items-center justify-center  gap-y-1
					hover:opacity-75 transtion"
					>
						<p className="text-sm">Creat New Board</p>
						<span className="text-xs">
							5 remaining
						</span>
						<Hint description={'Free Workspaces can have up 5 open boards, For unlimited boards upgrade this workspace'} sideOffest={40}>
							<HelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px]" />
						</Hint>
					</div>
				</FormPopover>
			</div>
		</div>
	)
}