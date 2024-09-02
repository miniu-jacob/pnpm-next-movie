'use client';
import React from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const Navbar = () => {
    // 검색어 입력 시 이동
    const [keyword, setKeyword] = useState('');
    const router = useRouter();

    const searchByKeyword = (event) => {
        if (keyword.trim()) {
            router.push(`/movies?q=${keyword}`);
        }
        console.log('입력값: ', keyword);
        setKeyword('');
        // URL 을 바꿔 주기
    };

    return (
        <div className='flex justify-between md:justify-around  h-[50px] w-full items-center p-4 bg-black'>
            {/*LOGO  */}
            <div className=' w-[120px] box-border '>
                <Image
                    src={'/netflix-logo-rgb.png'}
                    alt={'logo'}
                    width={300}
                    height={30}
                ></Image>
            </div>
            <div
                className='grow hidden md:flex gap-4 items-center cursor-pointer  
            h-full mx-6 font-semibold text-slate-200 flex-grow-1'
            >
                <Link href={'/'}>
                    <span>HOME</span>
                </Link>
                <Link href={'/movies'}>
                    <span>MOVIES</span>
                </Link>
            </div>
            {/*  SEARCH */}
            <div className='hidden md:flex items-center h-full mr-4 flex-grow-2 '>
                <div className='w-[300px] rounded-md box-border flex items-center '>
                    <input
                        type='text'
                        placeholder='Search'
                        value={keyword}
                        onChange={(event) => setKeyword(event.target.value)}
                        className='border border-gray-600 w-full h-full p-1  rounded-md outline-none text-slate-200 bg-black mr-6'
                    />
                    <button
                        className='text-red-400 border border-red-800 w-[130px] p-1 rounded-md'
                        onClick={() => {
                            searchByKeyword();
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className='block md:hidden mr-10'>
                {/* 햄버거 */}
                <Menu className='w-8 h-8 cursor-pointer' color='white' />
            </div>
        </div>
    );
};

export default Navbar;
