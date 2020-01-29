'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async getlist() {
        const { ctx } = this;
        const result = await ctx.service.user.getlist();
        ctx.body = {
            code: 1,
            msg: '获取成功',
            result,
        };
    }
    async login() {
        const { ctx } = this;
        const { username, password } = ctx.request.body;
        if (username === '') {
            ctx.body = {
                code: 0,
                msg: '账号不能为空',
            };
            return;
        }
        if (password === '') {
            ctx.body = {
                code: 0,
                msg: '密码不能为空',
            };
            return;
        }
        const result = await ctx.service.user.login(ctx.request.body);
        if (result.length === 0) {
            ctx.body = {
                code: 0,
                msg: '账号未注册',
            };
            return;
        }
        if (result.length > 0) {
            if (result[0].password !== password) {
                ctx.body = {
                    code: 0,
                    msg: '密码不正确',
                };
                return;
            }
        }
        ctx.body = {
            code: 1,
            msg: '登陆成功',
        };
    }
    async del() {
        const { ctx } = this;
        await ctx.service.user.del(ctx.request.body);
        ctx.body = {
            code: 1,
            msg: '删除成功',
        };
    }
    async edit() {
        const { ctx } = this;
        await ctx.service.user.edit(ctx.request.body);
        ctx.body = {
            code: 1,
            msg: '编辑成功',
        };
    }
    async add() {
        const { ctx } = this;
        const result = await ctx.service.user.select(ctx.request.body);
        if (result.length > 0) {
            ctx.body = {
                code: 0,
                msg: '账号已存在',
            };
            return;
        }
        await ctx.service.user.add(ctx.request.body);
        ctx.body = {
            code: 1,
            msg: '添加成功',
        };
    }

    async getInd() {
        const { ctx } = this;
        const result = await ctx.service.user.getInd();
        ctx.body = {
            code: 1,
            msg: '获取成功',
            result,
        };
    }
    async indentAdd() {
        const { ctx } = this;
        const result = await ctx.service.user.selectInd(ctx.request.body);
        if (result.length > 0) {
            ctx.body = {
                code: 0,
                msg: '账号已存在',
            };
            return;
        }
        await ctx.service.user.indentAdd(ctx.request.body);
        ctx.body = {
            code: 1,
            msg: '添加成功',
        };
    }
    async delInd() {
        const { ctx } = this;
        await ctx.service.user.delInd(ctx.request.body);
        ctx.body = {
            code: 1,
            msg: '删除成功',
        };
    }
    async editInd() {
        const { ctx } = this;
        await ctx.service.user.editInd(ctx.request.body);
        ctx.body = {
            code: 1,
            msg: '编辑成功',
        };
    }
}

module.exports = UserController;
