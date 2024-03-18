/*
 * @Author: Victor
 * @Date: 2024-03-18 18:25:22
 * @LastEditTime: 2024-03-18 18:25:22
 */
import { z } from "zod";
import { Board } from "@prisma/client";
import { ActionState } from "@/lib/create-safe-action";
import { UpdateBoard } from "./schema";

export type InputType = z.infer<typeof UpdateBoard>;
export type ReturnType = ActionState<InputType, Board>