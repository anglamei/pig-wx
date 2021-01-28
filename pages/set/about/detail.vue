<template>
	<view class="about" >
		<view class="shop-info " v-if="title === '关于我们'">
			<view class="about-content" v-if="detail.about_me">
				<oa-parser lazy-load :html="detail.about_me"></oa-parser>
			</view>
			<oa-empty :info="`暂无${title}`" v-if="!detail.about_me "></oa-empty>
		</view>
		<view class="shop-info " v-if="title === '注册协议'">
			<view class="about-content" v-if="detail.protocol_register">
				<oa-parser lazy-load :html="detail.protocol_register"></oa-parser>
			</view>
			<oa-empty :info="`暂无${title}`" v-if="!detail.protocol_register "></oa-empty>
		</view>
		<view class="shop-info" v-if="title === '隐私协议'">
			<view class="about-content" v-if="detail.protocol_privacy">
				<oa-parser lazy-load :html="detail.protocol_privacy"></oa-parser>
			</view>
			<oa-empty :info="`暂无${title}`" v-if="!detail.protocol_privacy "></oa-empty>
		</view>

	</view>
</template>

<script>
	import oaParser from '@/components/oa-parser';
	import oaEmpty from '@/components/oa-empty';
	export default {
		components: {
			oaParser,oaEmpty
		},
		data() {
			return {
				detail: {"about_me":"<p></p><p>北航金华北斗应用研究院位于浙江省金华市金义都市新区金山科创园区。由浙江省金华市金义都市新区管委会和北京航空航天大学电子信息工程学院共同组建，于2017年1月20日正式注册成立。</p><p>北航金华北斗应用研究院致力于北斗导航卫星系统的应用研究，在智慧城市相关领域，如智慧交通、物流供应链、智慧海洋、智慧农业、智慧旅游等行业，打造一流品牌；搭建危房、桥梁、大坝等特种建筑体的实时监测，地下管网的精准监测，消防装备的连续追踪、城管执法、保安、环卫等特殊人群的跟踪监控系统，为重点领域如医院、园区和特色小镇提供精准的位置服务为核心的综合服务体系。</p><p>北航金华北斗应用研究院建北斗遥感应用、北斗可信服务应用、北斗安全应用、大数据分析应用四大创新型实验室。北斗教育培训演示平台，则开展北斗领域的学术研讨、教育培训等活动为主，在金华市、浙中地区集聚形成从芯片、模块、终端、应用服务到运营管理平台的高水平产业链，促进形成新的经济增长。</p><p>北航金华北斗应用研究院充分发挥北京航空航天大学的科学技术创新优势和人才聚集优势，全力推进金华市五大千亿产业发展，以建设浙江省重要的科技创新中心为目的，为当地相关技术产业带来强大推动，促进形成新的经济增长，加速打造浙江第四大都市区而做出应有的贡献。</p><p><br/></p>"},
				title: null,
			};
		},
		onShow() {
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: this.themeColor.color,
				animation: {
					duration: 400,
					timingFunc: 'easeIn'
				}
			})
		},
		onLoad(options) {
			this.title = options.title;
			uni.setNavigationBarTitle({
				title: options.title
			});
		},
		
	};
</script>
<style lang="scss">
	page {
		background-color: $page-color-base;
		position: relative;

		.about {
			.shop-info {
				.about-content {
					padding: $spacing-lg;
				}

				text-align: left;

				image {
					margin-top: 100upx;
					width: 240upx;
					height: 240upx;
					border-radius: 50%;
				}
			}
		}
	}
</style>
