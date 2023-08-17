
<script>
import { queryStudentList } from '../../apis/apis';
export default {
    data() {
        return {
            search_form: {
                address: '江苏省'
            },
            modal_form: {
                user_id: '',
                user_name: '',
                user_address: '',
                user_birth: ''
            },
            table_data: [
                {
                    name: '张三',
                    address: '江苏省镇江市',
                },
                {
                    name: '张三',
                    address: '江苏省镇江市',
                },
                {
                    name: '张三',
                    address: '江苏省镇江市',
                },
                {
                    name: '张三',
                    address: '江苏省镇江市',
                }
            ],
            pagin: {
                page: 1,
                count: 10
            },
            modal_config: {
                title: '',
                type: 1, // 1||2||3
                x: 0,
                y: 0
            },
            
        }
    },
    methods: {
        search() {
            console.log(this.search_form);
        },
        reset() {
            this.search_form.address = '';
        },
        add(e) {
            this.modal_config.title = '新增用户';
            this.modal_config.type = 1;
            this.modal_form.user_id = '';
            this.getModalArea(e);
            this.$refs.modal.modal_show = true;
        },
        view(item, e) {
            this.modal_config.title = '查看用户';
            this.modal_config.type = 3;
            this.modal_form.user_id = item.id;
            this.getModalArea(e);
            this.$refs.modal.modal_show = true;
        },
        edit(item, e) {
            // 一般来讲，为了保证数据的实时性，在编辑和查看时
            // 只会获取当前数据id，然后调用api到数据库中查询最新的数据
            this.modal_config.title = '编辑用户';
            this.modal_config.type = 2;
            this.modal_form.user_id = item.id;
            this.modal_form.user_name = item.name;
            this.modal_form.user_address = item.address;
            this.modal_form.user_birth = item.birthday;
            // 在展示数据之前，调用后台api查询实时数据
            this.getModalArea(e);
            this.$refs.modal.modal_show = true;
        },
        saveModalForm(data) {
            // console.log(data);
            // console.log(this.modal_form);
            if (data.type === 1) {
                // 执行添加的操作
            } else if (data.type === 2) {
                // 执行编辑的操作
            } else if (data.type === 3) {
                // 执行查看的操作
            }
            // switch(data.type){

            // }
        },
        // 获取modal出现时的坐标
        getModalArea({screenX: x, screenY: y}){
            this.modal_config.x = x;
            this.modal_config.y = y;
        }
    },
    computed: {

    },
    async created() {
        const { data } = await queryStudentList({
            ...this.search_form,
            ...this.pagin
        });
        this.table_data = data.list;
    }
}
</script>

<template>
    <div id="page-name">
        <div class="body">
            <form action="">
                <div class="search-form">
                    <label for="search-form-address">
                        <span>地址：</span>
                        <input v-model="search_form.address" id="search-form-address" type="text" placeholder="请输入地址...">
                    </label>
                    <label for="search-form-address">
                        <span>地址：</span>
                        <input v-model="search_form.address" id="search-form-address" type="text" placeholder="请输入地址...">
                    </label>
                    <label for="search-form-address">
                        <span>地址：</span>
                        <input v-model="search_form.address" id="search-form-address" type="text" placeholder="请输入地址...">
                    </label>
                    <label for="search-form-address">
                        <span>地址：</span>
                        <input v-model="search_form.address" id="search-form-address" type="text" placeholder="请输入地址...">
                    </label>
                    <label for="search-form-address">
                        <span>地址：</span>
                        <input v-model="search_form.address" id="search-form-address" type="text" placeholder="请输入地址...">
                    </label>
                    <label for="search-form-address">
                        <button @click.prevent="search" type="submit">查询</button>
                        <button @click.prevent="reset" type="reset">重置</button>
                    </label>
                </div>
            </form>
            <div class="operation">
                <button @click="add">新增</button>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th style="width: 48px;"></th>
                        <th style="width: 180px;">姓名</th>
                        <th>家庭住址</th>
                        <th style="width: 200px;">生日</th>
                        <th style="width: 160px;">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in table_data" :class="{ forbidden: item.disabled }">
                        <td>
                            <input type="checkbox" :disabled="item.disabled">
                        </td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.address }}</td>
                        <td>{{ item.birthday }}</td>
                        <td>
                            <button :disabled="item.disabled">删除</button>
                            <button @click="e => view(item, e)" :disabled="item.disabled">查看</button>
                            <button @click="e => edit(item, e)" :disabled="item.disabled">编辑</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <modal ref="modal" :config="modal_config" @save="saveModalForm">
            <form class="modal-form" action="">
                <p>
                    <label for="">
                        姓名：
                        <input v-model="modal_form.user_name" type="text" placeholder="请输入...">
                    </label>
                </p>
                <p>
                    <label for="">
                        地址：
                        <input v-model="modal_form.user_address" type="text" placeholder="请输入...">
                    </label>
                </p>
                <p>
                    <label for="">
                        生日：
                        <input v-model="modal_form.user_birth" type="date" placeholder="请选择...">
                    </label>
                </p>
            </form>
        </modal>
    </div>

    <!-- 
        <div class="component-name">

        </div>
     -->
</template>

<style scoped>
#page-name {
    background-color: #f5f7f9;
    width: 100%;
    height: 100%;
    padding: 12px;
    box-sizing: border-box;
}

#page-name>.body {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 3px;
    padding: 12px;
    box-sizing: border-box;
}

#page-name>.body .search-form {
    display: flex;
    flex-wrap: wrap;
}

#page-name>.body .search-form>label {
    display: block;
    width: 25%;
    margin: 12px 0;
}

#page-name>.body .search-form>label button:not(:first-child) {
    margin: 0 8px;
}

#page-name .table {
    width: 100%;
}

#page-name .table tr {
    height: 48px;
    line-height: 48px;
    border: 1px solid #999999;
}

#page-name .table tr>* {
    text-align: left;
    padding: 0 6px;
}

#page-name .table tr th {
    background-color: #f0f0f0;
}

#page-name .forbidden {
    cursor: not-allowed;
    color: #999999;
    user-select: none;
}

#page-name .operation {
    margin: 12px 0;
}

#page-name .modal-form p {
    margin: 12px 0;
}
</style>