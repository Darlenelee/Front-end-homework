<template>
<div id="user_page">
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-3 col-xs-12">
            <a class="thumbnail" href="#">
              <img width="180" height="171" alt="" src="../assets/user/icon3.jpg">
            </a>
          </div>
          <div class="col-md-9 col-xs-12">
            <h3>UserName&nbsp;&nbsp;&nbsp;</h3>
            <h4><small>ID:&nbsp;&nbsp;</small>*****  <span class="fa fa-edit"></span></h4>
            <h4><small>性别:&nbsp;&nbsp;</small>****  <span class="fa fa-edit"></span></h4>
            <h4><small>一句话介绍:&nbsp;&nbsp;</small>******  <span class="fa fa-edit"></span></h4>
            </h4>
          </div>
        </div>
        <div class="user-content">
            <div class="tab" role="tabpanel">
              <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation" class="active"><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">我的影像</a></li>
                  <li role="presentation"><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">我的好友</a></li>
                  <li role="presentation"><a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab">我的设置</a></li>
              </ul>
              <!-- Tab panes -->
              <div class="tab-content tabs">
                  <div role="tabpanel" class="tab-pane fade in active" id="Section1">
                      <h3>我的影像</h3>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="Section2">
                      <h3>我的好友</h3>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="Section3">
                      <h3>我的设置</h3>
                  </div>
              </div>
            </div>
        </div>
      </div>
      <div class="col-md-4">

      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name:'user_page',
  date(){

  },
}
</script>

<style scoped>
#user_page,#user_page .jumbotron{
  background: linear-gradient(#35455e, #35455e 70%);
}
.panel{
  background-color:#35455e;
}
#user_info{
	position: relative;
}
.user-content{
  padding-bottom: 1.5em ;
  font-family: 'Microsoft YaHei','Lantinghei SC','Open Sans',Arial,'Hiragino Sans GB','STHeiti','WenQuanYi Micro Hei','SimSun',sans-serif;
}
a:hover,a:focus{
  outline: none;
  text-decoration: none;
}
.tab .nav-tabs{
  position: relative;
  border-bottom: 0 none;
}
.tab .nav-tabs li{
  text-align: center;
}
.tab .nav-tabs li a{
  display: block;
  height: 70px;
  line-height: 65px;
  background: linear-gradient(165deg, transparent 29%, #2C3E50 30%);
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  margin-right: 0;
  border-radius: 0;
  border: none;
  position: relative;
  transition: all 0.5s ease 0s;
}
.tab .nav-tabs li.active a,.tab .nav-tabs li a:hover{
  background: linear-gradient(165deg, transparent 29%, #3498DB 30%);
  border: none;
  color: #2C3E50;
}
.tab .nav-tabs li a:before{
  content: "";height: 70px;
  line-height: 90px;
  border-bottom: 70px solid rgba(0, 0, 0, 0.1);
  border-right: 10px solid transparent;
  position: absolute;top: 0;left: 100%;
  z-index: 1;
}
.tab .nav-tabs li:last-child a:before{
  border: none;
}
.tab .tab-content{
  height: 400px;
  font-size: 14px;
  color: #6f6c6c;
  line-height: 26px;
  background: repeating-linear-gradient(120deg, #19B5FE, #DADFE1);
  padding: 20px;
}
.tab .tab-content h3{
  font-size: 24px;
  color: #6f6c6c;
  margin-top: 0;
}
.tab .tab-content p{
  margin-bottom: 0;
  text-align: justify;
  text-indent: 2em;
  color: #6f6c6c;
}
@media only screen and (max-width: 480px){
    .tab .nav-tabs li{width: 33%;margin-bottom: 8px;}
    .tab .nav-tabs li:last-child{margin-bottom: 0;}
    .tab .nav-tabs li a:before{border: none;}
    .tab .nav-tabs li a{font-size: 0.8em;}
}
</style>
