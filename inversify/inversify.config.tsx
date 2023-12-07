import "reflect-metadata";
import { Container } from "inversify"
import { AccountRepository } from "@/repositories/account-repository";
import { AccountService } from "@/services/account-service";
import { TYPES } from "./types";
import { StaffRepository } from "@/repositories/staff-repository";
import { StaffService } from "@/services/staff-service";
import { OrderRepository } from "@/repositories/order-repository";
import { OrderService } from "@/services/order-service";
import { HomeRepository } from "@/repositories/home-repository";
import { HomeService } from "@/services/home-service";
import { StoreService } from "@/services/store-service";
import { StoreRepository } from "@/repositories/store-repository";
import { ProductService } from "@/services/product-service";
import { ProductRepository } from "@/repositories/product-repository";

const accountContainer = new Container();
const staffContainer = new Container();
const orderContainer = new Container();
const homeContainer = new Container();
const storeContainer = new Container();
const productContainer = new Container();

storeContainer.bind<StoreService>(TYPES.StoreService).to(StoreService)
storeContainer.bind<StoreRepository>(TYPES.StoreRepository).to(StoreRepository)
productContainer.bind<ProductService>(TYPES.ProductService).to(ProductService)
productContainer.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepository)
homeContainer.bind<HomeService>(TYPES.HomeService).to(HomeService)
homeContainer.bind<HomeRepository>(TYPES.HomeRepository).to(HomeRepository)
accountContainer.bind<AccountService>(TYPES.AccountService).to(AccountService);
accountContainer.bind<AccountRepository>(TYPES.AccountRepository).to(AccountRepository);
staffContainer.bind<StaffRepository>(TYPES.StaffRepository).to(StaffRepository)
staffContainer.bind<StaffService>(TYPES.StaffService).to(StaffService)
orderContainer.bind<OrderRepository>(TYPES.OrderRepository).to(OrderRepository)
orderContainer.bind<OrderService>(TYPES.OrderService).to(OrderService)

export { accountContainer, staffContainer, homeContainer, storeContainer, productContainer }