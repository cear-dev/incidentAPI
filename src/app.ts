import express from 'express';
import { envs } from './config/envs';
import { MongoDatabase } from './data/init';
import { AppRoutes } from './presentation/routes';

console.log(envs);

const app = express();
app.use(express.json());
app.use(AppRoutes.routes);

(async () => 
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB
    }))
();

app.listen(envs.PORT, () => {
    console.log('Server is running on port 3000');
});