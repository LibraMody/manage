<template>
<div class="card_view">
  <div>
      <head-view></head-view>
  </div>
  <div>
    <div class="menu"> 
      <el-row :gutter="20">
        <el-col :span="6" v-for="(menu, index) in menus" :key="index">
          <div class="grid-content bg-purple">
            <p v-text="menu.name"></p>
          </div>
        </el-col>
      </el-row>
      </div>
      <div class="content">
        <div class="view_list main_box">
          <ul>
            <li class="list" v-for="data in datas" :key="data.id"   @click="list_click(data.id)">
              <div class="list_date">
                <p>&#9674;</p>
                <p v-text="data.date"></p>
              </div>
              <div class="list_name">
                <p v-text="data.name"></p>
              </div>
            </li>
          </ul>
        </div>
        <div class="view_content main_box">
          <div class="text_header">
            <h1 class="text_title" v-text="currentData.title"></h1>
          </div>
          <div class="text_content">
            <div class="content_card">
              <p  
                v-text="section.content"
                v-for="(section, index) in currentData.sections"
                :key="index">
              </p>
            </div>
          </div>
          <div class="qute">
            <p v-text="currentData.qute"></p>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<style>
.card_view {
  width: 984px;
  margin: 0 auto;
}
 .el-row {
    margin-bottom: 20px;

    &:last-child {
    margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d6e2ad;
    transition: background-color 1s;
  }
  .bg-purple:hover {
    cursor: pointer;
    background: #abbd73;
    transition: background-color .4s;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .menu p {
    color: #fff;
    text-align: center;
    padding-top: 6px;
  }

  .content {
    margin-top: 10px;
    font-size: 0;
    display: inline-block;
    box-sizing: border-box;
  }

  .view_list {
    width: 231px;
    font-size: 0;
    vertical-align: top;

    & .list_date {
      width: 49%;
      text-align: left;
      display: inline-block;
      color: #CCCC00;
    }
    & .list_date p {
      display: inline-block;
    }
    & .list_name {
      display: inline-block;
      color: #303133;
    }
  }
  .view_list li:hover {
    background: #DEB887;
  }
  .view_list li:hover p {
    color: #FFEBCD;
  }
  .view_list ul {
    padding: 0;
  }
  .view_list li {
    display: block;
    padding-left: 40px;
    font-size: 16px;
    cursor: pointer;
    border-bottom: 1px solid #ebeef5;
  }
  .view_content {
    width: 729px;
    margin-left: 20px;
    vertical-align: top;
    background: url(../img/bg_content.jpg) no-repeat;
    background-size: 100%;

    & .text_header {
      font-size: 16px;
      text-align: center; 
      color: #C71585;
    }
    & .text_content {
      font-size: 18px;
      text-align: center;

      & .content_card {
        display: inline-block;
      }
      & .content_card p {
        display: inline-block;
        width: 20px;
        line-height: 40px;
        margin-right: 50px;
        color: #4B0082;
        vertical-align: top;
      }
    }
    & .qute {
      font-size: 16px;
      text-align: right;
      width: 76%;
      color: #8A2BE2;
    }
  }

  .main_box {
    height: 500px;
    border: 1px solid #7FFFD4;
    border-radius: 4px;
    display: inline-block;
  }
</style>

<script>
import HeadView from '@/components/header';
import { Col, Row } from 'element-ui';
import Vue from 'vue';
import ViewData from '../mock/json/card_view_data.json';

Vue.use( Col, Row );

export default {
    components: {
        'head-view': HeadView,
        'el-col': Col,
        'el-row': Row
    },

    methods: {
      list_click(id) {
        //this.dataGroup = ViewData;
        this.currentData = this.dataGroup[id];
      }
    },

    data() {return {
        currentData: ViewData.diarys[0],

        dataGroup: ViewData.diarys,

        datas: [
          { date: '10-1', name: '题一', id: 0},
          { date: '10-2', name: '题二', id: 1},
          { date: '10-3', name: '题三', id: 2},
          { date: '10-4', name: '题四', id: 3},
          { date: '10-5', name: '题五', id: 4},
        ],
        menus: [
          { name: '日记'},
          { name: '笔记'},
          { name: '便签'},
          { name: '文章'}    
        ],
        
    }},

}
</script>