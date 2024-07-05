import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateMemberBody } from "./dtos/create-member-body";
import { MemberRepository } from "./repositories/member-repository";


@Controller('member')
export class MemberController {
    constructor(private readonly memberRepository: MemberRepository) {}
    
    @Post()
    async create(@Body() data: CreateMemberBody) {
        await this.memberRepository.create(data.name, data.function);
        
        return {
            message: 'Member created successfully'
        }
    }
}