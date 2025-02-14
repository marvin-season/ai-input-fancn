export const SWITCH_TYPE_TEMPLATE = (label) => ({

  workprogress: (
    <>

      <span>作为一位</span>
      <span
        data-empty-text-span="岗位"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span>，请帮我总结本周的工作进展。本周完成的工作有</span>
      <span
        data-empty-text-span="工作内容"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span>，要求</span>
      <span
        data-empty-text-span="简明扼要"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      。
    </>
  ),
  // 周报助手-工作计划
  workplan: (
    <>
      {/* <span contentEditable={false} className="select-none mr-[5px] text-gradient">
        <WorkPlan className="inline-block mb-1 mr-1 text-[#5429FF]" />
        <span>{label}</span>
      </span> */}
      <span>作为一位</span>
      <span
        data-empty-text-span="岗位"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span>，请帮我规划下周的工作计划。下周计划的事项有</span>
      <span
        data-empty-text-span="工作计划"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span>，要求</span>
      <span
        data-empty-text-span="分点列出"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      。
    </>
  ),
  // 工作画布-年终总结
  yearSummary: (
    <>
      <span>请写一篇</span>
      <span
        data-empty-text-span="主题"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span>的年终总结</span>
      <span
        data-empty-text-span="工作计划"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span>，要求</span>
      <span
        data-empty-text-span="内容丰富、结构清晰"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      。
    </>
  ),
  // 工作画布-文章大纲
  articleOutline: (
    <>

      <span>请写一篇关于</span>
      <span
        data-empty-text-span="主题"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span>的文章大纲，要求包含</span>
      <span
        data-empty-text-span="工作计划"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span
        data-empty-text-span="主要观点、分论点、结论"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      。
    </>
  ),
  // 工作画布-演讲稿
  speech: (
    <>
      {/* <span contentEditable={false} className="select-none mr-[5px] text-gradient">
        <Runse className="inline-block mb-1 mr-1 text-[#5429FF]" />
        <span>{label}</span>
      </span> */}
      <span>请写一篇针对</span>
      <span
        data-empty-text-span="场合"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span>的演讲稿，主题为</span>
      <span
        data-empty-text-span="主题"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span>，要求</span>
      <span
        data-empty-text-span="语言生动、具有感染力、条理清晰"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      。
    </>
  ),
  // 工作画布-心得体会
  experience: (
    <>
      <span>请根据</span>
      <span
        data-empty-text-span="活动/事件/书籍"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span>写一篇心得体会，要求表达出你的</span>
      <span
        data-empty-text-span="真实感受、收获和反思"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span>，字数在</span>
      <span
        data-empty-text-span="建议字数"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span>左右</span>。
    </>
  ),
  // 工作画布-会议纪要
  meetingSummary: (
    <>
      <span>请写一份会议纪要，会议主要内容为</span>
      <span
        data-empty-text-span="会议主题"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span>，参会时间是</span>
      <span
        data-empty-text-span="2025年1月1日"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span>，地点在</span>
      <span
        data-empty-text-span="会议室"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span>，参会人员为</span>
      <span
        data-empty-text-span="公司全体人员"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      。
    </>
  ),
  // 飞书工具-会议纪要
  feishuMeetingSummary: (
    <>
      <span>查询我</span>
      <span
        data-empty-text-span="昨天"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span>会议主题是</span>
      <span
        data-empty-text-span="主题"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span>的会议纪要</span>。
    </>
  ),
  // 飞书工具-任务
  feishuQuest: (
    <>
      <span>查询我截止到</span>
      <span
        data-empty-text-span="本周"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span>，且待完成的任务</span>。
    </>
  ),
  // 飞书工具-日程
  feishuSchedule: (
    <>
      <span>查询我</span>
      <span
        data-empty-text-span="上周"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span>，日程主题是</span>
      <span
        data-empty-text-span="主题"
        className="min-w-[40px] inline-block px-1 border-b border-blue-20 pb-1  outline-none mx-1 lastnotdeleted leading-4"
      ></span>
      <span>的日程</span>。
    </>
  ),
})
