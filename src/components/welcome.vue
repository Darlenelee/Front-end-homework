<template>
	<div id="welcome">
		<div class="container">
		  <div class="left-section col-md-8">
			  <div class="jumbotron">
		        <div class="welcome-message">
		          <h1>你为何而来？</h1>
		          <p>在这里<em>发现</em> 你想看到的每一处景色.</p>
		        </div><!-- /.welcome-message -->
		      </div>
		      <div class="page-header"><strong>探索</strong></div>
		      <div class="image col-md-6">
		      	<a class="thumbnail"><img src="../assets/user/icon8.jpg"></a>
		      	<a class="thumbnail"><img src="../assets/user/icon12.jpg"></a>
		      	<a class="thumbnail"><img src="../assets/user/icon6.jpg"></a>
		      </div>
		      <div class="image col-md-6">
		      	<a class="thumbnail"><img src="../assets/user/icon9.jpg"></a>
		      	<a class="thumbnail"><img src="../assets/user/icon10.jpg"></a>
		      	<a class="thumbnail"><img src="../assets/user/icon11.jpeg"></a>
		      </div>
	      </div>
	      <div class="right-section col-md-4">
	      	<div class="page-header"><strong>为你推荐</strong></div>
	      	<div class="user row">
	      		<a class="thumbnail col-md-3"><img src="../assets/user/icon1.jpg"></a>
	      		<div class="col-md-8">
	      			<div class="row"><strong>Username</strong><a class="follow">关注</a></div>
	      			<h6>I am a user.</h6>
      			</div>
	      	</div>
	      	<div class="user row">
	      		<a class="thumbnail col-md-3"><img src="../assets/user/icon2.jpg"></a>
	      		<div class="col-md-8">
	      			<div class="row"><strong>Username</strong><a class="follow">关注</a></div>
	      			<h6>I am a user.</h6>
      			</div>
	      	</div>
	      	<div class="user row">
	      		<a class="thumbnail col-md-3"><img src="../assets/user/icon3.jpg"></a>
	      		<div class="col-md-8">
	      			<div class="row"><strong>Username</strong><a class="follow">关注</a></div>
	      			<h6>I am a user.</h6>
      			</div>
	      	</div>
	      	<div class="page-header"><strong>关键词</strong></div>
	      	<div class="word row text-center">
	      	  <div class="col-md-6"><div class="label label-default">FOOD</div></div>
	      	  <div class="col-md-6"><div class="label label-primary">MOVIES</div></div>
	      	</div>
	      	<div class="word row text-center">
	      	  <div class="col-md-6"><div class="label label-success">ANIMAL</div></div>
	      	  <div class="col-md-6"><div class="label label-info">BOOK</div></div>
	      	</div>
	      	<div class="word row text-center">
	      	  <div class="col-md-6"><div class="label label-warning">LANDSCAPE</div></div>
	      	  <div class="col-md-6"><div class="label label-danger">OTHER</div></div>
	      	</div>
	      </div>
	    </div>
    </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#welcome{
	margin-top: 30px;
	background-color: #35455e;
}
#welcome .container .jumbotron{
	margin-top: 50px;
	background: #191919 url('../../static/img/welcome-background.jpg') center center no-repeat;
	background-size: 100% 100%;
	position: relative;
}
#welcome .page-header{
	border-bottom: 1px solid #35455e;
	color: #35455e;
}
#welcome .container .left-section .image a,
#welcome .container .left-section .image a:hover,
#welcome .container .left-section .image a:focus{
	padding:0px;
	outline: none;
}
#welcome .container{
	position: relative;
}
#welcome .container .welcome-message {
	background-color: rgba(255,255,255,0.4); // translucent overlay
	position: absolute;
	top: 300px;
	left: 0;
	padding: 50px 0px 50px 50px;
	margin: 0px 0px 0px 0px ;
}
#welcome .container .user a {
	height: 50px;
	width: 50px;
	padding:0px;
	margin-right:20px;
	margin-left: 20px;
}
#welcome .container .right-section .word{
	margin-top: 10px;
	margin-bottom: 5px;
}
#welcome .container .right-section .label{
	padding:5px 20px 5px 20px;
}
</style>
