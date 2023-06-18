'use client'
import Link from "next/link";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";

interface Route {
    name: string
    href: string | null
    target?: string
    children?: Route[]
}

const routes: Route[] = [
    {name: "首页", href: "/"},
    {
        name: "项目", href: null, children: [
            {name: "图像处理", href: "https://wuchunquan.github.io/img-process-site/", target: "_blank"},
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
                <nav className={collapse && 'is-active' || ''}>
                    {routes.map(item => <ul key={item.href}>
                        <li>
                            {
                                <Link
                                    className={(pathname == item.href || (item.children && item.children.find(child => child.href === pathname))) && "active" || ''}
                                    // @ts-ignore
                                    href={item.href || item.children?.[0].href}
                                    target={item.target}>
                                    {item.name}
                                </Link>
                            }
                        </li>
                        {
                            item.children && <ul>
                                {item.children.map(child => <li key={child.href} className='hvr-underline-from-center'>
                                    <Link
                                        target={child.target}
                                        className={(pathname == child.href && "active" || '')}
                                        href={child.href === null ? 'javascript:' : child.href}
                                    >
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
                <button
                    className={"hamburger hamburger--slider visible md:!hidden !flex !ml-auto !py-2.5 " + (collapse && 'is-active')}
                    type="button" onClick={() => setCollapse(!collapse)}>
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
            </div>
        </header>
    )
}