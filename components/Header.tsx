'use client'
import Link from "next/link";
import ActiveLink from "@/components/ActiveLink";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";

const routes = [
    {name: "首页", href: "/"},
    {
        name: "项目", href: "/projects", children: [
            {name: "图像处理", href: "/projects/imgProcess"},
            {name: "图像处理2", href: "/projects/imgProcess2"},
        ]
    },
    {name: "关于我", href: "/me"}
]
export default function Header() {
    const [scrollY, setScrollY] = useState(0)
    const [collapse, setCollapse] = useState(false)
    const pathname = usePathname()
    const setScrollYHandle = () => {
        window && (setScrollY(window.scrollY))
    }
    useEffect(() => {
        window.addEventListener('scroll', setScrollYHandle)
        return () => window.removeEventListener('scroll', setScrollYHandle)
    }, [scrollY])

    return (
        <header className={scrollY > 150 ? 'animate__animated  animate__fadeInDown animate__faster' : ''}>
            <div className="container flex">
                <span className="logo-title mx-2 flex justify-center items-center">
                    WCQ-SITE
                </span>
                <nav className={collapse&&'is-active'||''}>
                    {routes.map(item => <ul key={item.href}>
                        <li>
                            <Link className={pathname == item.href && "active" || ''} href={item.href}>
                                {item.name}
                            </Link>
                        </li>
                        {
                            item.children && <ul>
                                {item.children.map(child => <li key={child.href}>
                                    <Link
                                        className={'hvr-underline-from-center' + (pathname == child.href && "active" || '')}
                                        href={child.href}>
                                        {child.name}
                                    </Link>
                                </li>)}
                            </ul>
                        }
                    </ul>)}
                    <button className="rounded-2xl px-4 py-1 text-white hvr-sweep-to-right overflow-hidden w-fit"
                            style={{background: '#bd60d7'}}>联系我
                    </button>
                </nav>
                <button className={"hamburger hamburger--slider visible md:!hidden !flex !ml-auto !py-2.5 "+(collapse&&'is-active')} type="button" onClick={()=>setCollapse(!collapse)}>
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
            </div>
        </header>
    )
}