<template>
  <div>
    <div class="searchBar scrollFixed">
      <div class="search">
        <label class="icon-search"></label>
        <input type="text" placeholder="抹茶蛋糕" disabled="disabled" />
      </div>
    </div>
    <div class="sliderLay">
      <div class="item">
        <img src="/static/img/ccc.png" alt="" />
      </div>
      <!--    <div class="item">
             <img src="/static/img/fff.jpg" alt="" />
         </div> -->
    </div>
    <!-- 首页推荐 -->
    <div class="recommendLay">
      <ul class="clearfix">
        <li>
          <img src="/static/img/fff.png" alt="" />
          <p>小煮推荐</p>
        </li>
        <li>
          <img src="/static/img/fff.png" alt="" />
          <p>新鲜水果</p>
        </li>
        <li>
          <img src="/static/img/fff.png" alt="" />
          <p>食品饮料</p>
        </li>
        <li>
          <img src="/static/img/fff.png" alt="" />
          <p>厨房生活</p>
        </li>
      </ul>
    </div>
    <!-- 小煮头条 -->
    <div class="headlines">
      <div class="tip">小煮头条</div>
      <div class="slideMid">
        <!-- <div class="item">限时促销</div> -->
        <div class="item">限时促销限时促销限时促销限时促销限时促销</div>
      </div>
    </div>
    <!-- 限时秒杀 -->
    <div class="timeLimit justify">
      <div class="box left">
        <h2>限时秒杀</h2>
        <div class="limit">
          <div class="item">
            <div class="time">
              <span>00</span>:<span>35</span>:<span>21</span>
            </div>
            <div class="img">
              <img src="/static/img/fff.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="box right">
        <div class="list clearfix">
          <div class="info fleft">
            <h2>名称描述描述描述描述描述描述</h2>
            <p>描述描述描述描述描述描述描述描述描述描述描述描述</p>
          </div>
          <div class="img fright">
            <img src="/static/img/fff.png" alt="" />
          </div>
        </div>
        <div class="list clearfix">
          <div class="info fleft">
            <h2>名称</h2>
            <p>描述描述</p>
          </div>
          <div class="img fright">
            <img src="/static/img/fff.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- 营销模块 -->
    <div class="marketing">
      <div class="justify">
        <div class="box">
          <div class="title">每日优选</div>
          <div class="des">正品保障15天售后</div>
          <div class="img"><img src="/static/img/fff.png" alt="" /></div>
        </div>
        <div class="box">
          <div class="title">鲜品传送</div>
          <div class="des">海量品牌咨询合集</div>
          <div class="img"><img src="/static/img/fff.png" alt="" /></div>
        </div>
        <div class="box">
          <div class="title">淘先达</div>
          <div class="des">打造品质家庭生活</div>
          <div class="img"><img src="/static/img/fff.png" alt="" /></div>
        </div>
      </div>
    </div>
    <div class="section">
      <h2>栏目名称1</h2>
      <div class="goodsList threeCol justify">
        <div class="box">
          <div class="img">
            <img src="/static/img/fff.png" alt="" />
            <i>特惠</i>
            <span>售罄</span>
          </div>
          <div class="title">名称名称名称名称名称名称</div>
          <div class="price">
            <span class="sale"><em>¥</em>30.00</span>
            <span class="discount">¥88.00</span>
            <span class="icon-cart"></span>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <img src="/static/img/fff.png" alt="" />
            <em>新品</em>
            <span>售罄</span>
          </div>
          <div class="title">名称名称名称名称名称名称</div>
          <div class="price">
            <span class="sale"><em>¥</em>30.00</span>
            <span class="discount">¥88.00</span>
            <span class="icon-cart"></span>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <img src="/static/img/fff.png" alt="" />
            <em>新品</em>
            <span>售罄</span>
          </div>
          <div class="title">名称名称名称名称名称名称</div>
          <div class="price">
            <span class="sale"><em>¥</em>30.00</span>
            <span class="discount">¥88.00</span>
            <span class="icon-cart"></span>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <img src="/static/img/fff.png" alt="" />
            <i>特惠</i>
            <em>新品</em>
            <span>售罄</span>
          </div>
          <div class="title">名称</div>
          <div class="price">
            <span class="sale"><em>¥</em>30</span>
            <span class="discount">¥88.00</span>
            <span class="icon-cart"></span>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <img src="/static/img/fff.png" alt="" />
            <i>特惠</i>
            <span>售罄</span>
          </div>
          <div class="title">名称</div>
          <div class="price">
            <span class="sale"><em>¥</em>30</span>
            <span class="discount">¥88.00</span>
            <span class="icon-cart"></span>
          </div>
        </div>
        <div class="line"></div>
      </div>
    </div>
    <div class="section">
      <h2>栏目名称2</h2>
      <div class="goodsList threeCol justify">
        <div class="box">
          <div class="img">
            <img src="/static/img/fff.png" alt="" />
            <em>新品</em>
            <span>售罄</span>
          </div>
          <div class="title">名称</div>
          <div class="price">
            <span class="sale"><em>¥</em>30</span>
            <span class="discount">¥88.00</span>
            <span class="icon-cart"></span>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <img src="/static/img/fff.png" alt="" />
            <i>特惠</i>
            <span>售罄</span>
          </div>
          <div class="title">名称</div>
          <div class="price">
            <span class="sale"><em>¥</em>30</span>
            <span class="discount">¥88.00</span>
            <span class="icon-cart"></span>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <img src="/static/img/fff.png" alt="" />
            <em>新品</em>
            <span>售罄</span>
          </div>
          <div class="title">名称</div>
          <div class="price">
            <span class="sale"><em>¥</em>30</span>
            <span class="discount">¥88.00</span>
            <span class="icon-cart"></span>
          </div>
        </div>
        <div class="line"></div>
      </div>
    </div>
    <div class="section">
      <h2>栏目名称3</h2>
      <div class="goodsList threeCol justify">
        <div class="box">
          <div class="img">
            <img src="/static/img/fff.png" alt="" />
            <i>特惠</i>
            <span>售罄</span>
          </div>
          <div class="title">名称</div>
          <div class="price">
            <span class="sale"><em>¥</em>30</span>
            <span class="discount">¥88.00</span>
            <span class="icon-cart"></span>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <img src="/static/img/fff.png" alt="" />
            <i>特惠</i>
            <span>售罄</span>
          </div>
          <div class="title">名称</div>
          <div class="price">
            <span class="sale"><em>¥</em>30</span>
            <span class="discount">¥88.00</span>
            <span class="icon-cart ed"></span>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <img src="/static/img/fff.png" alt="" />
            <em>新品</em>
            <span>售罄</span>
          </div>
          <div class="title">名称</div>
          <div class="price">
            <span class="sale"><em>¥</em>30</span>
            <span class="discount">¥88.00</span>
            <span class="icon-cart"></span>
          </div>
        </div>
        <div class="line"></div>
      </div>
    </div>
    <!-- 为您推荐 最多6个-->
    <div class="section">
      <h2>为您推荐</h2>
      <div class="goodsList twoCol justify">
        <div class="box">
          <div class="img">
            <img src="/static/img/fff.png" alt="" />
            <i>特惠</i>
            <span>售罄</span>
          </div>
          <div class="title">名称</div>
          <div class="price">
            <span class="sale"><em>¥</em>30</span>
            <span class="discount">¥88.00</span>
            <span class="icon-cart"></span>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <img src="/static/img/fff.png" alt="" />
            <em>新品</em>
            <span>售罄</span>
          </div>
          <div class="title">名称</div>
          <div class="price">
            <span class="sale"><em>¥</em>30</span>
            <span class="discount">¥88.00</span>
            <span class="icon-cart"></span>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <img src="/static/img/fff.png" alt="" />
            <i>特惠</i>
            <span>售罄</span>
          </div>
          <div class="title">名称</div>
          <div class="price">
            <span class="sale"><em>¥</em>30</span>
            <span class="discount">¥88.00</span>
            <span class="icon-cart"></span>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <img src="/static/img/fff.png" alt="" />
            <em>新品</em>
            <span>售罄</span>
          </div>
          <div class="title">名称名称名称名称名称名称名称名称</div>
          <div class="price">
            <span class="sale"><em>¥</em>30</span>
            <span class="discount">¥88.00</span>
            <span class="icon-cart"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
