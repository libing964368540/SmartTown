var set_before = new Vue({
    el:'#set_before',
    data:{
        need:'',
        Num:'',
        tels:'',
        Isneed:false,
        IsNum:false,
        Istels:false
    },
    mixins: [userInfo],
    mounted:function () {
        if(!window.sessionStorage.getItem('user_id')){ // 如果缓存localStorage中没有微信openId，则需用code去后台获取
            this.getCode()
        } else {
            // 别的业务逻辑
        }
    },
    methods:{
        submit:function () {
            var that= this;
            var NowDetail=JSON.parse(sessionStorage.NowDetail);
            NowDetail.rich_text=null;
            if(!this.need){this.Isneed=true; mui.toast('请填写您的需求');return};
            if(!this.Num){this.IsNum = true; mui.toast('请填写需要的实习生数量');return};
            if(!this.tels){this.Istels=true; mui.toast('请填写您的联系方式');return};
            if(this.tels.length!=11){ mui.toast('电话号码格式不正确');return}
            var obj={
                need:this.need,
                tels:this.tels,
                Num:this.Num,
                json:NowDetail
            }
            var params={
                user_id:parseInt(sessionStorage.getItem('user_id')),
                type:4,//技术服务
                state:1,//
                cotent:JSON.stringify(obj),
                target_id:NowDetail.id
            }
            mui.showLoading("提交中..","div");
            order_create({
                data:params,
                success:function(result){
                    mui.toast('预约成功');
                    that.need="",
                        that.tels="",
                        that.Num=""
                }
            })
        },
        IsneedActive:function () {
            this.Isneed=false;
        },
        IsNumActive:function () {
            this.IsNum=false;
        },
        IstelsActive:function () {
            this.Istels=false;
        }
    }
})