/*
 * @Author: Victor
 * @Date: 2024-03-18 18:25:22
 * @LastEditTime: 2024-03-19 10:48:06
 */
import { z } from "zod";
import { List } from "@prisma/client";
import { ActionState } from "@/lib/create-safe-action";
import { CreateList } from "./schema";

export type InputType = z.infer<typeof CreateList>;
export type ReturnType = ActionState<InputType, List>