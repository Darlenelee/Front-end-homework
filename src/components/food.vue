<template>
  <div class="waterfall row fadeInLeft">
    <div class="reviews js-masonry" >
      <div class="col-sm-6 col-md-4">
      <div class="food review-item-1 thumbnail">
        <div class="comment text-center">
          <span class="fa fa-heart fa-lg" style="margin-right:100px"></span>
          <span class="fa fa-commenting fa-lg"></span>
        </div>
        <img src="../assets/food1.jpg" alt="Customer Photo1">
        <div class="caption">
          <blockquote class="description"><p> 这是一幅食品的图片.</p></blockquote>
          <p class="reviewer">用户名</p>
        </div><!-- /.caption -->
      </div><!-- /.hreview -->
      <div class="food review-item-2 thumbnail ">
        <div class="comment text-center">
          <span class="fa fa-heart fa-lg" style="margin-right:100px"></span>
          <span class="fa fa-commenting fa-lg"></span>
        </div>
        <img src="../assets/food2.jpg" alt="Customer Photo2">
        <div class="caption">
          <blockquote class="description"><p> 这是一幅食品的图片.</p></blockquote>
          <p class="reviewer">用户名</p>
        </div><!-- /.caption -->
      </div><!-- /.hreview -->
      <div class="food review-item-3 thumbnail ">
        <div class="comment text-center">
          <span class="fa fa-heart fa-lg" style="margin-right:100px"></span>
          <span class="fa fa-commenting fa-lg"></span>
        </div>
        <img src="../assets/food3.jpg" alt="Customer Photo3">
        <div class="caption">
          <blockquote class="description"><p> 这是一幅食品的图片.</p></blockquote>
          <p class="reviewer">用户名</p>
        </div><!-- /.caption -->
      </div><!-- /.hreview -->
      </div>
      <div class="col-sm-6 col-md-4">
      <div class="food review-item-4 thumbnail ">
        <div class="comment text-center">
          <span class="fa fa-heart fa-lg" style="margin-right:100px"></span>
          <span class="fa fa-commenting fa-lg"></span>
        </div>
        <img src="../assets/food4.jpg" alt="Customer Photo4">
        <div class="caption">
          <blockquote class="description"><p> 这是一幅食品的图片.</p></blockquote>
          <p class="reviewer">用户名</p>
        </div><!-- /.caption -->
      </div><!-- /.hreview -->
      <div class="food review-item-5 thumbnail ">
        <div class="comment text-center">
          <span class="fa fa-heart fa-lg" style="margin-right:100px"></span>
          <span class="fa fa-commenting fa-lg"></span>
        </div>
        <img src="../assets/food5.jpg" alt="Customer Photo5">
        <div class="caption">
          <blockquote class="description"><p> 这是一幅食品的图片.</p></blockquote>
          <p class="reviewer">用户名</p>
        </div><!-- /.caption -->
      </div><!-- /.hreview -->
      <div class="food review-item-6 thumbnail ">
        <div class="comment text-center">
          <span class="fa fa-heart fa-lg" style="margin-right:100px"></span>
          <span class="fa fa-commenting fa-lg"></span>
        </div>
        <img src="../assets/food6.jpg" alt="Customer Photo6">
        <div class="caption">
          <blockquote class="description"><p> 这是一幅食品的图片.</p></blockquote>
          <p class="reviewer">用户名</p>
        </div><!-- /.caption -->
      </div><!-- /.hreview -->
      </div>
      <div class="col-sm-6 col-md-4">
      <div class="food review-item-7 thumbnail ">
        <div class="comment text-center">
          <span class="fa fa-heart fa-lg" style="margin-right:100px"></span>
          <span class="fa fa-commenting fa-lg"></span>
        </div>
        <img src="../assets/food7.jpg" alt="Customer Photo7">
        <div class="caption">
          <blockquote class="description"><p> 这是一幅食品的图片.</p></blockquote>
          <p class="reviewer">用户名</p>
        </div><!-- /.caption -->
      </div><!-- /.hreview -->
      </div>
    </div><!-- /.reviews -->
  </div>
</template>

<script >
export default {
  name: 'waterfall',
  data () {
      return {
      }
    }
}

</script>

<style >
.waterfall .reviews .col-md-4 .food{
    position: relative;
    padding: 0px;
    border: none;
}
.waterfall .reviews .col-md-4 .food .comment{
    display: none;
}
.waterfall .reviews .col-md-4 .food:hover .comment{
    display: block;
    position: absolute;
    background-color:rgba(0,0,0,0.6);
    top:0px;
    left:10px;
    right: 10px;
    padding:10px;
    color: #fff;
}
.waterfall .reviews .col-md-4 .food .caption {
    position: absolute;
    top: auto;
    left: 10px;
    right: 10px;
    bottom: 0;
    line-height: 1.1;
    background: rgba(0,0,0,0.5);
}
.waterfall .reviews .col-md-4 .food blockquote,.reviewer {
      margin: 0 6px;
      padding: 0;
}
.waterfall .reviews..col-md-4 .food blockquote {
      margin-top: 4px;
      border: none;
}
p{
  color: #fff;
  font-size: 14px;
}
.waterfall .reviews .col-md-4 .food .reviewer {
      margin-top: 2px;
      margin-bottom: 4px;
      text-align: right;
      color: #fff;
}


</style>
