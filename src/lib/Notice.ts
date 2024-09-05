const notices = [
	/* 추가 공지사항 작성방법: 아래 { } 내용을 복사해서 상단에 붙여넣기 */

	{
		title: '테스트 공지사항2',
		date: '2024-09-05',
		author: ['Admin'],
		description:
			'2번째 공지사항입니다.',
		appendix_name: '없음',
		appendix_path: '.'
	},
	{
		title: '테스트 공지사항',
		date: '2024-09-05',
		author: ['Admin'],
		description:
			'테스트 공지사항입니다. 이 공지사항은 테스트를 위해 작성되었습니다. This is test notice. This notice has been written for testing purposes.',
		appendix_name: 'test.txt',
		appendix_path: '/appendix/test.txt'
	},
];

export default notices;