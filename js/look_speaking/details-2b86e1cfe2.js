const app = new Vue({
    el:"#details",
    data:{
        indexS:0,
//          title:'浙江工业大学计算机专业负责人一行来校参观交流',
//          schoolObj: {
//              text:'浙江工业大学计算机专业负责人一行来校参观交流，浙江工业大学计算机专业负责人一行来校参观交流，浙江工业大学计算机专业负责人一行来校参观交流，浙江工业大学计算机专业负责人一行来校参观交流，浙江工业大学计算机专业负责人一行来校参观交流。',
//              time:'时间：2019.3.15'}
        rich_text:''
    },
    mixins: [userInfo],
    mounted:function(){
        if(!window.sessionStorage.getItem('user_id')){ // 如果缓存localStorage中没有微信openId，则需用code去后台获取
            this.getCode()
        } else {
//          this.indexS= sessionStorage.index;
            var info=JSON.parse(sessionStorage.NowDetail);
            this.rich_text = info.rich_text;
            document.getElementsByTagName('title')[0].innerHTML = info.title;
        }

    },
    methods:{
        //跳转页面
//          change:function (index) {
//              this.indexS = index ;
//          }
    }
})
