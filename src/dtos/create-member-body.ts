import { IsNotEmpty, Length } from "class-validator";

export class CreateMemberBody {
    @IsNotEmpty()
    @Length(1, 255, {
        message: 'Name must be between 1 and 255 characters'
    })
    name: string;

    @IsNotEmpty({
        message: 'Function is required'
    })
    function: string;
}