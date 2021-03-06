<template>
    <div class="container">
        <!-- 输入框区域 -->
        <a-textarea
            v-model="form.sku"
            name="goods-sku"
            class="skus"
            placeholder="请请输入商品编号(SKU ID), 编号之间用英文逗号隔开"
            :rows="8" />

        <!-- 按钮区域 -->
        <div class="btn-layer">
            <a-button type="primary" @click="handle_goods_manage">商品管理</a-button>
        </div>

        <!-- 商品管理 -->
        <goods-sku-manager
            :visible.sync="goodsSkuManager.visible"
            :skus.sync="form.sku"
            ref="goodsSkuManager">
        </goods-sku-manager>
    </div>
</template>

<script>

// 商品管理模块
import goodsSkuManager from '../goods-sku-manager.vue'

// API
import {
    ZF_goodsTplList
} from '../../../../interface/index'

export default {
    name: 'es-system',
    props: ['sku', 'value'],
    data () {
        return {
            form: {
                sku: this.sku,
            },
            // 商品SKU管理的弹窗
            goodsSkuManager: {
                visible: false,
            },
        };
    },

    components: {
        goodsSkuManager
    },

    computed: {
        // 当前组件ID
        component_id () {
            return this.$store.state.design.selected_id;
        },
        // 获取所有组件的数据源
        component_goodsSKU () {
            return this.$store.state.page.goodsSKU;
        }
    },

    watch: {
        // 监听propsValue的变更
        sku (propsValue) {
            this.form.sku = propsValue;
        }
    },

    methods: {
        /**
         * 点击商品管理
         */
        handle_goods_manage () {
            if (this.form.sku == '') {
                this.$message.error('请添写商品SKU!');
                return false;
            }
            // 校验结果
            this.sku_validate(this.form.sku, () => {
                this.goodsSkuManager.visible = true;
            });
        },

        /**
         * 获取商品列表
         */
        async get_goods_list (callback) {
            const goodsSKU = this.component_goodsSKU;
            let goodsInfoList = []; // 暂存商品列表

            // 判断是否有sku
            if (this.form.sku != '') {
                const info = this.$store.state.page.info;
                const request = {
                    page: 1,
                    limit: 100,
                    skus: this.form.sku,
                    lang: info.lang,
                    pageId: info.page_id,
                    pipeline: info.pipeline
                };
                const res = await ZF_goodsTplList(request); // 获取商品列表数据
                if (res.code == 0) {
                    goodsInfoList = [...res.data];
                }
            }

            // 更新数据
            callback && callback({
                type: 1,
                list: goodsInfoList,
                sku: this.form.sku
            });
        },

        /**
         * 校验SKU
         */
        sku_validate (sku, callback) {
            this.$valid.designCommonValid({
                sku: sku,
                success: () => {
                    callback && callback();
                },
                update: (sku) => {
                    this.form.sku = sku;
                },
                filter: (sku) => {
                    this.form.sku = sku;
                },
                error: () => {
                    this.$emit('update:loading', false);
                }
            });
        },

        /**
         * 确认按钮
         */
        async handle_confirm (callback) {
            this.$emit('update:loading', true);
            // 如果有公共校验函数
            this.$valid.designCommonValid({
                sku: this.form.sku,
                success: (res) => {
                    this.$emit('update:loading', false);
                    this.get_goods_list(callback);
                },
                update: (sku) => {
                    this.form.sku = sku;
                },
                filter: (sku) => {
                    this.form.sku = sku;
                },
                error: () => {
                    this.$emit('update:loading', false);
                }
            });
        },
    }
}
</script>

<style lang="less" scoped>
.btn-layer {
    display: flex;
    justify-content: flex-end;
    margin-top: 8px;
}
</style>