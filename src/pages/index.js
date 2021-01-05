import FunctionComponents from "@yiyou-components/write-board";
import React,{useCallback} from "react";

// import classnames from "classnames";

import css from './index.module.less'


export default function FunctionComponent(props) {
  // const networkDelayClass=useMemo(()=>classnames({
  //   "inter_state_abnormal":(networkDelay>=200 || networkDelay==-1)
  // }),[networkDelay]);

  // const audioLinkClass=useMemo(()=>classnames({
  //   "inter_state_abnormal":!audioLink
  // }),[audioLink]);

  const handelShowInter=useCallback(async ()=>{

  },[]);

  const handelHideInter=useCallback(async ()=>{

  },[]);

  return (
    <div className={css.container}>
      <FunctionComponents></FunctionComponents>
      <div className={css.classroom}>
        <div className={css.classroom_switch}>
          <div onMouseOver={handelShowInter} onMouseLeave={handelHideInter}>
          {/* <div ref="inter" className="inter_dropdow">
            <div className="item" style="margin-bottom:1px">
              <span>网络延迟:</span>
              <i className={networkDelayClass}>
                {{networkDelay==-1?'--':networkDelay+'ms'}}
              </i>
            </div>
            <div className="item">
              <span>语音通讯:</span>
              <i className={audioLinkClass} v-text="">
                {audioLink?'正常':'异常'}
              </i>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>)
};

