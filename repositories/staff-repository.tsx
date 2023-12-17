
import { TYPES } from "@/inversify/types";
import { StaffService } from "@/services/staff-service";
import { inject, injectable } from "inversify";

@injectable()
export class StaffRepository {
    private staffService: StaffService;
    public constructor(
        @inject(TYPES.StaffService) staffService: StaffService,
    ) {
        this.staffService = staffService;
    }
    async getStaff(token: string, page: number, limit: number) {
        return await this.staffService.getStaff(token, page, limit)
    }
}
