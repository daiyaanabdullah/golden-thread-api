import {Entity, property, model} from '@loopback/repository';

@model()
export class Users extends Entity {
  @property({
    type: 'number',
    id: true
  })
  id?: number;

  @property({
    type: 'string',
    required: true
  })
  username: string;

  @property({
    type: 'string'
  })
  password: string;

  @property({
    type: 'string'
  })
  email: string;

  getId() {
    return this.id;
  }
}