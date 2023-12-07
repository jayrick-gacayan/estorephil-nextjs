
import { TYPES } from "@/inversify/types";
import { inject, injectable } from "inversify";

@injectable()
export class StaffRepository {
    private staffService: StaffRepository;
    public constructor(
        @inject(TYPES.StaffService) staffService: StaffRepository,
    ) {
        this.staffService = staffService;
    }
}
