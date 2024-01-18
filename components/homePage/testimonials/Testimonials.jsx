import React, { useState, useEffect } from 'react'
import { delay, motion } from 'framer-motion'
import Link from 'next/link'
import styles from './Testimonials.module.css'

async function getTestimonialsData() {
    const { testimonials } = await require('../../../data/testimonials.json')
    return testimonials
}

export default function Testimonials() {
    const [testimonialsData, setTestimonialsData] = useState([])
    useEffect(() => {
        async function fetchData() {
            const testimonials = await getTestimonialsData()
            setTestimonialsData(testimonials)
        }
        fetchData()
    }, [])
    const testimanialAnimationVariants = {
        initial: {
            opacity: 0,
            scale: 0,
        },
        animate: (index) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.25 * index,
            },
        }),
    }
    return (
        <section className={`home-section ${styles.testimonials}`}>
            <article className={styles.article}>
                <h2 className={`home-section-title ${styles.title}`}>
                    Ils m'ont fait confiance.
                </h2>
                <div className={styles.wrapper}>
                    {testimonialsData.map((testimonial, index) => (
                        <article
                            key={'testimonial' + index}
                            className={styles.testimonial}
                        >
                            <motion.blockquote
                                variants={testimanialAnimationVariants}
                                initial="initial"
                                whileInView={() => (
                                    console.log('in view'), 'animate'
                                )}
                                custom={index}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1,
                                    delay: 0.75,
                                }}
                                className={styles.content}
                            >
                                {testimonial.me && (
                                    <motion.div
                                        className={styles.comment}
                                        animate={{ opacity: 1 }}
                                        // onAnimationComplete={() => setStartVideo(true)}
                                    >
                                        c'est moi
                                    </motion.div>
                                )}
                                {testimonial.content}
                            </motion.blockquote>
                            <span className={styles.author}>
                                {testimonial.author}
                            </span>
                            <Link
                                href={`/projects?id=${testimonial.id}`}
                                scroll={false}
                                className={styles.link}
                            >
                                Voir le projet
                            </Link>
                        </article>
                    ))}
                </div>
            </article>
        </section>
    )
}
