<template>
  <div id="app">
    <seller>hahahaaaaaaaaaaaaaaaa</seller>
      <div v-html="name"></div>
      <div v-text="name"></div>
      <div v-cloak="name"></div>
      <div>{{name + '2'}}</div>
    <a :href="'http://www.baidu,com/'+ id">跳转</a>
    <input type="text" :value="name">
    <input type="text" v-model="name">
    <form @submit.prevent action="www.baidu.com">
      <input type="submit" value="提交" @click="submit()">
    </form>
    <button v-on:click="toggle">切换 </button>
    <div v-if="isShow">div的值</div>
    <!--<input type="text" v-model="pid" v-color="'red'" v-focus>-->
    <input type="text" v-model="pname" @keydown.f2="add">
    <buttn @click="add">添加</buttn>
    <table border="1">
      <tr>
        <th>编号</th>
        <th>名称</th>
        <th>时间</th>
        <th>操作</th>
      </tr>
      <tr v-if="list.length == 0">
        <td colspan="4">当前列表无数据</td>
      </tr>
      <tr v-for="(item,index) in list">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.ctime}}</td>
        <td>
          <a href="javascript:;void (0)" @click="del(item.id)">删除</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      // name: '<h1>好帅o</h1>',
      name:"",
      id:'',
      text:'123',
      value: false,
      user:{userName:'it',userPwd:'123456'},
      isShow:true,
      list:[
        // {id:'1',name:'宝马',ctime:new Date()},
        // {id:'2',name:'奔驰',ctime:new Date()},
        // {id:'3',name:'奥迪',ctime:new Date()}
      ],
      pid:'',
      pname:''
    }
  },
  components: { seller },
  template: '<seller/>',
  methods: {
    submit: function () {
      alert(this.user.userName)
    },
    toggle:function () {
      this.isShow = !this.isShow;
    },
    add:function () {
      // var p = {id:this.pid,name:this.pname,ctime:new Date()};
      // this.list.push(p);
      // this.pid = 0;
      // this.pname = '';
      this.$http.post('http://www.liulongbin.top:3005/api/addproduct',{name:this.pname},{emulateJSON:true}).then(function (res) {
        if (res.body.status == 0)  {
          this.getlist();
          this.pname = '';
        } else {
          alert("错误")
        }
      })
    },
    del:function (id) {
      // var index = this.list.findIndex(function (item) {
      //   return item.id == id;
      // });
      this.$http.get('http://www.liulongbin.top:3005/api/delproduct/'+id).then( res=> {
        if (res.body.status == 0) {
          this.getlist();
          this.pname = '';
        }
      }) // this.list.splice(index,1)
    },
    getlist:function () {
      this.$http.get('http://www.liulongbin.top:3005/api/getprodlist').then(function (res) {
        if(res.body.status==0){
          this.list = res.body.message;
        }
      })
    }
  },
  created() {
    this.getlist()
    // console.log(this.$refs.myapp);
  },
  mounted() {
    // console.log(this.$refs.myapp);
    this.text = '改变世界，改变自己'
  },
  filters:{
    myfilter:function (el) {
      var res = '';
      var year = el.getFullYear();
      var month = el.getMonth() + 1;
      var day = el.getDate();
     return res= year + '-' + month + '-' + day ;
    }
  },
  directives:{
    focus:function (el) {
      el.focus()
    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  table{
    width: 800px;
    height: 100px;
    margin: 20px auto;
    border-collapse: collapse;
  }
  table th{
    background: dodgerblue;
    width: 100px;
    padding: 5px;
  }
  table td{
    width: 100px;
    padding: 5px;
  }
  table td:last-child{
    color: aqua;

  }

</style>
