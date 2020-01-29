import Login from '../containers/Login';
import Home from '../containers/Home';
import One from '../containers/One';
import Two from '../containers/Two';
import Add from '../containers/Add';
import IndentAdd from '../containers/IndAdd';

export default [
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/home/one',
                name: 'one',
                component: One,
            },
            {
                path: '/home/two',
                name: 'two',
                component: Two,
            },
            {
                path: '/home/IndentAdd',
                name: 'IndentAdd',
                component: IndentAdd,
            },
            {
                path: '/home/add',
                name: 'add',
                component: Add,
            },
        ],
    },
];
