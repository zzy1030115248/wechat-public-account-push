/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx07e99f95caa4f651',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c2ed64b46c7b8100d0060b9c4177cc16',

  PROVINCE: '广东',
  CITY: '深圳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o6ma56GE8BPpsYsZXRJ3wub0ueww',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'GHFpiuVQwc6Lesl4bmUFoYB6NSX-gzCXH8AyOwQRwFM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-24',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
//         {
//           type: '*生日', name: '宝贝', year: '1996', date: '09-09',
//         },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: 'bi!', year: '1996', date: '05-24',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '01-24',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      name:'我自己',
      id: 'o6ma56NAM_PD_ooqEmJzocRHmBFY',
      useTemplateId: 'GHFpiuVQwc6Lesl4bmUFoYB6NSX-gzCXH8AyOwQRwFM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-06',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '我', year: '1997', date: '10-06',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '01-24',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'nvzowsO3jZ5h51tgMvO_Q2q2iWoIwPIAE4tC6nGoIp4',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o6ma56NAM_PD_ooqEmJzocRHmBFY',
    }
  ],

}

module.exports = USER_CONFIG

