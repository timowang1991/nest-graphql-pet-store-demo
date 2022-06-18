import { ObjectType, Field } from '@nestjs/graphql';
import { Pet } from 'src/pets/pet.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Owner {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @OneToMany(() => Pet, (pet) => pet.owner)
  @Field(() => [Pet], { nullable: true })
  pets?: Pet[];
}
