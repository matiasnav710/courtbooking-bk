import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import Venue from "./venue";
import Sport from "./sport";

@Entity()
class Court {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({default:""})
    description: string;

    @Column({default:""})
    image: string;

    @ManyToOne(() => Venue, { onDelete: "CASCADE" })
    @JoinColumn()
    venue: Venue;

    @ManyToOne(() => Sport, { onDelete: "SET NULL" })
    @JoinColumn()
    sport: Sport;
}

export default Court