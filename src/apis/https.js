class HttpRequest {
    #config = {
        prefix_url: '',
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: undefined,
        referrer: "about:client",
        referrerPolicy: "no-referrer-when-downgrade",
        mode: "cors",
        credentials: "same-origin",
        cache: "default",
        redirect: "follow",
        integrity: "",
        keepalive: false,
        signal: undefined
    }
    constructor(config) {
        this.#config = {
            ...this.#config,
            ...config
        }
    }
    formatUrl(data){
        // 如果是get请求，对参数进行格式化处理，拼接成查询字符串
        const query_string = new URLSearchParams();
        for(let key in data){
            query_string.append(key, data[key])
        }
        return query_string.toString();
        // console.log(query_string);
    }
    async request({ api = '/', data = {}, method = 'GET', headers = {} }) {
        const { prefix_url } = this.#config;
        const config = this.#config;
        const params = {
            ...config,
            headers: {
                ...config.headers,
                ...headers
            },
            body: data,
            method
        }
        let url = `${prefix_url}${api}`;

        if(method === 'GET' || method === 'get'){
            url = `${url}?${this.formatUrl(data)}`
            Reflect.deleteProperty(params, 'body')
        }
        const res = await fetch(url, params)
        return await res.json()
    }
}

export default new HttpRequest({
    prefix_url: 'https://server.zhangpingcloud.tech'
})