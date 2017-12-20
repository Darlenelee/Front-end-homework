<template>
	<nav role="navigation" class="navbar navbar-default navbar-fixed-top">
	    <div class="container">
	      <div class="navbar-header">
	        <a class="navbar-brand" href="index.html"><em><strong>Discover</strong></em></a>
	      </div>
			<form class="navbar-form navbar-left" role="search">
			  <div class="form-group">
			    <input type="text" class="form-control" placeholder="搜索 Discover">
			  </div>
				<button type="button" class="btn btn-default" aria-label="Left Align">
					<span class="fa fa-search" aria-hidden="true"></span>
				</button>
			</form>
	      <div class="navbar-collapse collapse">
	        <ul class="nav navbar-nav navbar-right">
	          <li class="active">
				<a href="#welcome"><span class="fa fa-home fa-lg" aria-hidden="true"></span></a></li>
	          <li>
				<a href="#discover"><span class="fa fa-compass fa-lg" aria-hidden="true"></span></a></li>
	          <li>
				<a href="#share"><span class="fa fa-envelope fa-lg" aria-hidden="true"></span></a></li>
			  <li>
				<a href="#user"><span class="fa fa-user fa-lg" aria-hidden="true"></span></a></li>
	        </ul>
	      </div><!--/.nav-collapse -->
	    </div><!--/.container -->
     </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar .container{
	width:100%;
	padding-left: 40px;
	margin-right:0px;
	background-color: #35455e;
	color: #35455e;
	border-bottom: 1px solid #3498DB;
}
.navbar .container .navbar-collapse ul li{
	padding-right: 50px;
}
.navbar-fixed-top .navbar-nav > li > a{
	margin-top: 5px;
	padding:10px 20px 10px 20px;
	border-radius:5px;
}
.navbar-fixed-top .navbar-nav > .active > a,
.navbar-fixed-top .navbar-nav > .active > a:hover,
.navbar-fixed-top .navbar-nav > .active > a:focus,
.navbar-fixed-top .navbar-nav > .open > a,
.navbar-fixed-top .navbar-nav > .open > a:hover,
.navbar-fixed-top .navbar-nav > .open > a:focus{
    background: #3498DB;
    color:#35455e;
}
.btn:focus{
	outline: none;
}
</style>
