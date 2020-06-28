import { Resolver, Query } from 'type-graphql';
import { User } from '../entity/User';

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users() {
    return [
      {
        id: 1,
        username: 'Bret',
        name: 'Bret Stinksi',
        email: 'Sincere@april.biz',
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
      } as User,
      {
        id: 2,
        username: 'Antonette',
        name: 'Ervin Howell',
        email: 'Shanna@melissa.tv',
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
      } as User,
    ];
  }
}
