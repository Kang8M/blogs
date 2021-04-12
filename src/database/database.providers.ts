import mongoose from 'mongoose';
import { MONO_DB_CONNECTION_STRING } from 'src/database/constants';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(MONO_DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
  },
];
