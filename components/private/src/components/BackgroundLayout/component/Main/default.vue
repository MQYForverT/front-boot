<template>
	<el-container class="h-full">
		<AppMask v-show="isMobile && !isCollapse" @click="closeAppMask" />
		<Aside>
			<template #logo>
				<slot name="logo" />
			</template>
		</Aside>
		<slot name="body" />
		<el-container class="flex-center" :class="{ 'layout-backtop': !props.isFixedHeader }">
			<Header v-if="props.isFixedHeader" />
			<el-scrollbar ref="layoutDefaultsScrollbarRef" :class="{ 'layout-backtop': props.isFixedHeader }">
				<Header v-if="!props.isFixedHeader" />
				<!-- <Main />  -->
				<!-- <AppSetting /> -->
			</el-scrollbar>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
	import useInject from '../../hooks/useInject'
	import useState from '../../hooks/useState'

	import Aside from '../Aside/index.vue'
	import AppMask from '../AppMask/index.vue'
	import Header from '../Header/index.vue'
	// import AppSetting from '../AppSetting/index.vue'

	const { props, emits, propsEnum } = useInject()
	const { isCollapse, isMobile } = useState()

	const closeAppMask = () => {
		if (props.isCollapse === undefined) {
			isCollapse.value = true
		} else {
			emits('changeProp', propsEnum.isCollapse, true)
		}
	}
</script>

<style>
	@unocss-placeholder;
</style>
