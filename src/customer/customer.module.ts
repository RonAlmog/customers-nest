import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './schemas/customer.schema';
import { CustomerController } from './customer.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }])
  ],
  providers: [CustomerService],
  controllers: [CustomerController],

})
export class CustomerModule {}
