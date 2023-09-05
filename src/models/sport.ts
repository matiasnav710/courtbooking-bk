import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class Sport {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
}

export default Sport