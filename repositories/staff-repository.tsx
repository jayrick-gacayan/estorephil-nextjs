
import { TYPES } from "@/inversify/types";
import { AccountService } from "@/services/account-service";
import { inject, injectable } from "inversify";
import { SignInOptions } from "next-auth/react";


@injectable()
export class StaffRepository {
    private staffService: StaffRepository;
    public constructor(
        @inject(TYPES.StaffService) staffService: StaffRepository,
    ) {
        this.staffService = staffService;
    }

}
