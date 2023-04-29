import { __prod__ } from "./constants";
import { Post } from "./enitites/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
    migrations: {
      path: path.join(__dirname, "./migrations"),
    },
    entities: [Post], // no need for `entitiesTs` this way
    dbName: 'lireddit',
    debug: !__prod__,
    user: "postgres",
    password: "postgres",
    type: 'postgresql', // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
    allowGlobalContext: true
  } as Parameters<typeof MikroORM.init>[0];