import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
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
}

export default Booking