import { Column, Entity, OneToMany } from 'typeorm';
import { Product } from '../../product/entities/product.entity';
import { BaseEntity } from 'src/shared/model/base.entity';

@Entity()
export class Category extends BaseEntity {
  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
