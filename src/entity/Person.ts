import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Person {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    number: string;
}
