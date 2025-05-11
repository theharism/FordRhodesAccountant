'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles.css';

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    return (
        <header className="header">
            <div className="container">
                {/* Logo */}
                <div className="logo">
                    <Link href="/" className="text-logo">
                        Ford Rhodes Accountants
                    </Link>
                </div>

                {/* Navigation Menu */}
                <nav className="nav-menu">
                    <ul>
                        <li>
                            <Link
                                href="/"
                                className={isActive('/') ? 'active' : ''}
                            >
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className={isActive('/about') ? 'active' : ''}
                            >
                                ABOUT
                            </Link>
                        </li>
                        <li className="dropdown">
                            <Link
                                href="/taxreturns"
                                className={pathname.startsWith('/tax') ? 'active' : ''}
                            >
                                SERVICES <span>&#9660;</span>
                            </Link>
                            <ul className="dropdown-menu" style={{ textAlign: 'left', paddingLeft: '20px', display: 'block', width: 'max-content', margin: 0 }}>
                                <li>
                                    <Link href="/yearend">Accounting Year End Accounts</Link>
                                </li>
                                <li>
                                    <Link href="/taxreturns">Accounting Tax Returns</Link>
                                </li>
                                <li>
                                    <Link href="/bookeeping">Accounting Bookkeeping</Link>
                                </li>
                                <li>
                                    <Link href="/vatreturns">Accounting VAT Returns</Link>
                                </li>
                                <li>
                                    <Link href="/payroll">Accounting Payroll</Link>
                                </li>
                                <li>
                                    <Link href="/taxsaving">Accounting Tax Savings</Link>
                                </li>
                                <li>
                                    <Link href="/corporationtax">Accounting Corporation Tax</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link
                                href="/team"
                                className={isActive('/team') ? 'active' : ''}
                            >
                                TEAM
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/testimonials"
                                className={isActive('/testimonials') ? 'active' : ''}
                            >
                                TESTIMONIALS
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className={isActive('/contact') ? 'active' : ''}
                            >
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Get in Touch Button */}
                <div className="get-in-touch">
                    <Link href="/contact" className="cta-button">
                        GET IN TOUCH
                    </Link>
                </div>
            </div>
        </header>
    );
}
