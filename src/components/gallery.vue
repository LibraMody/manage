<template>
<div class="gallery">
    <div>
        <head-view></head-view>
    </div>
    <div class="main">
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="order in 6" :key="order">
                <el-image
                :src= "imgGroups[order-1].src"
                class="medium"
                >
                </el-image>
            </el-carousel-item>
        </el-carousel>
        <div class="content">
            <div class="card" v-for="card in cards" :key="card.id">
                <div class="link_btn" v-text="card.name" @click="view_click"></div>
                <div class="list_view">
                    <ul>
                        <li v-for="item in card.items" :key="item.id">
                            <div class="list_line">
                                <div class="date_msg">
                                    <p>&#9784;</p>
                                    {{ item.date }}
                                </div>
                                <div class="name_msg" v-text="item.name"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style>
.gallery {
    width: 984px;
    margin: 0 auto;

    & .main {
        padding-top: 10px;
        border-top: 1px solid #0f3;
        background-color:rgba(0,0,0,0.03);

        & .medium {
            width: 100%;
        }

        & .content {
            display: inline-block;
            font-size: 0;

            & .card {
                width: 235px;
                height: 370px;
                display: inline-block;
                text-align: center;
                text-decoration: none;
                margin: 5px 5px;

                & .link_btn {
                    text-align: center;
                    background-color: #d6e2ad;
                    padding: 10px 0;
                    font-size: 18px;
                    color: #ffffff;
                    cursor: pointer;

                    & a {
                        text-decoration: none;
                        color: #CD5C5C;
                        font-size: 16px;
                    }
                }
                & .link_btn:hover {
                    background: #abbd73; 
                    transition: background-color .4s;  
                }
                & .list_view {              
                    font-size: 16px;

                    & ul {
                        padding-left: 0;
                        border: 2px solid #33CC33;    
                    }

                    & li {
                        display: block;
                        font-size: 0;
                        background-color: #befdc5;
                        padding: 0 10px;
                        border: solid 1px transparent;
                        transition: border-color .4s linear;/*设置边框状态变换的过渡*/
                        cursor: pointer;

                        & > .list_line {

                            & .date_msg {
                                width: 49%;
                                text-align: left;
                                display: inline-block;
                                font-size: 16px;
                                color: #CCCC00;

                                & p {
                                display: inline-block;
                                color: #0f3;
                                }
                            }
                            & .name_msg {
                                width: 50%;
                                text-align: right;
                                display: inline-block;
                                font-size: 16px;
                                color: #666;
                            }
                        }
                    }

                    & li:hover {
                        border-color: #00FFFF;
                        background-color: #ecf5ff;
                    }
                }
            }
        }
    }
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}


</style>
<script>
import Vue from 'vue';
import { Carousel, CarouselItem, Image } from 'element-ui';
import axios from 'axios';
import img from '@/mock/json/gallery_img.json';
import HeadView from '@/components/header';

Vue.use( Carousel, CarouselItem, Image );

export default {
    components: {
        'el-carousel': Carousel,
        'el-carousel-item': CarouselItem,
        'el-image': Image,
        'head-view': HeadView
    },
    methods: {
        view_click() {
            this.$router.push({ name: 'view' })
        }
    },
    async mounted () {
        await this.$nextTick();//等第二次生命周期
    },
    data() {return {
        imgGroups: img.images,

        cards: [
            {
                name: '日记',
                id: 'diary',
                items: [
                    { date: '11-1', name: '无题', id: 'diary_first'},
                    { date: '11-4', name: '无题', id: 'diary_two'},
                    { date: '11-6', name: '无题', id: 'diary_three'},
                    { date: '11-8', name: '无题', id: 'diary_four'},
                    { date: '11-12', name: '无题', id: 'diary_five'}
                ]
            },
            {
                name: '笔记',
                id: 'note',
                items: [
                    { date: '11-4', name: '周一', id: 'note_first'},
                    { date: '11-5', name: '周二', id: 'note_two'},
                    { date: '11-6', name: '周三', id: 'note_three'},
                    { date: '11-7', name: '周四', id: 'note_four'},
                    { date: '11-8', name: '周五', id: 'note_five'}
                ]
            },
            {
                name: '便签',
                id: 'memo',
                items: [
                    { date: '11-3', name: '周日', id: 'memo_first'},
                    { date: '11-7', name: '周四', id: 'memo_two'},
                    { date: '11-8', name: '周五', id: 'memo_three'},
                    { date: '11-11', name: '周一', id: 'memo_four'},
                    { date: '11-12', name: '周二', id: 'memo_five'}
                ]
            },
            {
                name: '文章',
                id: 'essay',
                items: [
                    { date: '11-10', name: '白驹过隙', id: 'essay_first'},
                    { date: '11-13', name: '时过境迁', id: 'essay_two'},
                    { date: '11-16', name: '白云苍狗', id: 'essay_three'},
                    { date: '11-19', name: '岁寒如流', id: 'essay_four'},
                    { date: '11-22', name: '时不待人', id: 'essay_five'}
                ]
            }
        ]
     
    }},
}
</script>