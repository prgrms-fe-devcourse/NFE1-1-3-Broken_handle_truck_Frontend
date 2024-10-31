import { useEffect, useState } from 'react';
import useTitleStore from '../store/titleStore';
import PinkNoti from '../assets/images/pinkNoti.svg?react';
import Message from '../components/Message';
import Logo from '../assets/images/pinkLogo.svg?react';

export default function NotificationPage() {
    const setTitle = useTitleStore((state) => state.setTitle);
    const [hasNotifictaion] = useState(false);

    useEffect(() => {
        setTitle('알림');
    }, []);

    return (
        <>
            {hasNotifictaion ? (
                <div className="flex flex-col gap-y-8 py-11 mx-auto w-[calc(100%-100px)] sm:w-[calc(100%-200px)]">
                    <div className="flex justify-between items-center">
                        <p className="flex items-center tracking-tighter">
                            <PinkNoti width={18} height={18} />
                            <strong className="px-1 tracking-tight text-lg">알림</strong>
                            <strong className="text-primary text-lg">3</strong>
                            <span className="text-lg">개</span>
                        </p>
                        <button className="border-1 border-primary rounded-lg py-1 px-5 tracking-tighter text-primary">
                            모두 읽음
                        </button>
                    </div>
                    <Message />
                    <Message />
                    <Message />
                </div>
            ) : (
                <div className="h-full flex justify-center items-center mx-auto w-[calc(100%-100px)] sm:w-[calc(100%-200px)]">
                    <div className="flex flex-col gap-y-2 justify-center items-center">
                        <Logo width={130} height={130} />
                        <div className="text-center text-2xl sm:text-3xl font-point">
                            받은 알림이 없습니다.
                            <br />
                            <span className="font-point text-primary">사장님</span>을 기다려주세요!
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}