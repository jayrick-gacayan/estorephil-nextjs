import "reflect-metadata";
import { Container } from "inversify"
import { AccountRepository } from "@/repositories/account-repository";
import { AccountService } from "@/services/account-service";
import { TYPES } from "./types";
import { StaffRepository } from "@/repositories/staff-repository";
import { StaffService } from "@/services/staff-service";
import { OrderRepository } from "@/repositories/order-repository";
import { OrderService } from "@/services/order-service";

const accountContainer = new Container();
const staffContainer = new Container();
const orderContainer = new Container();

accountContainer.bind<AccountService>(TYPES.AccountService).to(AccountService);
accountContainer.bind<AccountRepository>(TYPES.AccountRepository).to(AccountRepository);
staffContainer.bind<StaffRepository>(TYPES.StaffRepository).to(StaffRepository)
staffContainer.bind<StaffService>(TYPES.StaffService).to(StaffService)
orderContainer.bind<OrderRepository>(TYPES.OrderRepository).to(OrderRepository)
orderContainer.bind<OrderService>(TYPES.OrderService).to(OrderService)
export { accountContainer, staffContainer }