import React from "react";
import {useSelector} from "dva";
import {Space,Button} from "antd";

import css from "./style.less";

export default function FunctionComponent() {

  const global_model=useSelector(({global_model})=>global_model);

  return (
    <Space direction="vertical">
      <div className={css.container}>hello words</div>
      <div>global_model value is {global_model.test_number}</div>
      <Space>
        <Button type="primary">测试按钮1</Button>
        <Button type="primary">测试按钮2</Button>
      </Space>
    </Space>
)}

