import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class Venue {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;
}

export default Venue