// 슬라이드 설정 파일
const slideConfig = [
    {
        id: 1,
        title: "타이틀",
        file: "slide-01-title.html",
        type: "title"
    },
    {
        id: 2,
        title: "서비스 흐름도",
        file: "slide-02-flow.html",
        type: "content"
    },
    {
        id: 3,
        title: "학생 로그인",
        file: "slide-03-student-login.html",
        type: "content"
    },
    {
        id: 4,
        title: "정보 확인",
        file: "slide-04-user-confirm.html",
        type: "content"
    },
    {
        id: 5,
        title: "시험 목록",
        file: "slide-05-exam-list.html",
        type: "content"
    },
    {
        id: 6,
        title: "시험 응시",
        file: "slide-06-exam-process.html",
        type: "content"
    },
    {
        id: 7,
        title: "관리자 로그인",
        file: "slide-07-admin-login.html",
        type: "content"
    },
    {
        id: 8,
        title: "관리자 대시보드",
        file: "slide-08-admin-dashboard.html",
        type: "content"
    },
    {
        id: 9,
        title: "마무리",
        file: "slide-09-summary.html",
        type: "title"
    }
];

// 전역 변수로 설정 내보내기
if (typeof window !== 'undefined') {
    window.slideConfig = slideConfig;
}