import Link from 'next/link';

const NotFound = () => {
    return (
        <div className='flex items-center justify-center flex-col h-screen bg-black gap-4'>
            <h1 className='text-3xl font-semibold text-slate-100'>
                404 - Page Not Found!!
            </h1>
            <p className='text-slate-100 text-xl'>
                찾을 수 없는 페이지입니다.{' '}
            </p>
            <Link href={'/'}>
                <div className='text-slate-100 underline text-xl font-semibold'>
                    홈으로 돌아가기
                </div>
            </Link>
        </div>
    );
};

export default NotFound;
