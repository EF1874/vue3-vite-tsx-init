/*
 * @Author: 李聪
 * @Date: 2021-09-01 11:58:09
 * @LastEditors: 李聪
 * @LastEditTime: 2021-09-01 14:56:24
 * @Description:
 */

import { defineComponent } from 'vue';
import classes from '@c/test.module.less';

export default defineComponent({
  name: 'Test',
  props: {
    msg: { type: String, default: '测试tsx' }
  },

  setup(prop, { slots, attrs, emit }) {
    return () => (
      <div class={classes.test}>
        <h2 class={classes['test-title']}>tsx页面</h2>
        <p>{prop.msg}</p>
        <el-button>按钮</el-button>
      </div>
    );
  }
});
