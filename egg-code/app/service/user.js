'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async getlist() {
        const result = await this.app.mysql.select('userlist');
        return result;
    }
    async login({ username }) {
        const result = await this.app.mysql.select('userlist', { where: { username } });
        return result;
    }
    async del({ id }) {
        const result = await this.app.mysql.delete('userlist', { id });
        return result;
    }
    async edit({ username, password, indent, id }) {
        const result = await this.app.mysql.update(
            'userlist',
            { username, password, indent },
            { where: { id } }
        );
        return result;
    }
    async select({ username }) {
        const result = await this.app.mysql.select('userlist', { where: { username } });
        return result;
    }
    async add({ username, password, indent }) {
        const result = await this.app.mysql.insert('userlist', { username, password, indent });
        return result;
    }

    async getInd() {
        const result = await this.app.mysql.select('indentlist');
        return result;
    }
    async selectInd({ indent }) {
        const result = await this.app.mysql.select('indentlist', { where: { indent } });
        return result;
    }
    async indentAdd({ indent }) {
        const result = await this.app.mysql.insert('indentlist', { indent });
        return result;
    }
    async delInd({ id }) {
        const result = await this.app.mysql.delete('indentlist', { id });
        return result;
    }
    async editInd({ indent, id }) {
        const result = await this.app.mysql.update('indentlist', { indent }, { where: { id } });
        return result;
    }
}

module.exports = UserController;
