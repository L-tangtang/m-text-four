'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);

    router.post('/login', controller.user.login);
    router.get('/getlist', controller.user.getlist);
    router.post('/del', controller.user.del);
    router.put('/edit', controller.user.edit);
    router.post('/add', controller.user.add);

    router.get('/getInd', controller.user.getInd);
    router.post('/indentAdd', controller.user.indentAdd);
    router.put('/editInd', controller.user.editInd);
    router.post('/delInd', controller.user.delInd);
};
