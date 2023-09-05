import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class Venue {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column("timestamptz")
    startTime: Date;

    @Column("timestamptz")
    endTime: Date;
}

export default Venue