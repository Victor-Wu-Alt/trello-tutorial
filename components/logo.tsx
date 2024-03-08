/*
 * @Author: Victor
 * @Date: 2024-03-08 16:38:51
 * @LastEditTime: 2024-03-08 16:58:51
 */

import Image from "next/image"
import Link from "next/link"
import localFont from "next/font/local"

import { cn } from "@/lib/utils"

const headingFont = localFont({ src: "../public/fonts/font.woff2" })


export const Logo = () => {
	return (
		<Link href="/">
			<div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
				<Image src="/logo.svg" alt='logo' height={30} width={30}></Image>
				<p className={cn("text-lg text-neutral-700", headingFont.className)}>
					Taskify
				</p>
			</div>

		</Link>
	)
}