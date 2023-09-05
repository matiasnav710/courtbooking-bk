import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import User from "./user";
import Court from "./court";

@Entity()
class Booking {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, { onDelete: "CASCADE" })
    user: User;

    @ManyToOne(() => Court, { onDelete: "SET NULL" })
    court: Court;
}

export default Booking