import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column('date')
  hireDate: Date;

  @Column({ default: 'Ativo' })
  status: string; // Ativo, Férias, Desligado

  // Pensando em expandir
  // @Column({ nullable: true })
  // position: string; // Cargo

  // @Column({ nullable: true })
  // department: string; // Departamento

  // @Column({ nullable: true })
  // address: string; // Endereço completo

  // @Column({ nullable: true })
  // birthDate: Date; // Data de nascimento
}