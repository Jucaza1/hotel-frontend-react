// 	for i := 0; i < 12; i++ {
// 	item := fmt.Sprintf("public/img/landing/land%d.jpg", i+1)
// 	fmt.Println(item)
// 	items = append(items, item)
//
// }

// create a landing page using the carrousel component and text form the public/text/landing.json file

import { useEffect, useState } from 'react'
import Carrousel from '../components/carrousel'
import text from '../assets/text/landing/file1.json'

export default function Home() {
    // the text is stored in the public/text/landing.json file but the images links are in public/img/landing
    // so we need to fetch the text and build the image links
    const [landing, setLanding] = useState({ title: '', paragraph: [] as string[] })
    const [items, setItems] = useState([] as string[])
    useEffect(() => {
        setLanding(text.section[0])
        const items = []
        for (let i = 0; i < 12; i++) {
            items.push(`public/img/landing/land${i + 1}.jpg`)
        }
        setItems(items)
    }, [])

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold">{landing.title}</h1>
            {landing.paragraph.map((p, index) => {
                return <Card key={index} title={``} paragraph={p} />
            })}
            <Carrousel items={items.slice(0, items.length / 2)} reverse={false} />
            <Carrousel items={items.slice(items.length / 2)} reverse={true} />
        </div>
    )
}
function Card({ title, paragraph }: { title: string, paragraph: string }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="text-xl">{paragraph}</p>
        </div>
    )
}

