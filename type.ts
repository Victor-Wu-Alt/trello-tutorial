/*
 * @Author: Victor
 * @Date: 2024-03-19 10:03:21
 * @LastEditTime: 2024-03-19 10:03:23
 */
import { Card, List } from "@prisma/client";

export type ListWithCards = List & { cards: Card[] };

export type CardWithList = Card & { list: List };
