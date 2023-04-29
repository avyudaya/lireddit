import { MikroORM } from "@mikro-orm/core";
import config from './mikro-orm.config';
import { Post } from "./enitites/Post";

const main =async () => {
    const orm = await MikroORM.init(config);
    orm.getMigrator().up();
    
    // insert post
    // const post = orm.em.create(Post, {title: "hello world", createdAt: new Date(), updatedAt: new Date()});
    // orm.em.persistAndFlush(post);

    // get post
    const post = await orm.em.find(Post, {});
    console.log(post);
}

main();