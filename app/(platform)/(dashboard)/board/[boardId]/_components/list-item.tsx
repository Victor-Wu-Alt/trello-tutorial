/*
 * @Author: Victor
 * @Date: 2024-03-19 15:01:02
 * @LastEditTime: 2024-03-19 16:44:05
 */

"use client"

import { ListWithCards } from "@/type"
import { ListHeader } from "./list-header"

interface ListItemProps {
	index: number
	data: ListWithCards
}

export const ListItem = ({ index, data }: ListItemProps) => {
	return (
		<li className="shrink-0 h-full w-[272px] select-none">
			<div
				className="w-full rounded-md bg-[#f1f2f4] shadow-sm pb-2"
			>
				<ListHeader data={data} />
			</div>
		</li>)
}