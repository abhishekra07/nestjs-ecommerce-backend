import { Entity, Column } from 'typeorm';
import { UserRole } from '../user-role.enum';
import { BaseEntity } from 'src/shared/model/base.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ name: 'name', nullable: true })
  name: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'is_verified', default: false })
  isVerified: boolean;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @Column({ name: 'otp', nullable: true })
  otp: number;

  @Column({
    type: 'enum',
    enum: UserRole,
    name: 'type',
  })
  type: UserRole;
}
