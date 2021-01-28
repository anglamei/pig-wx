<template>
	<view class="content">
		<!-- <navigator url="plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id={{roomId}}&custom_params={{customParams}}">

		</navigator> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				roomId: '',
				customParams: ''
			}
		},
		onLoad() {
			//this.init()
		},
		watch:{
			'$store.state.userInfo': function () {
			  this.init()
			},
		},
		methods: {
			init() {
				//获取房间列表
				let access_token = uni.getStorageSync('accessToken');
				let json = {
		      name: "测试直播房间1",  // 房间名字
		      coverImg: "",   // 通过 uploadfile 上传，填写 mediaID
		      startTime: 1588237130,   // 开始时间
		      endTime: 1588237130 , // 结束时间
		      anchorName: "zefzhang1",  // 主播昵称
		      anchorWechat: "WxgQiao_04",  // 主播微信号
		      subAnchorWechat: "WxgQiao_03",  // 主播副号微信号
		      createrWechat: 'test_creater', // 创建者微信号
		      shareImg: "" ,  //通过 uploadfile 上传，填写 mediaID
		      feedsImg: "",   //通过 uploadfile 上传，填写 mediaID
		      isFeedsPublic: 1, // 是否开启官方收录，1 开启，0 关闭
		      type: 1 , // 直播类型，1 推流 0 手机直播
		      closeLike: 0 , // 是否关闭点赞 1：关闭
		      closeGoods: 0, // 是否关闭商品货架，1：关闭
		      closeComment: 0, // 是否开启评论，1：关闭
		      closeReplay: 1, // 是否关闭回放 1 关闭
		      closeShare: 0,   //  是否关闭分享 1 关闭
		      closeKf: 0, // 是否关闭客服，1 关闭
				}
				let url = 'https://api.weixin.qq.com/wxaapi/broadcast/room/create?access_token='
				this.$http.post(url + access_token, json).then(res => {
					debugger
				})
			},
			initData() {
				//获取房间列表
				let access_token = uni.getStorageSync('accessToken');
				let json = {
				    "start": 0, // 起始拉取房间，start = 0 表示从第 1 个房间开始拉取
				    "limit": 10 // 每次拉取的个数上限，不要设置过大，建议 100 以内
				}
				let url = 'https://api.weixin.qq.com/wxa/business/getliveinfo?access_token='
				this.$http.post(url + access_token, json).then(res => {
					debugger
				})

				// let roomId = [直播房间id] // 填写具体的房间号，可通过下面【获取直播房间列表】 API 获取
				// let customParams = encodeURIComponent(JSON.stringify({ path: 'pages/index/index', pid: 1 })) // 开发者在直播间页面路径上携带自定义参数（如示例中的path和pid参数），后续可以在分享卡片链接和跳转至商详页时获取，详见【获取自定义参数】、【直播间到商详页面携带参数】章节（上限600个字符，超过部分会被截断）
				// wx.navigateTo({
				//     url: `plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=${roomId}&custom_params=${customParams}`
				// })
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
