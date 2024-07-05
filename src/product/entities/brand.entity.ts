import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { BaseEntity } from 'src/shared/model/base.entity';

@Entity()
export class Brand extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @OneToMany(() => Product, (product) => product.brand)
  products: Product[];
}
