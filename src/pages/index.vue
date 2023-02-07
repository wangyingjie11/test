<template>
    <div class="do_box">
        <div class="div_con">
            <div class="left"></div>
            <div class='con'></div>
            <div class="right"></div>
        </div>
        <div class="conter">

            <div class="nav_left">
                <router-link to="/fp/about?id=22">
                    <div>关于</div>
                </router-link>
                <router-link to="/fp/home/33" replace>
                    <div>我的</div>
                </router-link>
            </div>
            <router-view></router-view>
        </div>
        <button @click="upPic">批量上传图片</button>

    </div>

</template>
<script>
import { stu } from '../server/student'
export default {
    data() {
        return {
            arr: [1, 4, 6],
            arr1: [1, 4, 6, 7, 8, 5, 3, 2, 1, 1, 23, 4, 5],
            str: 'xfweiugorjegrjsdidoawdjhaaaa'

        }
    },
    mounted() {
        this.arr.splice(1, 1, 'p')
        console.log(this.arr, 'xxxx')
        console.log(Array.from(new Set(this.arr1)))
        let arr = []
        this.arr1.forEach(item => {
            if (arr.indexOf(item) == -1) {
                arr.push(item)
            }
        })
        console.log(arr, 'x')

        let str1 = this.str.split('')
        console.log(str1, 'xxx')
        let cc = []
        let obj = {}
        str1.forEach(item => {
            if (cc.indexOf(item) == -1) {
                cc.push(item)
                obj[item] = 0
            } else {
                obj[item]++
            }
        })
        console.log(cc, '11')
        console.log(obj, '11')
        let fc = Math.max(...Object.values(obj))
        console.log(fc)
        for (let k in obj) {
            if (obj[k] == 4) {
                console.log(k)
            }
        }


        // Promise.allSettled([this.a(),this.b(),this.c()]).then(res=>{
        //     console.log(res,'777')
        // }).catch(error=>{
        //     console.log(error,'9999')
        // })



    },
    methods: {
        upPic() {
            Promise.all([this.a(), this.b()]).then(res => {
                console.log(res, '777')
                // if (res.length == 2) {
                //     this.c()
                // }
            }).catch(error => {
                console.log(error, '9999')
            })
        },
        a() {
            // setTimeout(() => {
            //     console.log('11111111')
            // }, 2000)
            return stu().then(res => {
                console.log(res)
                return res

            }).catch(error => {
                console.log(error)
                return error
            })
        },
        b() {
            // setTimeout(() => {
            //     console.log('222222')
            // }, 3000)
            return stu().then(res => {
                console.log(res)
                return res

            }).catch(error => {
                console.log(error)
                return error
            })
        },
        c() {
            // setTimeout(() => {
            //     console.log('333333')
            // }, 4000)
            return stu().then(res => {
                console.log(res, '成功')
                return res

            }).catch(error => {
                console.log(error)
                return error
            })
        }
    }
}
</script>
<style scoped lang="less">
.conter {
    width: 100%;
    height: 100%;
    display: flex;
}

.do_box {
    width: 100%;

    .div_con {
        height: 100px;
        background-color: red;
        display: flex;
        justify-content: space-between;

        .con {
            height: 100px;
        }

        .left,
        .right {
            width: 200px;
            height: 100px;
            background-color: gold;
        }
    }
}

.nav_left {
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    div {
        height: 50px;
        display: flex;
        align-items: center;
        padding-left: 30px;
        border-bottom: 1px solid #000;
    }



}
</style>