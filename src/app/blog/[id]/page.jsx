import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import {notFound} from "next/navigation"

async function getData(id) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' })

    if (!res.ok) {
        return notFound()
    }

    return res.json()
}

const BlogPost = async ({params}) => {

    const data = await getData(params.id);

    return (
        <div className={styles.container}>

            <div className={styles.top}>
                <div className={styles.info}>

                    <h1 className={styles.title} >{data.title}</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed magni enim est tempora ducimus! Cumque, totam. Soluta totam optio expedita blanditiis repellendus aut, amet perspiciatis! Laborum voluptate dolore veniam eos.
                    </p>
                    <div className={styles.author}>
                        <Image src="/assets/about.jpeg" width={50} height={50} alt='vsb' className={styles.avatar} />
                        <span className={styles.username}>Jhon Doe</span>
                    </div>
                </div>

                <div className={styles.imgContainer}>
                    <Image src="/assets/about.jpeg" width={600} height={300} alt='vsb' className={styles.image} />
                </div>
            </div>

            <div className={styles.content}>
                <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam amet perferendis neque ducimus minima consectetur saepe labore ad exercitationem id, nihil tempore perspiciatis nam, possimus necessitatibus iusto, facilis distinctio inventore aliquam. Facere esse totam architecto, voluptate ab hic cumque exercitationem laborum eos autem sunt est aperiam eius dolore nemo modi reprehenderit libero. Possimus dicta hic exercitationem fuga, tempore harum enim officia itaque officiis reiciendis. Tempore suscipit tempora ad esse amet recusandae delectus,
                    <br />
                    <br />
                    soluta vel veniam officiis consequuntur adipisci reiciendis reprehenderit ipsam dicta optio, dolorem voluptas odit sit. Iste officiis in ullam blanditiis ipsum exercitationem aut, porro eos omnis recusandae quasi deleniti unde amet dolore, similique voluptatibus reprehenderit autem laborum dolorum nisi. Eum quia, unde porro cumque autem expedita veritatis labore pariatur veniam? Quos fuga, ea velit repellat officia iure temporibus reprehenderit error labore. Nihil nobis et cupiditate at placeat nemo consectetur, soluta adipisci fuga numquam impedit a illum earum saepe libero ratione fugit corporis culpa, ipsam, necessitatibus animi reprehenderit nulla. Quasi amet cumque saepe tempora, architecto quod dolore dignissimos molestias consequatur eligendi aperiam! Est beatae blanditiis consequuntur harum non iste, optio odio magni eaque nemo porro itaque, natus voluptates nesciunt nisi autem
                    <br />
                    <br />
                    voluptatem eos debitis! Quis, atque, enim unde non laboriosam, voluptas quia culpa nemo dolorum impedit commodi modi quisquam nam dicta explicabo dolore. Nisi quisquam iusto hic nostrum corporis beatae fuga veniam incidunt dolorum atque nihil recusandae a quasi itaque, aspernatur animi officiis ipsum labore natus iste architecto modi ut! Aut inventore, nulla laborum quis corporis consectetur labore vel.</p>
            </div>
        </div>
    )
}

export default BlogPost