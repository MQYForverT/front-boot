import { propsEnum } from '@mqy/component-private/dist/BackgroundLayout'

function App() {
	const ref = useRef(null)
	const [isCollapse, setCollapse] = useState(false)

	const handleCustomEvent = (detail) => {
		console.log('web1', detail)
		switch (detail[0]) {
			case propsEnum.isCollapse:
				setCollapse(Boolean(detail[1]))
				break
		}
		// 你的逻辑
	}

	useEventListener(
		'changeProp',
		({ detail = [] }) => {
			console.log('web1', detail)
			handleCustomEvent(detail)
		},
		{ target: ref },
	)

	const { width } = useSize(document.body)!

	const getCollapse = useMemo(() => {
		return width < 1000 ? true : isCollapse
	}, [width])

	const menuList = [
		{
			path: '/',
			meta: {
				icon: 'i-mdi-alarm',
				title: '首页',
				isMenu: true,
				isViewRouter: false,
			},
			children: [
				{
					path: '/home1',
					meta: {
						icon: 'mdi mdi-account',
						title: '首页1',
						isMenu: true,
						isViewRouter: false,
					},
				},
				{
					path: '/home2',
					meta: {
						icon: 'mdi mdi-account',
						title: '首页2',
						isMenu: true,
						isViewRouter: false,
					},
				},
			],
		},
	]

	return (
		<>
			<div>react</div>
			<div>{isCollapse + ''}</div>
			<div>
				<mqy-background-layout ref={ref} is-collapse={isCollapse} menu-list={JSON.stringify(menuList)} is-mobile={true}>
					<div slot="body">666</div>
				</mqy-background-layout>
			</div>
		</>
	)
}

export default App
