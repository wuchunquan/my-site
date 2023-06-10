import Image from 'next/image'

export default function Home() {
    return (
        <main className="overflow-x-hidden">
            <section>
                <div
                    className="the-head-area container mt-6   flex flex-c text-white border-0 rounded-xl animate__animated animate__fadeInDown">
                    <div><img className="w-32 rounded-2xl" src="/img/avatar.jpg" alt="avatar" style={{filter:"invert(1) hue-rotate(115deg) brightness(1.1) contrast(0.9)"}}/></div>
                </div>
            </section>
            <section>
                <div
                    className="declaration-area container mt-6 h-28  flex-c text-white border-0 rounded-xl animate__animated animate__fadeInDown">
                    <h1 className="text-2xl md:text-4xl animate__animated animate__fadeInDown opacity-90">
                        请用一只玫瑰纪念我
                    </h1>
                    <div className="opacity-50 mt-2  text-[0.9rem]">用草也行....</div>
                </div>
            </section>
            <section>
                <div className="container flex flex-col mt-10 md:grid  md:gap-8  md:grid-cols-12 ">
                    <div
                        className=" md:col-span-7 border-0 rounded-xl overflow-hidden animate__animated animate__fadeInLeft">
                        <img alt="pic" src="/img/ng.jpg"/>
                    </div>
                    <div
                        className="overflow-hidden md:col-span-5 flex mt-10 md:mt-0 justify-center flex-col border-0 rounded-xl text-white bg-[#373655] opacity-80 animate__animated animate__fadeInRight">
                        <div className="border-b-2 w-full h-10 flex items-center"
                             style={{'background': 'linear-gradient(88deg, rgb(210, 81, 95) 28%, rgb(70, 64, 171) 100%, rgb(0, 0, 0) 100%)'}}>
                            <div className="w-4 h-4 border rounded-xl inline-block mr-2 ml-auto bg-white"></div>
                            <div className="w-4 h-4 border rounded-xl inline-block mr-2 bg-white"></div>
                            <div className="w-4 h-4 border rounded-xl inline-block mr-2 bg-white"></div>
                        </div>
                        <div className="flex-c flex-1 opacity-90">
                            <h1 className="text-2xl my-2 lg:text-3xl">梦蜉蝣</h1>
                            <p className="py-1 opacity-80 lg:text-xl ">看东风</p>
                            <p className="text-xl my-4 lg:text-2xl">春风拂叶奏乐音，琴瑟悠悠似无心</p>
                            <p className="text-xl my-4 lg:text-2xl">酒对半月谈天久，蜉蝣梦短也尽情</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container w-full dash-line mt-10 "></div>
            </section>
        </main>
    )
}
