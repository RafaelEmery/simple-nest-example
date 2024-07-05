import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { PrismaService } from "src/database/prisma.service";
import { MemberRepository } from "../member-repository";

@Injectable()
export class PrismaMemberRepository implements MemberRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(name: string, memberFunction: string): Promise<void> {
        await this.prisma.member.create({
            data: {
                id: randomUUID(),
                name,
                function: memberFunction
            }
        });
    }
}