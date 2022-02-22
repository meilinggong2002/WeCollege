module.exports = {
	PID: 'A00', //美业

	NAV_COLOR: '#ffffff',
	NAV_BG: '#5756B3',

	MEET_NAME: '预约',

	MENU_ITEM: ['首页', '预约日历', '我的'], // 第1,4,5菜单

	NEWS_CATE: '1=小店动态|rightpic,2=美容小课堂|leftbig',
	MEET_TYPE: '1=美容师预约|leftbig2,2=项目预约|leftbig',

	DEFAULT_FORMS: [{
			type: 'line',
			title: '姓名',
			desc: '请填写您的姓名',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		},
		{
			type: 'line',
			title: '手机',
			desc: '请填写您的手机号码',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		}
	]
}