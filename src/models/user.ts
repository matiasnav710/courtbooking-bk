import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import jwt from "jsonwebtoken"

@Entity()
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;
}

const genAuthToken = (user: User) => {
    return jwt.sign({ emaill: user.email, id: user.id }, process.env.JWT_SECRET as string)
}

export default User
export { genAuthToken }