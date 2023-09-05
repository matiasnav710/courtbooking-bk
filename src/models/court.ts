import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import Venue from "./venue";
import Sport from "./sport";

@Entity()
class Court {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(() => Venue, { onDelete: "CASCADE" })
    venue: Venue;

    @OneToOne(() => Sport, { onDelete: "SET NULL" })
    sport: Sport;
}

export default Court