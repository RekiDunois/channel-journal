import style from './layout.module.sass';
import { ReactNode } from 'react';

interface Prop {
    children: ReactNode
}

function MainLayout({ children }:Prop) {
    return <div className={style.container}>{ children }</div>
}

export default MainLayout;