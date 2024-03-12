/*
 * @Author: Victor
 * @Date: 2024-03-12 13:59:21
 * @LastEditTime: 2024-03-12 14:02:55
 */

import { z } from "zod";
import { Board } from "@prisma/client";
import { ActionState } from "@/lib/create-safe-action";
import { CreateBoard } from "./schema";

export type InputType = z.infer<typeof CreateBoard>;
export type ReturnType = ActionState<InputType, Board>