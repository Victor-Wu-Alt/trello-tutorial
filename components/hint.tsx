/*
 * @Author: Victor
 * @Date: 2024-03-17 10:18:01
 * @LastEditTime: 2024-03-17 10:25:17
 */


import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components//ui/tooltip";

interface HintProps {
	children: React.ReactNode;
	description: string,
	side?: "top" | "right" | "bottom" | "left";
	sideOffest?: number
}


export const Hint: React.FC<HintProps> = ({ children, description, side = "bottom", sideOffest = 0 }) => {
	return (
		<TooltipProvider>
			<Tooltip delayDuration={0}>
				<TooltipTrigger>{children}</TooltipTrigger>
				<TooltipContent side={side} sideOffset={sideOffest} className="text-xs max-w-[220px] break-words">
					{description}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}