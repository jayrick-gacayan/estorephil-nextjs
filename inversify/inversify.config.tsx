import 'reflect-metadata';
import { Container } from 'inversify'
import { AccountRepository } from '@/repositories/account-repository';
import { AccountService } from '@/services/account-service';
import { TYPES } from './types';
import { StaffRepository } from '@/repositories/staff-repository';
import { StaffService } from '@/services/staff-service';
import { OrderRepository } from '@/repositories/order-repository';
import { OrderService } from '@/services/order-service';
import { StoreService } from '@/services/store-service';
import { StoreRepository } from '@/repositories/store-repository';
import { ProductService } from '@/services/product-service';
import { ProductRepository } from '@/repositories/product-repository';
import { CategoryService } from '@/services/category-service';
import { CategoryRepository } from '@/repositories/category-repository';
import { CookiesService } from '@/services/cookies-service';
import { CookiesRepository } from '@/repositories/cookies-repository';
import { BoxService } from '@/services/box-service';
import { BoxRepository } from '@/repositories/box-repository';
import { HomeService } from '@/services/home-service';
import { HomeRepository } from '@/repositories/home-repository';
import { CartRepository } from '@/repositories/cart-repository';
import { CartService } from '@/services/cart-service';

const categoryContainer = new Container();
categoryContainer.bind<CategoryService>(TYPES.CategoryService).to(CategoryService);
categoryContainer.bind<CategoryRepository>(TYPES.CategoryRepository).to(CategoryRepository);

const storeContainer = new Container();
storeContainer.bind<StoreService>(TYPES.StoreService).to(StoreService);
storeContainer.bind<StoreRepository>(TYPES.StoreRepository).to(StoreRepository);

const productContainer = new Container();
productContainer.bind<ProductService>(TYPES.ProductService).to(ProductService)
productContainer.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepository)

const cookieContainer = new Container();
cookieContainer.bind<CookiesService>(TYPES.CookiesService).to(CookiesService);
cookieContainer.bind<CookiesRepository>(TYPES.CookiesRepository).to(CookiesRepository);

const boxContainer = new Container();
boxContainer.bind<BoxService>(TYPES.BoxService).to(BoxService);
boxContainer.bind<BoxRepository>(TYPES.BoxRepository).to(BoxRepository);

const accountContainer = new Container();
accountContainer.bind<AccountService>(TYPES.AccountService).to(AccountService);
accountContainer.bind<AccountRepository>(TYPES.AccountRepository).to(AccountRepository);

const staffContainer = new Container();
staffContainer.bind<StaffRepository>(TYPES.StaffRepository).to(StaffRepository)
staffContainer.bind<StaffService>(TYPES.StaffService).to(StaffService)

const orderContainer = new Container();
orderContainer.bind<OrderRepository>(TYPES.OrderRepository).to(OrderRepository)
orderContainer.bind<OrderService>(TYPES.OrderService).to(OrderService)

const cartContainer = new Container();
cartContainer.bind<CartService>(TYPES.CartService).to(CartService)
cartContainer.bind<CartRepository>(TYPES.CartRepository).to(CartRepository)

const homeContainer = new Container();
homeContainer.bind<HomeService>(TYPES.HomeService).to(HomeService)
homeContainer.bind<HomeRepository>(TYPES.HomeRepository).to(HomeRepository)





export {
  accountContainer,
  staffContainer,
  storeContainer,
  productContainer,
  orderContainer,
  categoryContainer,
  cookieContainer,
  boxContainer,
  homeContainer,
  cartContainer
}