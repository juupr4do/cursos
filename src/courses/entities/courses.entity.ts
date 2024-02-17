 import { randomUUID } from 'crypto'
import { Tag } from 'src/courses/entities/tags.entity'
import{ BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm'

@Entity('courses')
export class Course {
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

    @Column()
    description: string

    @JoinTable()
    @ManyToMany(() => Tag, tag => tag.courses, {
        cascade: true,
    })
    tags: Tag[]

    @CreateDateColumn({
        type: 'timestamp'
    })
    created_at: Date
    
}