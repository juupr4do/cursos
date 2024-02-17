import { randomUUID } from 'crypto'
import { Course } from 'src/courses/entities/courses.entity'
import { BeforeInsert, Column, Entity, ManyToMany, PrimaryGeneratedColumn} from 'typeorm'

@Entity('tags')
export class Tag{
    @BeforeInsert()
    generatedId(){
        if(this.id){
            return
        }
        this.id = randomUUID()
    }

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @ManyToMany(() => Course, course => course.tags)
    courses: Course[]

}