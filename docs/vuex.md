# 为什么使用 vuex？

在独立的 vue 组件中，维护一个属性，如 count，将会很方便。

但是，如果 count 需要在多个组件中使用，且同步更新。

vuex 将需要共享的状态进行统一管理和操作，组件仅仅是使用状态，或者通知 vuex 修改状态。

如果多个组件需要共用一个状态，只需要将相应的状态导入即可。

# 什么情况下使用 vuex？

大型项目

# 安装

```bash
npm i vuex@4.1.0 -S
```

```javascript
import { Store } from "vuex";

export default new Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
  },
  actions: {},
});
```

# 核心概念

## state 状态

vuex 使用单一状态树，整个项目中所有的需要全局管理的状态都放在状态树中

### 在组件中获取状态

#### 计算属性

只能实现单一的状态，如果有多个状态都需要使用

#### 辅助函数

```javascript
computed: {
    ...mapState(['count', 'color', 'token']),
    ...mapState({
        store_count: state => state.count,
        store_token: (state) => {
            return state.token
        }
    })
}
```

## getters

相当于对象中的取值函数，相当于组件中的计算属性

第一个参数是 state 表示状态，第二个参数是 getters 表示其他的 getter

```javascript
getters: {
    real_price(state){
        return state.price * state.discount
    }
}
```

```javascript
computed: {
    ...mapGetters(['real_price'])
}
```

## Mutation

> 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。

> 每个 mutation 都有一个字符串的事件类型 (type)和一个回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数

### 调用

> 你需要以相应的 type 调用 store.commit 方法

### 提交载荷（Payload）

如何给 mutation 提交参数

commit 的第二个参数作为载荷提交给 mutation，作为 mutation 的第二个参数传入

```javascript
this.$store.commit("changeCollapse", {
  name: "张三",
});
```

### 对象的提交方式

```javascript
store.commit({
  type: "changeCollapse",
  amount: 10,
});
```

### 使用常量代替

Mutation 必须是同步函数，不能在内部写上 HTTP 请求以及定时器或者 promise

mutation 是直接修改 state，为了保证所有页面的状态同步，不应该在 mutation 中使用异步

## actions

如果要进行任何操作，包括异步请求在内的各种操作，都应该在 actions 中调用

## 模块化

```javascript
modules: {
    user: user_module
}
```

为了区分多个模块之间的同名action，可以给模块化添加命名空间
```javascript
namespaced: true
```

```javascript
this.$store.dispatch('user/getUserList')
```

vuex中所有的数据都是存储在内存中，如果发生刷新等功能，所有的状态都会丢失，

问：如何将vuex中的数据进行长久存储？

答：vuex是一个状态管理工具，本身并不支持数据长久存储，设计的目的也是为了管理状态，
状态是一个临时的数据，并不需要长久存储。由于开发时，一些场景下使用vuex是为了方便数据在多个组件之间传递公用，此时，必须要让vuex进行长久存储，比如token，token是表示用户是否登录的凭证，在客户端多处使用，比如路由钩子和HTTP验证，可以将token存储在localstorage中，并同时存储在vuex中，当发生刷新之后，重新将localstorage中的数据放入vuex中，相对于其他的状态也可以用同样的方式实现。