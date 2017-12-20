<template>
  <div class="landscape row fadeInLeft wow" data-wow-delay="0.4s">
    <div class="reviews js-masonry" >
      <div class="col-sm-6 col-md-4">
      <div class="item thumbnail">
        <img src="../assets/movie1.jpg" alt="Customer Photo1">
        <div class="caption">
          <blockquote class="description"><p> 这是一幅电影海报的图片.</p></blockquote>
          <p class="reviewer">用户名</p>
        </div><!-- /.caption -->
      </div><!-- /.hreview -->
      <div class="item thumbnail ">
        <img src="../assets/movie2.jpg" alt="Customer Photo2">
        <div class="caption">
          <blockquote class="description"><p> 这是一幅电影海报的图片.</p></blockquote>
          <p class="reviewer">用户名</p>
        </div><!-- /.caption -->
      </div><!-- /.hreview -->
      <div class="item thumbnail ">
        <img src="../assets/movie3.jpg" alt="Customer Photo3">
        <div class="caption">
          <blockquote class="description"><p> 这是一幅电影海报的图片.</p></blockquote>
          <p class="reviewer">用户名</p>
        </div><!-- /.caption -->
      </div><!-- /.hreview -->
      </div>
      <div class="col-sm-6 col-md-4">
      <div class="item thumbnail ">
        <img src="../assets/movie4.jpg" alt="Customer Photo4">
        <div class="caption">
          <blockquote class="description"><p> 这是一幅电影海报的图片.</p></blockquote>
          <p class="reviewer">用户名</p>
        </div><!-- /.caption -->
      </div><!-- /.hreview -->
      <div class="item thumbnail ">
        <img src="../assets/movie5.jpeg" alt="Customer Photo5">
        <div class="caption">
          <blockquote class="description"><p> 这是一幅电影海报的图片.</p></blockquote>
          <p class="reviewer">用户名5</p>
        </div><!-- /.caption -->
      </div><!-- /.hreview -->
      <div class="item thumbnail ">
        <img src="../assets/movie6.jpeg" alt="Customer Photo6">
        <div class="caption">
          <blockquote class="description"><p> 这是一幅电影海报的图片.</p></blockquote>
          <p class="reviewer">用户名</p>
        </div><!-- /.caption -->
      </div><!-- /.hreview -->
      </div>
      <div class="col-sm-6 col-md-4">
      <div class="item thumbnail ">
        <img src="../assets/movie7.jpg" alt="Customer Photo7">
        <div class="caption">
          <blockquote class="description"><p> 这是一幅电影海报的图片.</p></blockquote>
          <p class="reviewer">用户名</p>
        </div><!-- /.caption -->
      </div><!-- /.hreview -->
      </div>
    </div><!-- /.reviews -->
  </div>
</template>

<script >
export default {
  name: 'landscape',
  data () {
      return {
      }
    }
}

</script>

<style >
.landscape .reviews .col-md-4 .item{
    position: relative;
    padding: 0px;
    border: none;
  }
.landscape .reviews .col-md-4 .item .caption {
    position: absolute;
    top: auto;
    left: 10px;
    right: 10px;
    bottom: 0;
    line-height: 1.1;
    background: rgba(0,0,0,0.5);
}
.landscape .reviews .col-md-4 .item blockquote,.reviewer {
      margin: 0 6px;
      padding: 0;
}
.landscape .reviews..col-md-4 .item blockquote {
      margin-top: 4px;
      border: none;
}
.landscape .reviews..col-md-4 .item p{
  color: #fff;
  font-size: 14px;
}
.landscape .reviews .col-md-4 .item .reviewer {
      margin-top: 2px;
      margin-bottom: 4px;
      text-align: right;
      color: #fff;
}


</style>


