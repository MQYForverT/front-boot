<template>
	<el-dropdown trigger="click" @command="handleCommand">
		<div class="h-14 flex-center cursor-pointer p-3 hover:bg-fill">
			<el-avatar :src="props.userAvatar.avatar || avatar" size="small" class="mr-2 shrink-0" />
			<span>{{ props.userAvatar.name || 'mqy' }}</span>
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item
					v-for="item in props.userAvatar.dropdowMenu"
					:key="item.key"
					:command="item.key"
					:divided="item.divided"
				>
					{{ item.value }}
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script lang="ts" setup>
	import useInject from '../../hooks/useInject'
	import avatar from '@/assets/image/avatar.jpg'

	const { props, emits } = useInject()

	const handleCommand = (val: string) => {
		emits('commandUser', val)
	}
</script>

<style>
	@unocss-placeholder;
</style>
