<template>
    <div class="design-form-body">

        <!-- 样式选择 -->
        <unit-panel title="组件样式" :desc="template_title">
            <tab-template
                :component_id="id"
                :list="template_list"
                @update="handle_update_template"/>
        </unit-panel>
    
       <!-- 循环当前已有的模版列表 -->
        <template v-for="(tmp, index) in template_list">
            <div :key="index" v-if="template_id == tmp.id">

                <!-- 数据配置界面 -->
                <tab-styles
                    :id="id"
                    :layout="layout[index].datas"
                    type="datas"
                    key="datas"/>

                <!-- 残忍的分割线 -->
                <hr class="form-line" />

                <!-- 样式配置界面 -->
                <tab-styles
                    :id="id"
                    :layout="layout[index].styles"
                    type="styles"
                    key="styles" />
                    
            </div>
        </template>

    </div>
</template>

<script>

// 容器组件
import tabTemplate from './tab-template';
import unitPanel from './unit-panel';
// 配置项编译器
import tabStyles from './tab-styles.vue';

export default {
    props: ['id'],

    components: {
        tabStyles,
        unitPanel,
        tabTemplate,
    },

    data () {
        return {
            template_id: '', // 当前选中的模版ID
            template_title: '', // 当前模版标题
        };
    },

    computed: {
        layout () {
            // 加载组件对应的 config 文件 
            return this.$store.state.page.components.filter(x => x.id === this.id)[0].config.layout;
        },

        // 获取当前的组件
        current_component () {
            const cmpt = this.$store.state.page.components.filter(x => x.id == parseInt(this.id));
            if (cmpt[0]) {
                return cmpt[0];
            } else {
                return {};
            }
        },

        // 获取模版列表
        template_list () {
            // 获取组件KEY
            const component_key = this.current_component.component_key;
            // 根据KEY获取模版列表
            const cmpt_list = this.$store.state.design.avavible_components.filter(x => x.component_key === component_key);
            if (cmpt_list[0]) {
                // 返回组件的模版列表
                return cmpt_list[0].tplList;
            } else {
                return [];
            }
        }
        
    },

    methods: {
        /**
         * 切花样式模版
         * @param {String} 模版名字
         * @param {String} 模版标题
         */
        handle_update_template (title, template_id) {
            this.template_title = title;
            this.template_id = template_id;
        }
    },

    created () {
        // 组件信息
        const component_info = this.$store.state.page.components.filter(x => x.id === this.id)[0];
    }
};
</script>

<style lang="less">

.design-form-body {
    width: 312px;
    display: block;



    // 单个配置项样式
    .form-item {
        flex-shrink: 0;
        margin-top: 16px;

        &.col-1 {
            width: 100%;
        }

        &.col-2 {
            width: 148px;
        }

        // 配置项的标题
        > label {
            display: block;
            margin-bottom: 4px;
            height: 20px;
            line-height: 20px;
        }

        // 输入框公共配置
        .ant-input,
        .ant-input-group-addon {
            border-color: #E8EAEC;
        }
        .ant-input:hover,
        .ant-input:active,
        .ant-input:focus {
            border-color: #40a9ff;
        }

        // 所有输入框字体大小
        .ant-input {
            font-size: 14px;
        }

        // 数字类型
        .ant-input-number {
            width: 100%;
            height: 40px;
            line-height: 40px;
        }

        // 图片选择器
        .image-picker-wrapper {
            .ant-input-group-addon {
                cursor: pointer;
                padding: 0px;
                width: 40px;
                text-align: center;
                background: #fff;
            }
        }
    }
}
</style>

<style lang="less" scoped>
    .form-line {
        border: 0px;
        margin-top: 40px;
        box-sizing: border-box;
        height: 1px;
        display: block;
        background: #EDEFF2;
    }
</style>
