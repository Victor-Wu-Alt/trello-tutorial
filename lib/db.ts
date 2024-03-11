/*
 * @Author: Victor
 * @Date: 2024-03-11 17:40:50
 * @LastEditTime: 2024-03-11 20:38:58
 */

import { PrismaClient } from '@prisma/client'

declare global {
	var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db