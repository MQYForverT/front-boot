<template>
	<el-scrollbar>
		<el-menu
			:default-active="activePath"
			:default-openeds="getAllOpenList"
			class="!w-full !border-0"
			:unique-opened="props.isUniqueOpened"
			:collapse-transition="false"
			:collapse="isCollapse"
			popper-effect="dark"
			router
			@select="handleSelect"
		>
			<MenuItem v-for="item in props.menuList" :key="item.path" :menu="item" />
		</el-menu>
	</el-scrollbar>
</template>

<script lang="ts" setup>
	import useInject from '../../hooks/useInject'
	import useState from '../../hooks/useState'
	import MenuItem from './MenuItem.vue'

	const { props, emits } = useInject()
	const { activePath, isCollapse } = useState()

	const getAllOpenList = computed(() => {
		return props.isAllOpen ? props.menuList.map((x) => x.path) : []
	})

	const handleSelect = (key: string) => {
		emits('selectMenu', key)
		activePath.value = key
	}
</script>

<style>
	@unocss-placeholder;
</style>
