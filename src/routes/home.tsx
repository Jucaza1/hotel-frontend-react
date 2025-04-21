
import { useEffect, useState } from 'react'
import Carrousel from '../components/Carrousel'
import text from '../assets/text/landing/file1.json'
import { Button1 } from '../components/Button1'

export default function Home() {
    const [landing, setLanding] = useState({ title: '', paragraph: [] as string[] })
    const [items, setItems] = useState([] as string[])
    useEffect(() => {
        setLanding(text.section[0])
        const items = []
        for (let i = 0; i < 12; i++) {
            items.push(`/img/landing/land${i + 1}.jpg`)
        }
        setItems(items)
    }, [])

    return (
        <div className="flex flex-col items-center gap-11 h-screen max-w-[1280px] my-3">
            <div className="flex flex-col items-center justify-center h-max">
                <Card title={landing.title} paragraphs={landing.paragraph} />
            </div>
            <div className="flex flex-col gap-3 max-w-[1280px] items-stretch">
                <Carrousel items={items.slice(0, items.length / 2)} reverse={false} />
                <Carrousel items={items.slice(items.length / 2)} reverse={true} />
                <div className="flex flex-row justify-center gap-3">
                    <Button1 to="/hotels">
                        Hotels
                    </Button1>
                    <Button1 to="/login">
                        Login
                    </Button1>
                </div>
            </div>
        </div>
    )
}
function Card({ title, paragraphs }: { title: string, paragraphs: string[] }) {
    return (
        <div className="flex flex-col items-center gap-3 my-10 justify-center">
            <h1 className="text-6xl font-bold">{title}</h1>
            {paragraphs.map((p, index) => {
                return <p key={index} className="text-xl">{p}</p>
            })}
        </div>
    )
}
