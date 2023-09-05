import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import User from "./user";
import Court from "./court";

@Entity()
class Booking {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, { onDelete: "CASCADE" })
    @JoinColumn()
    user: User;

    @ManyToOne(() => Court, { onDelete: "SET NULL" })
    @JoinColumn()
    court: Court;

    @Column("timestamptz")
    startTime: Date;

    @Column("timestamptz")
    endTime: Date;
}

export default Booking